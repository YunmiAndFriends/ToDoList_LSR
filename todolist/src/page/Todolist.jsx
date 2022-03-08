import React, { useState } from "react";
import {
  Container,
  Title,
  AddButton,
  Content,
  TodoInput,
  SendButton,
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

  return (
    <Container>
      <Title>
        ToDoList<AddButton onClick={onClickAddButton}>추가</AddButton>
      </Title>
      <Content>
        {showAddTodo ? (
          <>
            <TodoInput></TodoInput>
            <SendButton>전송</SendButton>
          </>
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
}
export default TodoList;
