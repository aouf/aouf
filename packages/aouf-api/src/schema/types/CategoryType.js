const { GraphQLObjectType, GraphQLString } = require('graphql');
const { globalIdField } = require('graphql-relay');
const { nonNull } = require('../../utils/graphqlUtils');
const { defineNodeType, nodeInterface } = require('../node');

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: {
    id: globalIdField('Category'),
    name: {
      type: nonNull(GraphQLString),
      description: 'Category’s name',
    },
  },
  interfaces: [nodeInterface],
});

defineNodeType(CategoryType);

module.exports = CategoryType;
