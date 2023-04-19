import React from "react";
import styled from "styled-components";
import Header from "../../share/Header";
import Nav from "../../share/Nav";
import Footer from "../../share/Footer";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import MyPage_profile from "../../components/mypage/MyPage_profile";
/** 2024/4/19 마이페이지 Nav와 컨텐츠(좌,우) 감싸는 Div -by 고정윤 */
const MainDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1264px;
`;
/** 2024/4/19 마이페이지 컨텐츠만 감싸는 Div -by 고정윤 */
const Container = styled.div`
  width: 100%;
`;
/** 2024/4/19 마이페이지 Content -by 고정윤 */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  font-size: 0.8rem;
`;

/** 2024/4/19 마이페이지 MainContent -by 고정윤 */
const MainContent = styled.div`
  display: flex;
`;
/** 2024/4/19 마이페이지 MainContent -by 고정윤 */
const Section = styled.div`
  width: 100%;
`;
/** 2024/4/19 Mypage 컴포넌트 -by 고정윤 */
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
