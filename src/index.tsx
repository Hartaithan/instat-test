import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RootStore, { IRootStore } from "./store";
import { createGlobalStyle } from "styled-components";

const store = RootStore.create({} as IRootStore);

export const StoreContext = React.createContext(store);

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    color: #ffffff;
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
