import styled from "styled-components";
import Questionlist from "./Questionlist";
/** 2023/04/20 - 질문 리스트 감싸는 컴포넌트 - by 박수범 */
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
