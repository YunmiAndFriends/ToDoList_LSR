import React, { useState } from "react";
import {
  Container,
  Title,
  AddButton,
  Content,
  TodoInput,
  SaveButton,
} from "./Todolist.style";
function TodoList() {
  const [text, setText] = useState("");

  const [todoItem, setTodoItem] = useState([]);

  const [showAddTodo, setShowAddTodo] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    setShowAddTodo(!showAddTodo);
  };

const onClickSaveButton = () => {
  setShowAddTodo(false);
}

  return (
    <Container>
      <Title>
        ToDoList<AddButton onClick={onClickAddButton}>추가</AddButton>
      </Title>
      <Content>
        {showAddTodo ? (
          <>
            <TodoInput></TodoInput>
            <SaveButton onClick={onClickSaveButton}>전송</SaveButton>
          </>
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
}
export default TodoList;
