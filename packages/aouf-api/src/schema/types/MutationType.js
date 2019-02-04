const { GraphQLObjectType } = require('graphql');
const SigninMutation = require('../mutations/SigninMutation');
const SignoutMutation = require('../mutations/SignoutMutation');
const VolunteerSignupMutation = require('../mutations/VolunteerSignupMutation');
const CreateOfferMutation = require('../mutations/CreateOfferMutation');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createOffer: CreateOfferMutation,
    signin: SigninMutation,
    signout: SignoutMutation,
    volunteerSignup: VolunteerSignupMutation,
  },
});
