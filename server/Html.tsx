import { ReactNode } from 'react';
import rootReducer from '../src/redux/reducers/rootReducer';

const Html = ({
  preloadedState,
  children,
}: {
  preloadedState: Partial<ReturnType<typeof rootReducer>>;
  children: ReactNode;
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React app</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script>
          `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`
        </script>
      </body>
    </html>
  );
};

export default Html;
