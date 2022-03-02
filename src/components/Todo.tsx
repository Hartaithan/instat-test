import React from "react";
import styled from "styled-components";
import { ITodo } from "../store";
import Flex from "./Flex";
import { IconDelete } from "./Icons";

interface ITodoProps {
  todo: ITodo;
}

const TodoBody = styled.div`
  height: 50px;
  width: 100%;
  background: #141414;
  border-radius: 8px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const TodoTitle = styled.p`
  margin-left: 15px;
  font-size: 18px;
  flex: 1;
`;

const TodoCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 15px;
  background: red;
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
  return (
    <TodoBody>
      <Flex align="center">
        <TodoCheckbox />
        <TodoTitle>{todo.title}</TodoTitle>
        <TodoDelete>
          <IconDelete />
        </TodoDelete>
      </Flex>
    </TodoBody>
  );
};

export default Todo;
