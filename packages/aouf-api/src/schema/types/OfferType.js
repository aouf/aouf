const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');
const { globalIdField } = require('graphql-relay');
const { nonNull } = require('../../utils/graphqlUtils');
const { defineNodeType, nodeInterface } = require('../node');
const { read: readCategory } = require('../../models/Category');
const { read: readUser } = require('../../models/User');

const OfferType = new GraphQLObjectType({
  name: 'Offer',
  fields: () => ({
    id: globalIdField('Offer'),
    isAvailable: {
      type: GraphQLBoolean,
      description: 'If the offer is available',
    },
    title: {
      type: nonNull(GraphQLString),
      description: 'Offer’s title',
    },
    description: {
      type: GraphQLString,
      description: 'Offer’s description',
    },
    category: {
      type: nonNull(require('./CategoryType')),
      description: 'Offer’s category',
      resolve: ({ categoryId }) => readCategory(categoryId),
    },
    user: {
      type: nonNull(require('./PublicUserType')),
      description: 'The user who made the offer',
      resolve: ({ userId }) => readUser(userId),
    },
  }),
  interfaces: [nodeInterface],
});

defineNodeType(OfferType);

module.exports = OfferType;
