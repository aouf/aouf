const { query, paginate, first } = require('../database/client');

const TABLE = 'offer';

const read = id => first(query(TABLE).where({ id }));

const list = ({ isAvailable }, options) => {
  const qb = paginate(query(TABLE), options);

  if (typeof isAvailable === 'boolean') {
    qb.where('isAvailable', isAvailable);
  }

  return qb;
};

module.exports = {
  read,
  list,
};
