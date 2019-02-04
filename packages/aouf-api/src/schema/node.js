const { fromGlobalId, nodeDefinitions } = require('../utils/relayUtils');
const { read: readCategory } = require('../models/Category');
const { read: readOffer } = require('../models/Offer');
const { read: readUser } = require('../models/User');

const node = nodeDefinitions();

node.createNodeResolver(({ type, id }, req) => {
  switch (type) {
    case 'Viewer': {
      return req.getViewer();
    }
    case 'Category':
      return readCategory(fromGlobalId(id, type));
    case 'Offer':
      return readOffer(fromGlobalId(id, type));
    case 'User':
      return readUser(fromGlobalId(id, type));
    default:
      return undefined;
  }
});

module.exports = node;
