import React from "react";
import styled from "styled-components";
import { ITodo } from "../store";
import Flex from "./Flex";

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
  margin-left: 10px;
  font-size: 18px;
`;

const Todo = ({ todo }: ITodoProps) => {
  return (
    <TodoBody>
      <Flex align="center">
        <TodoTitle>{todo.title}</TodoTitle>
      </Flex>
    </TodoBody>
  );
};

export default Todo;
