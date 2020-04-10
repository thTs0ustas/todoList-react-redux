import React from "react";
import Footer from "./react/components/Footer";
import AddTodo from "./react/containerComponents/AddTodo";
import VisibleTodoList from "./react/containerComponents/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
