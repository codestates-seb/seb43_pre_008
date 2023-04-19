import styled from "styled-components";
import Spinner from "../img/Spinner-1s-200px.gif";
/** 2023/4/18 로딩화면 배경 - by고정윤 */
const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
/** 2023/4/18 로딩화면 컴포넌트 - by고정윤 */
const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

export default Loading;
