import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { createElement } from 'react';
import App from './App';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/*', (req, res, next) => {
  console.log(`Request URL = ${req.url}`);
  if (req.url !== '/') {
    return next();
  }
  const reactApp = ReactDOMServer.renderToString(createElement(App));
  console.log(reactApp);

  const indexFile = path.resolve('build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      const errMsg = `There is an error: ${err}`;
      console.error(errMsg);
      return res.status(500).send(errMsg);
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(8080, () => console.log('Express server is running on localhost:8080'));
