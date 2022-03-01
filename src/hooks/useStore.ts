import React from "react";
import { StoreContext } from "../index";

const useStore = () => {
  return React.useContext(StoreContext);
};

export default useStore;
