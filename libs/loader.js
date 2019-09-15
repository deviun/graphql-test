const fs = require('fs');
const path = require('path');

const syncLoader = (filename) => {
  const pathName = path.resolve(__dirname, '../', filename);
  const data = fs.readFileSync(pathName, 'utf8');

  return data;
};

module.exports = {
  syncLoader,
};
