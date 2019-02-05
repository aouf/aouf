const { GraphQLString } = require('graphql');
const jwt = require('jsonwebtoken');
const { nonNull } = require('../../utils/graphqlUtils');
const PublicUserType = require('../types/PublicUserType');
const { read: readUser, signupDislodged } = require('../../models/User');
const { JWT_SECRET } = require('../../constants');
const { INVALID_SIGNUP_TOKEN, UNKNOWN_ERROR } = require('../../errors');

const DislodgedSignupMutation = {
  description: 'Signup the viewer as dislodged',
  type: nonNull(PublicUserType),
  args: {
    token: {
      type: nonNull(GraphQLString),
      description: 'User’s signup token',
    },
    password: {
      type: nonNull(GraphQLString),
      description: 'User’s password',
    },
  },
  resolve: async (root, { token, password }) => {
    try {
      jwt.verify(token, JWT_SECRET);
    } catch (e) {
      if (e.name === 'JsonWebTokenError') {
        throw new Error(INVALID_SIGNUP_TOKEN);
      } else {
        throw new Error(UNKNOWN_ERROR);
      }
    }

    const { userName, email, phone } = jwt.decode(token);
    const userId = await signupDislodged({ userName, email, phone, password });

    return readUser(userId);
  },
};

module.exports = DislodgedSignupMutation;
