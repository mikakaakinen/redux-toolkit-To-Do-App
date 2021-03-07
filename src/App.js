import React, { Fragment } from "react";
//import { Counter } from './features/counter/Counter';
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Todos />
      <Footer />
    </Fragment>
  );
}

export default App;
