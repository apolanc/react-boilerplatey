import React, { Component } from "react";
import Provider from "./AppProvider";
import Header from "./features/Common/Header";

export default function App() {
  return (
    <Provider.AppProvider>
      <Header />
    </Provider.AppProvider>
  );
}
