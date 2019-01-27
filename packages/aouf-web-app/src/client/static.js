import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticWrapper from './components/App/StaticWrapper';
import App from './components/App';

const render = ({ url, scripts }) => {
  const staticContext = {};
  const output = `<!doctype html>\n${renderToString(
    <StaticWrapper
      location={url}
      scripts={scripts}
      staticContext={staticContext}
    >
      <App />
    </StaticWrapper>,
  )}`
    // move styles from body to the head
    .replace(/(<\/head>[\s]*<body[\s>].*)(<style.+\/style>)/gi, '$2$1');

  if (staticContext.url) {
    return {
      status: staticContext.statusCode === 301 ? 301 : 302,
      redirect: staticContext.url,
    };
  }

  return {
    status: staticContext.statusCode || 200,
    send: output,
  };
};

export default render;
