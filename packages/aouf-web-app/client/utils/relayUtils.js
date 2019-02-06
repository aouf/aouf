import {
  fetchQuery as fetchRelayQuery,
  commitMutation as commitRelayMutation,
} from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetch from 'isomorphic-fetch';
import { API_ENDPOINT } from '../constants';

let currentEnvironment;

export const consumeStaticProps = ({ query, variables }) => {
  const environment = getEnvironment();
  if (environment.staticData) {
    const { staticData } = environment;
    delete environment.staticData;
    return { error: null, loading: false, props: staticData };
  }

  if (environment.preFetch) {
    environment.query = fetchQuery(query, variables);
    return { error: null, loading: true };
  }

  return undefined;
};

export const fetchJson = (operation, variables) =>
  fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());

export const createEnvironment = ({ staticData, preFetch } = {}) => {
  const environment = new Environment({
    network: Network.create(fetchJson),
    store: new Store(new RecordSource()),
  });
  environment.preFetch = Boolean(preFetch);
  environment.staticData = staticData;

  return environment;
};

export const setEnvironment = environment => {
  currentEnvironment = environment;

  return currentEnvironment;
};

export const getEnvironment = () => currentEnvironment;

export const fetchQuery = (query, variables) =>
  fetchRelayQuery(getEnvironment(), query, variables);

export const commitMutation = options =>
  new Promise((onCompleted, onError) => {
    commitRelayMutation(getEnvironment(), { ...options, onCompleted, onError });
  });
