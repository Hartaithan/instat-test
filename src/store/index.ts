import { values } from "mobx";
import { Instance, types } from "mobx-state-tree";

export interface IRootStore extends Instance<typeof RootStore> {}

export interface ITodo extends Instance<typeof Todo> {
  id: number;
  title: string;
  complete: boolean;
}

const Todo = types
  .model("Todo", {
    id: types.optional(types.identifierNumber, 1),
    title: types.optional(types.string, ""),
    complete: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    check() {
      self.complete = !self.complete;
    },
  }));

const RootStore = types
  .model("RootStore", {
    todos: types.optional(types.array(Todo), []),
  })
  .views((self) => ({
    searchTodos(query: string) {
      return values(self.todos).filter((todo) => todo.title?.includes(query));
    },
  }))
  .actions((self) => ({
    addTodo(title: string) {
      const id = self.todos.length + 1;
      self.todos.push(Todo.create({ id, title }));
    },
    deleteTodo(todo: ITodo) {
      self.todos.remove(todo);
    },
  }));

export default RootStore;
