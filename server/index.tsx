import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { StaticRouter } from 'react-router-dom/server';
import Html from './render';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();

const html = fs.readFileSync(path.resolve(__dirname, '../build', 'index.html')).toString();
const parts = html.split('not rendered');

router.use('^/$', (req, res) => {
  const stream = renderToPipeableStream(
    <Html>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    {
      //bootstrapScripts: ['/main.js'],
      onShellReady() {
        //res.setHeader('content-type', 'text/html');
        stream.pipe(res);
      },
      onError(error) {
        console.log(error);
      },
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
    }
  );

  return res.send(html.replace('<div id="root"></div>', `<div id="root">${stream}</div>`));
});

router.use(express.static(path.resolve(__dirname, '../build')));

app.use(router);

app.listen(3000, () => console.log('Express server is running on localhost:3000'));
