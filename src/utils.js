export const matcher = ({ option, searchTerm = '', searchIndices }) => {
  searchTerm = searchTerm.trim().toLowerCase();
  if (typeof option === 'string') {
    return option.toLowerCase().indexOf(searchTerm) !== -1;
  }
  if (searchIndices) {
    return makeArray(searchIndices).some(index => {
      return (option[index] || '').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }
  return true;
};

export const makeArray = obj => {
  if (obj === null || obj === undefined) {
    return [];
  }
  return Array.isArray(obj) ? obj : [obj];
};

export const isOptGroup = option => option.label && option.options;

export const getOptionIndex = (options, option) => {
  let paths = [];
  let optionFound = false;

  (function traverse(options) {
    optionFound = options.some((currentOption, index) => {
      if (currentOption === option) {
        paths.push(index);
        optionFound = true;
        return true;
      }

      if (isOptGroup(currentOption)) {
        paths.push(index);
        return traverse(currentOption.options, index);
      }
    });

    if (!optionFound) {
      paths.pop();
    }

    return optionFound;
  })(options);

  return paths.join('.');
};
