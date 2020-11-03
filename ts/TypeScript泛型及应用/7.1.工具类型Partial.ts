// Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// {
//     title?: string | undefined;
//     description?: string | undefined;
//  }