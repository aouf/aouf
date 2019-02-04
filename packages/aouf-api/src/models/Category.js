const { query, first } = require('../database/client');

const TABLE = 'category';

const read = id => first(query(TABLE).where({ id }));

module.exports = {
  read,
};
