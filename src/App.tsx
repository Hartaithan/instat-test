import React from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = React.useState<string>("");
  const [isFocused, setFocused] = React.useState<boolean>(false);
  return (
    <>
      <Input
        isFocused={isFocused}
        setFocused={setFocused}
        input={input}
        setInput={setInput}
      />
      <TodoList isFocused={isFocused} input={input} />
    </>
  );
}

export default App;
