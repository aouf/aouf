const { GraphQLString } = require('graphql');
const { nonNull } = require('../../utils/graphqlUtils');
const PublicUserType = require('../types/PublicUserType');
const { read: readUser, signupVolunteer } = require('../../models/User');

const VolunteerSignupMutation = {
  description: 'Signup the viewer as volunteer',
  type: nonNull(PublicUserType),
  args: {
    userName: {
      type: nonNull(GraphQLString),
      description: 'User’s user name',
    },
    email: {
      type: nonNull(GraphQLString),
      description: 'User’s email',
    },
    password: {
      type: nonNull(GraphQLString),
      description: 'User’s password',
    },
    phone: {
      type: GraphQLString,
      description: 'User’s phone',
    },
  },
  resolve: async (root, { userName, email, password, phone }) => {
    const userId = await signupVolunteer({ userName, email, password, phone });

    return readUser(userId);
  },
};

module.exports = VolunteerSignupMutation;
