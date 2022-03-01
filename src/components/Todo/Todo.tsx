import React from "react";
import { ITodo } from "../../store";

interface ITodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: ITodoProps) => {
  return <div>{todo.title}</div>;
};

export default Todo;
