const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');

const {
  DEV_ENV,
  BUNDLE_SERVER_PATH,
  BUNDLE_CLIENT_PATH,
  BUNDLE_PUBLIC_PATH,
} = require('../constants');

const SERVER_MANIFEST_PATH = path.resolve(
  `${BUNDLE_SERVER_PATH}/manifest.json`,
);
const CLIENT_MANIFEST_PATH = path.resolve(
  `${BUNDLE_CLIENT_PATH}/manifest.json`,
);

const loadClient = () => {
  const { 'main.js': component } = JSON.parse(
    fs.readFileSync(SERVER_MANIFEST_PATH, 'utf8'),
  );

  return {
    scripts: JSON.parse(
      fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf8'),
    ).scripts.map(src => ({
      src: `${BUNDLE_PUBLIC_PATH}/${src}`,
      key: src,
    })),
    // eslint-disable-next-line import/no-dynamic-require
    render: require(path.resolve(`${BUNDLE_SERVER_PATH}/${component}`)).default,
  };
};

const client = loadClient();

const renderController = async (req, res) => {
  const { render, scripts } = DEV_ENV ? loadClient() : client;
  const { status, redirect, send } = await render({ request: req, scripts });

  if (redirect) {
    res.redirect(status, redirect);
  } else {
    res.status(status || 200).send(send);
  }
};

module.exports = renderController;
