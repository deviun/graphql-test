const pick = require('lodash/pick');
const getRequestedFields = require('../../libs/get-requested-fields');
const data = require('../../data');

module.exports = (obj, args, ctx, info) => {
  const fields = getRequestedFields(info);
  const userFields = Object.keys(fields.user);

  console.log('userFields', userFields);

  const user = data.users.find((u) => Number(u.id) === Number(args.id));

  console.log('return user', user);

  // example to extract  fields
  return pick(user, userFields);
};
