import styled from "styled-components";

const Container = styled.div`
  background-color: skyblue;
  display: flex;
  width: 500px;
  height: 500px;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  height: 60px;
  background-color: #99eeee;
  align-items: center;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  margin-left: 30%;
  margin-right: 16px;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TodoInput = styled.input`
  margin-right: 16px;
  display: flex;
`;

const SaveButton = styled.button`
  width: 11vw;
  height: 2vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ToDoContent = styled.div``;

const Todo = styled.div``;

const Todosave = styled.div`
  display: flex;
`;

const InputContent = styled.div`
  display: flex;
`;

export {
  Container,
  Title,
  AddButton,
  Content,
  TodoInput,
  SaveButton,
  ToDoContent,
  Todo,
  Todosave,
  InputContent,
};
