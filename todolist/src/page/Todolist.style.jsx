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
  justify-content: center;
`;

const TodoInput = styled.input`
  margin-right: 16px;
`;

const SendButton = styled.button`
  height: 36px;
  background-color: #1a3ccf16;
`;

export { Container, Title, AddButton, Content, TodoInput, SendButton };
