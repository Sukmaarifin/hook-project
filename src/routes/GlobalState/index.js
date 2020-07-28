import React from "react";
import ContextPage from "./ContextPage";
import TodoMVCHook from "./TodoMVC-Hook";
import TodoMVCRedux from "./TodoMVC-Redux";

function GlobalState() {
  return (
    <React.Fragment>
      {/* <ContextPage/> */}
      <TodoMVCRedux/>
    </React.Fragment>
  );
}

export default GlobalState;
