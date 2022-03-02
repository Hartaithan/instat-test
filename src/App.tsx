import React from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [search, setSearch] = React.useState("");
  const [isFocused, setFocused] = React.useState(false);
  return (
    <>
      <Input
        isFocused={isFocused}
        setFocused={setFocused}
        setSearch={setSearch}
      />
      <TodoList isFocused={isFocused} search={search} />
    </>
  );
}

export default App;
