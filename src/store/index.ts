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
});

const RootStore = types
  .model("RootStore", {
    todos: types.optional(types.array(Todo), [
      {
        id: 1,
        title: "Первый",
        complete: false,
      },
      {
        id: 2,
        title: "Второй",
        complete: false,
      },
      {
        id: 3,
        title: "Третий",
        complete: false,
      },
    ]),
  })
  .actions((self) => ({
    addTodo(title: string) {
      const id = self.todos.length + 1;
      self.todos.push(Todo.create({ id, title }));
    },
  }));

export default RootStore;
