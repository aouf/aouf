import React from 'react';
import { hydrate } from 'react-dom';
import { BUNDLE_DOM_NODE_ID, RELAY_INITITAL_DATA_VAR } from './constants';
import { setEnvironment, createEnvironment } from './utils/relayUtils';
import ClientWrapper from './components/App/ClientWrapper';
import App from './components/App';

setEnvironment(
  createEnvironment({ staticData: window[RELAY_INITITAL_DATA_VAR] }),
);

hydrate(
  <ClientWrapper>
    <App />
  </ClientWrapper>,
  document.getElementById(BUNDLE_DOM_NODE_ID),
);
