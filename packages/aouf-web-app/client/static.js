import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import StaticWrapper from './components/App/StaticWrapper';
import { setEnvironment, createEnvironment } from './utils/relayUtils';

const render = props =>
  renderToString(
    <StaticWrapper {...props}>
      <App />
    </StaticWrapper>,
  );

export default async ({ request, scripts }) => {
  const staticContext = {};
  const props = {
    staticContext,
    location: request.url,
    scripts,
  };

  const environment = setEnvironment(createEnvironment({ preFetch: true }));
  render(props);
  const staticData = await environment.query;

  setEnvironment(createEnvironment({ staticData }));

  const html = `<!doctype html>\n${render({
    initialData: staticData,
    ...props,
  })}`
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
    send: html,
  };
};
