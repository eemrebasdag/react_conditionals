import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Email from "./components/Email/Email";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";

function App() {
  return (
    <>
      <Email></Email>
      <ListOfProducts></ListOfProducts>
    </>
  );
}

export default App;
