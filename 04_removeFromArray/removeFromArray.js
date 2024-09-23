const removeFromArray = function (array) {
  const removes = Array.prototype.slice.call(arguments, 1);

  const checkVal = function (val) {
    if (removes.includes(val)) {
      return false;
    } else {
      return true;
    }
  };

  const filtered = array.filter(checkVal);
  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
