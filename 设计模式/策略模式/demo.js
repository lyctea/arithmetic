function count(type, number1, number2) {
  switch (type) {
    case "add":
      return number1 + number2;
    case "subtract":
      return number1 - number2;
    case "multiply":
      return number1 * number2;
    default:
      return number1 / number2;
  }
}

// if else
function count1(type, number1, number2) {
  if (type === "add") {
    return number1 + number2;
  } else if (type === "subtract") {
    return number1 - number2;
  } else if (type === "multiply") {
    return number1 * number2;
  } else {
    return number1 / number2;
  }
}

// 修改为策略模式

const count = {
  add(number1, number2) {
    return number1 + number2;
  },
  subtract(number1, number2) {
    return number1 - number2;
  },
  multiply(number1, number2) {
    return number1 * number2;
  },
  divide(number1, number2) {
    return number1 / number2;
  },
};

count.add(2, 3); // 5

count.subtract(10, 3); // 7

count.multiply(2, 3); // 6

count.divide(6, 2); // 3
