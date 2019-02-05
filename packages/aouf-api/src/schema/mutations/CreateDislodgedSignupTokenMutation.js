const { GraphQLString } = require('graphql');
const jwt = require('jsonwebtoken');
const { nonNull, requireAdmin } = require('../../utils/graphqlUtils');
const { readByEmail: readUserByEmail } = require('../../models/User');

const {
  DISLODGED_TOKEN_EXPIRATION_DELAY,
  JWT_SECRET,
} = require('../../constants');
const { EMAIL_ALREADY_SIGNED_UP } = require('../../errors');

const CreateDislodgedSignupTokenMutation = {
  description: 'Create a signup token for a dislodged person',
  type: nonNull(GraphQLString),
  args: {
    userName: {
      type: nonNull(GraphQLString),
      description: 'User’s user name',
    },
    email: {
      type: nonNull(GraphQLString),
      description: 'User’s email',
    },
    phone: {
      type: GraphQLString,
      description: 'User’s phone',
    },
  },
  resolve: requireAdmin(async (root, { userName, email, phone }) => {
    if (await readUserByEmail(email)) {
      throw new Error(EMAIL_ALREADY_SIGNED_UP);
    }

    return jwt.sign(
      { userName, email, phone },
      JWT_SECRET,
      { expiresIn: DISLODGED_TOKEN_EXPIRATION_DELAY }, // Expires in two weeks
    );
  }),
};

module.exports = CreateDislodgedSignupTokenMutation;
