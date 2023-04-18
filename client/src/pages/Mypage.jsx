import React from "react";
import styled from "styled-components";
import Header from "../share/Header";
// import {
//   LayoutArea,
//   LayoutContainer,
//   NavContainer,
//   ContentsContainer,
// } from "../share/Layout";
import MyPage_profile from "../components/mypage/MyPage_profile";
import MyPage_menu from "../components/mypage/MyPage_menu";
import Mypage_activeNav from "../components/mypage/Mypage_activeNav";
// import Layout from "../share/Layout";
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1264px;
  border: 1px solid red;
`;

const Container = styled.div`
  /* margin: 0px 65px 0px 65px; */
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  font-size: 0.8rem;
`;

const MainContent = styled.div`
  display: flex;
  margin-bottom: 48px;
  border: 1px solid red;
`;

const Section = styled.div`
  width: 100%;
`;

const ReqLoginDiv = styled.div`
  padding: 24px;
  height: calc(100vh - 23.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export default function Mypage() {
  return (
    <React.Fragment>
      <Header />
      <MainDiv>
        <Container>
          <Content>
            <MyPage_profile />
            <MyPage_menu />
            <MainContent>
              <Mypage_activeNav />
              <Section></Section>
            </MainContent>
            <ReqLoginDiv></ReqLoginDiv>
          </Content>
        </Container>
      </MainDiv>

      {/* <LayoutArea>
        <LayoutContainer>
          <NavContainer></NavContainer>
          <ContentsContainer></ContentsContainer>
        </LayoutContainer>
      </LayoutArea> */}
    </React.Fragment>
  );
}
