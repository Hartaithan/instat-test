import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import useStore from "../hooks/useStore";
import { ITodo } from "../store";
import Flex from "./Flex";
import { IconDelete } from "./Icons";

interface ITodoProps {
  todo: ITodo | any;
}

interface ITodoTitleProps {
  checked: boolean;
}

const TodoBody = styled.div`
  height: 50px;
  width: 100%;
  background: #141414;
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const TodoTitle = styled.p<ITodoTitleProps>`
  margin-left: 15px;
  font-size: 18px;
  flex: 1;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const TodoCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 15px;
  transform: scale(1.5);
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
`;

const TodoDelete = styled.button`
  margin-right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Todo = ({ todo }: ITodoProps) => {
  const { todos, deleteTodo } = useStore();

  const handleOnChange = () => {
    todos[todo.id - 1].check();
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <TodoBody>
      <Flex align="center">
        <TodoCheckbox onChange={handleOnChange} checked={todo.complete} />
        <TodoTitle checked={todo.complete}>{todo.title}</TodoTitle>
        <TodoDelete onClick={() => deleteTodo(todo)}>
          <IconDelete />
        </TodoDelete>
      </Flex>
    </TodoBody>
  );
};

export default observer(Todo);
