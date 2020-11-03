// Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

// 从TODO 挑出 "title" & "completed" 组成一个新的类型返回
type TodoPreview = Pick<Todo2, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};