import React, { useState, useRef } from "react";
import {
  Container,
  Title,
  AddButton,
  Content,
  TodoInput,
  SaveButton,
  ToDoContent,
  Todo,
  Todosave,
  DeleteButton,
} from "./Todolist.style";
function TodoList() {
  const [text, setText] = useState("");

  const [todoItem, setTodoItem] = useState([]);

  const [showAddTodo, setShowAddTodo] = useState(false);

  let count = useRef(0);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    setShowAddTodo(!showAddTodo);
  };

  const onClickSaveButton = () => {
    const item = { id: count.current, content: text };
    console.log("item", item);
    setTodoItem(todoItem.concat(item));
    count.current += 1;
    setText("");
  };

  const onClickDeleteButton = (delId) => {
    const save = todoItem.filter(({ id }) => id !== delId);
    setTodoItem(save);
    console.log("save", save);
  };

  return (
    <Container>
      <Title>
        ToDoList<AddButton onClick={onClickAddButton}>추가</AddButton>
      </Title>
      <Content>
        <ToDoContent>
          {todoItem.map(({ id, content }) => (
            <Todo onClick={() => onClickDeleteButton(id)} key={id}>
              {content}
            </Todo>
          ))}
        </ToDoContent>
        {showAddTodo ? (
          <Todosave>
            <TodoInput value={text} onChange={onChangeText}></TodoInput>
            <SaveButton onClick={onClickSaveButton}>저장</SaveButton>
          </Todosave>
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
}
export default TodoList;
