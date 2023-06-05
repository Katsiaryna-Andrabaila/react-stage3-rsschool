import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const router = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
app.use(router.middlewares);

app.use('*', async (req, res) => {
  let html = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8');
  html = await router.transformIndexHtml(req.originalUrl, html);
  const parts = html.split('<!--ssr-outlet-->');

  const { render } = await router.ssrLoadModule('server/render.tsx');
  const [stream, preloadedState] = await render(req.originalUrl, {
    bootstrapModules: ['../src/App.tsx'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      res.write(parts[0]);
      stream.pipe(res);
      res.write(
        `${parts[1]}<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}</script>`
      );
    },
    onError(error: Error) {
      console.log(error);
    },
    onAllReady() {
      res.end();
    },
  });
});

app.listen(3000, () => console.log('Express server is running on localhost:3000'));
