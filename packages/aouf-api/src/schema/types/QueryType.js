const { GraphQLID, GraphQLObjectType } = require('graphql');
const { feedOffsetArgs, listOf, nonNull } = require('../../utils/graphqlUtils');
const ViewerType = require('./ViewerType');
const OfferType = require('./OfferType');
const { list: listOffer, read: readOffer } = require('../../models/Offer');
const { nodeField } = require('../node');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: {
      type: nonNull(ViewerType),
      description: 'The current user',
      resolve: (root, args, req) => req.getViewer(),
    },
    offer: {
      type: nonNull(OfferType),
      description: 'Offer corresponding to an ID',
      args: {
        offerId: {
          type: nonNull(GraphQLID),
          description: 'The offer’s ID',
        },
      },
      resolve: (root, { offerId }) => readOffer(offerId),
    },
    offerList: {
      type: listOf(OfferType),
      description: 'List of offers',
      args: feedOffsetArgs,
      resolve: (root, { offset, limit }) =>
        listOffer({ isAvailable: true }, { offset, limit }),
    },
  },
});
