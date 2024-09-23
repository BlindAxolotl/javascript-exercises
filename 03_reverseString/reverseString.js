const reverseString = function (string) {
  let len = string.length;
  let newstr = "";

  for (let i = 0; i < len; i++) {
    newstr += string.at(len - 1 - i);
  }

  return newstr;
};

// Do not edit below this line
module.exports = reverseString;
