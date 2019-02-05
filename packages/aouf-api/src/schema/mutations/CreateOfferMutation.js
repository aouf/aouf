const { GraphQLID, GraphQLString } = require('graphql');
const { nonNull, requireVolunteer } = require('../../utils/graphqlUtils');
const { fromGlobalId } = require('../../utils/relayUtils');
const OfferType = require('../types/OfferType');
const { read: readOffer, create: createOffer } = require('../../models/Offer');

const CreateOfferMutation = {
  description: 'Create an offer',
  type: nonNull(OfferType),
  args: {
    categoryId: {
      type: nonNull(GraphQLID),
      description: 'ID of the offer’s category',
    },
    title: {
      type: nonNull(GraphQLString),
      description: 'Offer’s title',
    },
    description: {
      type: GraphQLString,
      description: 'Offer’s description',
    },
  },
  resolve: requireVolunteer(
    async (root, { categoryId, title, description }, req) => {
      const { userId } = await req.getViewer();
      const offerId = await createOffer({
        categoryId: fromGlobalId(categoryId, 'Category'),
        title,
        description,
        userId,
      });

      return readOffer(offerId);
    },
  ),
};

module.exports = CreateOfferMutation;
