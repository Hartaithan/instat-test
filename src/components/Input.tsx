import React from "react";
import styled from "styled-components";

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
  return <TodoInput />;
};

export default Input;
