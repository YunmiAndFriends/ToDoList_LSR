import React, { useState } from "react";
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
} from "./Todolist.style";
function TodoList() {
  const [text, setText] = useState("");

  const [todoItem, setTodoItem] = useState([]);

  const [showAddTodo, setShowAddTodo] = useState(false);

  let count=0;

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    setShowAddTodo(!showAddTodo);

  };

const onClickSaveButton = () => {
  const item = 
  {id: count, 
  content: text};
  setTodoItem(todoItem.concat(item))
  count++;
  setText('');
}


  return (
    <Container>
      <Title>
        ToDoList<AddButton onClick={onClickAddButton}>추가</AddButton>
      </Title>
      <Content>
        <ToDoContent>
          {
          todoItem.map(({id, content}) => 
          <Todo key={id}>
            {content}
            </Todo>
            )
          }
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
