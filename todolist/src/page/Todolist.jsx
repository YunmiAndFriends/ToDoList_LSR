import React, { useState } from "react";
import styled from "styled-components";

function Toodolist() {
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="container">
      <div id="title">ToDoList</div>
      <div id="content"></div>
      <div>
        <input type="button" />
      </div>
    </div>
  );
}
export default Toodolist;
