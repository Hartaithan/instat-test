import { observer } from "mobx-react-lite";
import React from "react";
import useStore from "./hooks/useStore";

function App() {
  const { todos } = useStore();
  console.log(todos);

  return <div className="App">asdasda</div>;
}

export default observer(App);
