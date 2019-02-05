const { GraphQLObjectType } = require('graphql');
const SigninMutation = require('../mutations/SigninMutation');
const SignoutMutation = require('../mutations/SignoutMutation');
const VolunteerSignupMutation = require('../mutations/VolunteerSignupMutation');
const CreateOfferMutation = require('../mutations/CreateOfferMutation');
const CreateDislodgedSignupTokenMutation = require('../mutations/CreateDislodgedSignupTokenMutation');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createOffer: CreateOfferMutation,
    createDislodgedSignupToken: CreateDislodgedSignupTokenMutation,
    signin: SigninMutation,
    signout: SignoutMutation,
    volunteerSignup: VolunteerSignupMutation,
  },
});
