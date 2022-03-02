import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import useStore from "../hooks/useStore";
import Todo from "./Todo";

interface ITodoListProps {
  isFocused: boolean;
  search: string;
}

const TodoList = ({ isFocused, search }: ITodoListProps) => {
  const { todos, searchTodos } = useStore();

  const EmptyMessage = styled.p`
    width: 100%;
    text-align: center;
    margin-top: 20px;
  `;

  if (todos.length === 0) {
    return <EmptyMessage>Задачи еще не добавлены</EmptyMessage>;
  }
  return (
    <div>
      {isFocused
        ? searchTodos(search).map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })
        : todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
    </div>
  );
};

export default observer(TodoList);
