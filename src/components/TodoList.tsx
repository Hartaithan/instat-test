import { observer } from "mobx-react-lite";
import React from "react";
import useStore from "../hooks/useStore";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useStore();

  if (todos.length === 0) {
    return <p>Задачи еще не добавлены</p>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default observer(TodoList);
