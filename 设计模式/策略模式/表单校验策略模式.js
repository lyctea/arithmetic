const strategies = {
  isCorrectPassword(value, errorMsg) {
    if (!/^(?:(?=.*[A-Z])(?=.*[0-9])).\\S{7,19}$/.test(value)) {
      return errorMsg;
    }
    return null;
  },
  isNotEmpty(value, errorMsg) {
    if (value === "" || value === undefined) {
      return errorMsg;
    }
    return null;
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
    return null;
  },
  maxLength(value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
    return null;
  },
  isMobile(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
    return null;
  },
  isNotAllEmpty(value = [], errorMsg) {
    if (!value.some((i) => !!i)) {
      return errorMsg;
    }
    return null;
  },
};

class Validator {
  constructor() {
    this.cache = [];
  }

  add(value, rules) {
    for (let i = 0, rule; (rule = rules[i++]); ) {
      const strategyArray = rule.strategy.split(":") || [];
      const { errorMsg } = rule;
      this.cache.push(() => {
        const strategy = strategyArray.shift();
        strategyArray.unshift(value);
        strategyArray.push(errorMsg);
        return strategies[strategy].apply(value, strategyArray);
      });
    }
  }

  run() {
    for (let i = 0, validatorFunc; (validatorFunc = this.cache[i++]); ) {
      const msg = validatorFunc();
      if (msg) {
        return msg;
      }
    }
    return null;
  }
}

// 使用
const validator = new Validator();
validator.add(registerForm.userName, [
  {
    strategy: "isNonEmpty",
    errorMsg: "userName not empty!",
  },
  {
    strategy: "minLength:6",
    errorMsg: "userName length should more than 6",
  },
]);
validator.add(registerForm.password, [
  {
    strategy: "minLength:6",
    errorMsg: "password length should more than 6",
  },
]);

const errorMsg = validator.start();

if (errorMsg) {
  console.log(errorMsg);
  return errorMsg;
}

// 策略模式属于对象行为型模式，主要针对一组算法，将每一个算法封装到具有共同接口的独立的类中，
// 从而使得它们可以相互替换。策略模式使得算法可以在不影响 到客户端的情况下发生变化。
// 通常，策略模式适用于当一个应用程序需要实现一种特定的服务或者功能，而且该程序有多种实现方式时使用。
