const { GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');

const nonNull = type => new GraphQLNonNull(type);

const listOf = type => nonNull(new GraphQLList(nonNull(type)));

const feedOffsetArgs = {
  offset: {
    type: nonNull(GraphQLInt),
    description: 'Offset number',
  },
  limit: {
    type: nonNull(GraphQLInt),
    description: 'Max number of elements',
  },
};

module.exports = {
  feedOffsetArgs,
  listOf,
  nonNull,
};
