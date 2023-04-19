import React from "react";
import styled from "styled-components";
import Header from "../../share/Header";
import Nav from "../../share/Nav";
import Footer from "../../share/Footer";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
// import Mypage_activeNav from "../../components/mypage/Mypage_activeNav";
import MyPage_profile from "../../components/mypage/Mypage_profile";

// import Layout from "../share/Layout";
const MainDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1264px;
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
`;

const Section = styled.div`
  width: 100%;
`;

export default function Mypage() {
  // const [isLoading, setIsLoding] = useState(true);

  // useEffect(() => {
  //   if (!isLoading) setIsLoding(true);
  // });
  return (
    <React.Fragment>
      <Header />
      <MainDiv>
        <Nav />
        <Container>
          <Content>
            <MyPage_header />
            <MyPage_menu />
            <MainContent>
              {/* <Mypage_activeNav /> */}
              <Section>
                <MyPage_profile />
              </Section>
            </MainContent>
          </Content>
        </Container>
      </MainDiv>
      <Footer />
    </React.Fragment>
  );
}
