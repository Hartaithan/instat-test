import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RootStore, { IRootStore } from "./store";
import { createGlobalStyle } from "styled-components";
import { onPatch } from "mobx-state-tree";

const store = RootStore.create({} as IRootStore);

onPatch(store, (patch) => {
  localStorage.setItem("todos", JSON.stringify(store.todos));
});

export const StoreContext = React.createContext(store);

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    scrollbar-width: thin;
    scrollbar-color: #333333 #ffffff;
    -webkit-font-feature-settings: "lnum";
    -moz-font-feature-settings: "lnum";
    font-feature-settings: "lnum";
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
  
  body {
    background: #070707;
  }

  #root {
    max-width: 1080px;
    margin: 0 auto;
    padding: 24px 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Global />
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
