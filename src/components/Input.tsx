import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import useStore from "../hooks/useStore";

const TodoInput = styled.input.attrs({
  type: "text",
  placeholder: "Что вам нужно сделать?",
})`
  margin-bottom: 15px;
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #2d2d2d;
  border-radius: 8px;
  font-size: 16px;
  padding: 5px 10px;
  outline: none;
  &::placeholder {
    color: #a1a1a1;
  }
`;

const Input = () => {
  const { addTodo, input, setInput } = useStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input !== "") {
      addTodo(input);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <TodoInput
      value={input}
      onKeyDown={handleKeyDown}
      onChange={handleOnChange}
    />
  );
};

export default observer(Input);
