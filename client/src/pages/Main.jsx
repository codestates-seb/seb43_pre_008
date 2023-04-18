import Header from "../share/Header";
import Sidebar from "../share/Sidebar";
import Footer from "../share/Footer";
import styled from "styled-components";
import Nav from "../share/Nav";
import { useNavigate } from "react-router-dom";
//import { useState } from "react";

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
/** 2023/04/18 - 컨텐츠 헤더 컴포넌트 - by 박수범 */
const ContentsHeader = styled.header`
  width: 100%;
  max-width: 726px;
  height: 105px;
`;
/** 2023/04/18 - 컨텐츠헤더 탑 컴포넌트 - by 박수범 */
const ContentsHeaderTop = styled.div`
  display: flex;
  height: 62px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
/** 2023/04/18 - 컨텐츠헤더 바텀 컴포넌트 - by 박수범 */
const ContentsHeaderBottom = styled.div`
  display: flex;
  height: 37.78px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 12px;
`;

/** 2023/04/18 - 컨텐츠헤더  Ask 버튼 컴포넌트 - by 박수범 */
const ContentsHeaderAsk = styled.button`
  background-color: rgb(10, 149, 255);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  padding: 10.4px;
  border-radius: 3px;
  width: 98px;
  height: 40px;
  cursor: pointer;
  font-size: 13px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(6, 117, 202);
  }
`;

/** 2023/04/18 - 컨텐츠헤더 바텀 탭버튼 컴포넌트 - by 박수범 */
const HeaderTapBtn = styled.button`
  cursor: pointer;
  padding: 10.4px;
  margin: 0px;
  color: rgb(106, 115, 124);
  border: 1px solid rgb(159, 166, 173);
  background-color: rgb(255, 255, 255);
  border-radius: ${({ redious }) => redious};
  &:focus {
    background-color: rgb(227, 230, 232);
  }
`;

/** 2023/04/18 - 컨텐츠헤더 바텀 컴포넌트 - by 박수범 */
const HeaderCount = styled.p`
  font-size: 17px;
  color: rgb(35, 38, 41);
`;
/** 2023/04/18 - 컨텐츠헤더 바텀 탭버튼 컨테이너 - by 박수범 */
const BtnContainer = styled.p`
  display: flex;
  justify-content: right;
  -webkit-box-align: center;
  align-items: center;
`;

export default function Main() {
  //const [questionCount, setQuestionCount] = useState(1);
  const navigate = useNavigate();

  const AskBtnHandler = () => {
    navigate("/ask");
  };
  return (
    <div>
      <Header />
      <LayoutArea>
        <LayoutContainer>
          <NavContainer>
            <Nav />
          </NavContainer>
          <ContentsContainer>
            <ContentsHeader>
              <ContentsHeaderTop>
                <h1>All Question</h1>
                <ContentsHeaderAsk onClick={AskBtnHandler}>
                  Ask Question
                </ContentsHeaderAsk>
              </ContentsHeaderTop>
              <ContentsHeaderBottom>
                <HeaderCount>{0} questions</HeaderCount>
                <BtnContainer>
                  <HeaderTapBtn redious="4px 0px 0px 4px">Newest</HeaderTapBtn>
                  <HeaderTapBtn redious="0px">Oldest</HeaderTapBtn>
                  <HeaderTapBtn redious="0px 4px 4px 0px">View</HeaderTapBtn>
                </BtnContainer>
              </ContentsHeaderBottom>
            </ContentsHeader>
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
