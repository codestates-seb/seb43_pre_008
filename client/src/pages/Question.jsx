import Header from "../share/Header";
import Sidebar from "../share/Sidebar";
import Footer from "../share/Footer";
import styled from "styled-components";
import Nav from "../share/Nav";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

/** 2023/04/18 - 전체 영역 컴포넌트 - by 박수범 */
const LayoutArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: auto;
`;
/** 2023/04/18 - 전체 레이아웃 레이아웃 컴포넌트 - by 박수범 */
const LayoutContainer = styled.div`
  display: flex;
  width: 1250px;
  min-height: 100vh;
`;
/** 2023/04/18 - 사이드바 레이아웃 컴포넌트 - by 박수범 */
const SidebarContainer = styled.div`
  margin-top: 24px;
  width: 30%;
  min-height: 100%;
`;
/** 2023/04/18 - 네비 레이아웃 컴포넌트 - by 박수범 */
const NavContainer = styled.div`
  width: 190px;
  min-height: 100%;
`;
/** 2023/04/18 - 컨텐츠 레이아웃 컴포넌트 - by 박수범 */
const ContentsContainer = styled.div`
  width: 80%;
  max-width: 726px;
  min-height: 100%;
  padding: 24px 16px;
`;
const ContentsHeader = styled.div`
  min-height: 45px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export default function Question() {
  //const navigate = useNavigate();
  /** 2023/04/20 - 질문리스트를 관리하는 state - by 박수범 */
  const [questionData, setQuestionData] = useState([]);

  /** 2023/04/20 - 렌더링 시 질문리스트들을 받아오는 함수 - by 박수범 */
  useEffect(() => {
    axios.get("http://localhost:4000/discussions").then((res) => {
      setQuestionData(res.data);
    });
  }, []);
  console.log(questionData);

  /** 2023/04/18 - Ask 버튼 클릭 시 질문작성페이지로 이동하는 함수 - by 박수범 */
  /*const AskBtnHandler = () => {
    navigate("/ask");
  };*/

  return (
    <div>
      <LayoutArea>
        <Header />
        <LayoutContainer>
          <NavContainer>
            <Nav />
          </NavContainer>
          <ContentsContainer>
            <ContentsHeader />
          </ContentsContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
        </LayoutContainer>
      </LayoutArea>
      <Footer />
    </div>
  );
}
