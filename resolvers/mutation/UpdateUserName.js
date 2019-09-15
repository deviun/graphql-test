module.exports = (obj, args, ctx, info) => {
  console.log('mutation UpdateUserName handler', args);

  // mock updating
  return {
    id: args.id,
    name: args.name,
  };
};
