const { GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');
const { ACCESS_FORBIDDEN } = require('../errors');

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

const requireAdmin = resolver => async (parent, args, req) => {
  const { user } = await req.getViewer();

  if (!user || !user.isAdmin) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  return resolver(parent, args, req);
};

const requireVolunteer = resolver => async (parent, args, req) => {
  const { user } = await req.getViewer();

  if (!user || !user.isVolunteer) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  return resolver(parent, args, req);
};

module.exports = {
  feedOffsetArgs,
  listOf,
  nonNull,
  requireAdmin,
  requireVolunteer,
};
