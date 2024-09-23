const sumAll = function (num1, num2) {
  let remainder1 = num1 % 1;
  let remainder2 = num2 % 1;

  if (typeof num1 !== "number" || remainder1 !== 0 || num1 < 0) {
    return "ERROR";
  } else if (typeof num2 !== "number" || remainder2 !== 0 || num2 < 0) {
    return "ERROR";
  }

  if (num1 > num2) {
    let sum = 0;

    for (let i = num2, j = num1; i <= j; i++) {
      sum += i;
    }
    return sum;
  } else {
    let sum = 0;

    for (let i = num1, j = num2; i <= j; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
