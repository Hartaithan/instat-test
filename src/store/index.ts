import { Instance, types } from "mobx-state-tree";

export interface IRootStore extends Instance<typeof RootStore> {}

export interface ITodo extends Instance<typeof Todo> {
  id: number;
  title: string;
  complete: boolean;
}

const Todo = types.model("Todo", {
  id: types.optional(types.identifierNumber, 1),
  title: types.optional(types.string, ""),
  complete: types.optional(types.boolean, false),
}).actions((self) => ({
  check() {
    self.complete = !self.complete
  }
}));

const RootStore = types
  .model("RootStore", {
    todos: types.optional(types.array(Todo), []),
  })
  .actions((self) => ({
    addTodo(title: string) {
      const id = self.todos.length + 1;
      self.todos.push(Todo.create({ id, title }));
    },
  }));

export default RootStore;
