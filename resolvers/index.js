const Query = require('./query');
const Mutation = require('./mutation');

module.exports = {
  Query,
  Mutation,
  User: {
    things: (user) => Query.thing(null, { user_id: user.id, list: true }),
  },
};
