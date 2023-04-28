import { ReactNode } from 'react';

const Html = ({ children }: { children: ReactNode }, preloadedState = { search: '' }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link href="/static/css/main.69c8976c.css" rel="stylesheet" />
        <title>React app</title>
      </head>
      <body>
        <div id="root">${children}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
  );
};

export default Html;
