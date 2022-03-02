import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import useStore from "../hooks/useStore";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, input } = useStore();

  const filteredTodos = [...todos].filter((todo) =>
    todo.title.toLowerCase().includes(input.toLowerCase())
  );

  const EmptyMessage = styled.p`
    width: 100%;
    text-align: center;
    margin-top: 20px;
  `;

  if (todos.length === 0) {
    return <EmptyMessage>Задачи еще не добавлены</EmptyMessage>;
  }
  if (filteredTodos.length === 0) {
    return <EmptyMessage>Задачи не найдены</EmptyMessage>;
  }
  return (
    <div>
      {filteredTodos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default observer(TodoList);
