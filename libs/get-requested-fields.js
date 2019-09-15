const getFieldsTree = (root) => {
  const result = {};

  for(let i = 0; i < root.length; i += 1) {
    const fieldInfo = root[i];
    const fieldName = fieldInfo.name.value;

    result[fieldName] = fieldInfo.selectionSet
      ? getFieldsTree(fieldInfo.selectionSet.selections)
      : null;
  }

  return result;
};

const getRequestedFields = (info) => {
  return getFieldsTree(info.operation.selectionSet.selections);
};

module.exports = getRequestedFields;
