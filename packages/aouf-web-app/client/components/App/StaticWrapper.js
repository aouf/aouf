import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router';
import { BUNDLE_DOM_NODE_ID, RELAY_INITITAL_DATA_VAR } from '../../constants';

const AppServerWrapper = ({
  lang,
  dir,
  scripts,
  location,
  staticContext,
  initialData,
  children,
}) => (
  <html lang={lang} dir={dir}>
    <head>
      <title>App</title>
    </head>
    <body>
      <div id={BUNDLE_DOM_NODE_ID}>
        <StaticRouter location={location} context={staticContext}>
          {children}
        </StaticRouter>
      </div>
      {initialData && (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.${RELAY_INITITAL_DATA_VAR} = ${JSON.stringify(
              initialData,
            )};`,
          }}
        />
      )}
      {scripts.map(script => (
        <script {...script} />
      ))}
    </body>
  </html>
);

AppServerWrapper.propTypes = {
  location: PropTypes.string,
  staticContext: PropTypes.object,
  children: PropTypes.node.isRequired,
  scripts: PropTypes.arrayOf(PropTypes.object.isRequired),
  lang: PropTypes.string,
  dir: PropTypes.string,
  initialData: PropTypes.object,
};

export default AppServerWrapper;
