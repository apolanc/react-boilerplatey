import React, { useState } from "react";
import createContext from "./context";
import store from "./store";

const AppContext = createContext();

function AppProvider(props: any): JSX.Element {
  return (
    <AppContext.Provider value={{ store }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default { AppContext, AppProvider };
