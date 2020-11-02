interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person;
type K2 = keyof Person[];
type K3 = keyof { [x: string]: Person }; //❓

/**
 * 根据对象的 key 返回对应的属性
 * @param obj 对象
 * @param key 对象的key
 */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}



// 案例： 用于检查对象中的 key 是否合法
enum Difficulty {
  Easy,
  Intermediate,
  Hard,
}

let tsInfo = {
  name: "Typescript",
  supersetOf: "Javascript",
  difficulty: Difficulty.Intermediate,
};

let difficulty: Difficulty = getProperty(tsInfo, "difficulty"); // OK

// let supersetOf: string = getProperty(tsInfo, "superset_of"); // Error
