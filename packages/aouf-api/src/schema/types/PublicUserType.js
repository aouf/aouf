const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');
const { globalIdField } = require('graphql-relay');
const { defineNodeType, nodeInterface } = require('../node');

const PublicUserType = new GraphQLObjectType({
  name: 'PublicUser',
  fields: {
    id: globalIdField('PublicUser'),
    isAdmin: {
      type: GraphQLBoolean,
      description: 'If the user is an admin',
    },
    isDislodged: {
      type: GraphQLBoolean,
      description: 'If the user is currently dislodged',
    },
    isVolunteer: {
      type: GraphQLBoolean,
      description: 'If the user is a volunteer',
    },
    userName: {
      type: GraphQLString,
      description: 'User’s user name',
    },
    gender: {
      type: GraphQLString,
      description: 'User’s gender',
    },
  },
  interfaces: [nodeInterface],
});

defineNodeType(PublicUserType);

module.exports = PublicUserType;
