import React from "react";
import MyClass from "./MyClass";
import MyFunc from "./MyFunc";
import NewsFeed from "./NewsFeed";

function SideEffect() {
  return (
    <React.Fragment>
        <MyFunc/>
    </React.Fragment>
  );
}

export default SideEffect;
