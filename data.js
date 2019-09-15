// example of database

const users = [
  { id: 1, name: 'Anton Danilov', age: 20 },
  { id: 2, name: 'Somename Somesurname', age: 25 },
  { id: 3, name: 'Somename2 Somesurname2', age: 25 },
];

const things = [
  { id: 1, user_id: 1, name: 'iPhone' },
  { id: 2, user_id: 1, name: 'MacBook Pro' },
  { id: 3, user_id: 2, name: 'MacBook' },
];

module.exports = {
  users,
  things,
};
