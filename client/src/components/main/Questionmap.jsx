import styled from "styled-components";
import Questionlist from "./Questionlist";

const QuestionListul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default function Questionmap({ questionData }) {
  return (
    <QuestionListul>
      {questionData.map((list) => (
        <Questionlist el={list} key={list.id} />
      ))}
    </QuestionListul>
  );
}
