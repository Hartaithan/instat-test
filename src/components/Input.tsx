import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import useStore from "../hooks/useStore";
import { IconSend } from "./Icons";

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const TodoInput = styled.input.attrs({
  type: "text",
  placeholder: "Что вам нужно сделать?",
})`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #2d2d2d;
  border-radius: 8px;
  font-size: 16px;
  padding: 5px 50px 5px 10px;
  outline: none;
  &::placeholder {
    color: #a1a1a1;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 50px;
  height: 100%;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Input = () => {
  const { addTodo, input, setInput } = useStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input !== "") {
      addTodo(input);
    }
  };

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if (input !== "") {
      addTodo(input);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <InputWrapper>
      <TodoInput
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
      />
      <SubmitButton onClick={handleOnClick}>
        <IconSend />
      </SubmitButton>
    </InputWrapper>
  );
};

export default observer(Input);
