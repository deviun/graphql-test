const data = require('../../data');

module.exports = (root, args) => {
  console.log('thing resolver', 'args', args);
  
  let payload = null;

  if (args.list) {
    payload = data.things.filter((t) => Number(t.user_id) === Number(args.user_id));
  } else {
    payload = data.things.find((t) => Number(t.id) === Number(args.id));
  }

  return payload;
};
