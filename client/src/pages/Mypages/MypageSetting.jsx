import React from "react";
import styled from "styled-components";

import Header from "../../share/Header";
import Nav from "../../share/Nav";
import Footer from "../../share/Footer";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import Mypage_setNav from "../../components/mypage/Mypage_setNav";
import ThemaLight from "../../img/theme-light.svg";
import ThemaSystem from "../../img/theme-system@2x.png";
import ThemaDark from "../../img/theme-dark.svg";
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  white-space: normal;
`;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d6d9dc;
`;
const H1 = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 2.5em;
  line-height: calc(15 / 13);
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 2em;
  line-height: 1.3;
  margin: 0px 0px 8px 0px;
  > .titleSpan {
    margin-left: 10px;
    font-size: 1.2rem;
    color: hsl(210, 8%, 45%);
  }
`;

const SubTitle = styled.div``;

const SetList = styled.div`
  margin-bottom: 48px;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
`;

const SetListCompo = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e3e6e8;
  &.last {
    border-bottom: none;
  }
  &&.activity_third {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SetBodyCompo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &&.imageWrap {
    flex-direction: row;
  }
  &&.activity_txt {
    width: calc(100% - 200px);
  }
  p {
    white-space: normal;
    font-size: 1.1em;
    line-height: 1.5;
  }
  &:hover {
    cursor: pointer;
  }

  > input {
    width: 100%;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    min-height: 32.59px;
    padding: 7.8px 9.1px 7.8px 9.1px;
  }
`;
const ListCompoTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.4em;
`;
const SetItemCompo = styled.div`
  display: flex;

  &.theme-div {
    display: flex;
    > div {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      > input {
        margin-left: 20px;
        background-color: #fff;
        border: 1px solid hsl(206, 85%, 57.5%);
        cursor: pointer;
        font-size: inherit;
        outline: 0;
        vertical-align: middle;
        :checked {
          background-color: hsl(206, 85%, 57.5%);
        }
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          border-radius: 5px;
          box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
            0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
          width: 100px;
          margin-bottom: 6px;
        }
        p {
          font-size: 1.2em;
        }
      }
    }
  }

  &.toggle-div {
    margin: 8px;
  }
`;

const DownloadBtn = styled.button`
  padding: 10.4px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2em;
  color: hsl(210, 8%, 45%);
  font-weight: 500;
  margin: 10px 4px;
  &:hover {
    cursor: pointer;
    background-color: hsl(210, 8%, 97.5%);
  }
`;

const MypageSetting = () => {
  return (
    <React.Fragment>
      <Header />
      <MainDiv>
        <Nav />
        <Container>
          <Content>
            <MyPage_header />
            <MyPage_menu />
            <MainContainer>
              <Mypage_setNav />
              <Main>
                <Title>
                  <H1>Preferences</H1>
                </Title>
                <SubTitle>
                  <H3>Interface</H3>
                  <SetList>
                    <SetListCompo>
                      <SetBodyCompo className="imageWrap">
                        <ListCompoTitle>Profile image</ListCompoTitle>
                        <SetItemCompo className="theme-div">
                          <div>
                            <input type="radio" />
                            <div>
                              <img src={`${ThemaLight}`} alt="Light" />
                              <p>Light</p>
                            </div>
                          </div>
                          <div>
                            <input type="radio" />
                            <div>
                              <img
                                src={`${ThemaSystem}`}
                                alt="System setting"
                              />
                              <p>System setting</p>
                            </div>
                          </div>
                          <div>
                            <input type="radio" />
                            <div>
                              <img src={`${ThemaDark}`} alt="Dark" />
                              <p>Dark</p>
                            </div>
                          </div>
                        </SetItemCompo>
                      </SetBodyCompo>
                    </SetListCompo>
                    <SetListCompo>
                      <SetBodyCompo>
                        <ListCompoTitle>High contrast</ListCompoTitle>
                        <p>
                          Flipping this switch improves legibility by increasing
                          the contrast between text, background, and border
                          colors.
                        </p>

                        <div className="toggle-div"></div>
                      </SetBodyCompo>
                    </SetListCompo>
                    <SetListCompo>
                      <SetBodyCompo>
                        <ListCompoTitle>
                          Enable keyboard shortcuts
                        </ListCompoTitle>
                        <p>
                          When enabled, press <code>?</code> for help
                        </p>

                        <div className="toggle-div"></div>
                      </SetBodyCompo>
                    </SetListCompo>
                    <SetListCompo>
                      <SetBodyCompo>
                        <ListCompoTitle>Hide left navigation</ListCompoTitle>
                        <p>
                          When you flip this switch, the left navigation will no
                          longer be pinned to the left of the page on Q&A sites.
                        </p>

                        <div className="toggle-div"></div>
                      </SetBodyCompo>
                    </SetListCompo>
                    <SetListCompo className="last">
                      <SetBodyCompo>
                        <ListCompoTitle>
                          Hide hot network questions
                        </ListCompoTitle>
                        <p>
                          When you flip this switch, you will no longer see Hot
                          Network Questions in the right sidebar on Q&A sites.
                        </p>

                        <div className="toggle-div"></div>
                      </SetBodyCompo>
                    </SetListCompo>
                  </SetList>
                  <H3>Advertisements</H3>
                  <SetList>
                    <SetListCompo className="last">
                      <SetBodyCompo>
                        <ListCompoTitle>Companies to exclude</ListCompoTitle>
                        <input
                          id="Companies-to-exclude"
                          type="text"
                          maxLength="140"
                          autoComplete="off"
                        />
                      </SetBodyCompo>
                    </SetListCompo>
                  </SetList>
                  <H3>Activity data</H3>
                  <SetList>
                    <SetListCompo className="activity_third">
                      <SetBodyCompo className="activity_txt">
                        <ListCompoTitle>
                          Stack Overflow never sells or shares your activity
                          data with third parties.
                        </ListCompoTitle>
                        <p>
                          We use your on-site activity to show you more relevant
                          content. For example, we might show you questions
                          based on the tags you usually browse, or show you job
                          listings in your current location.
                        </p>
                      </SetBodyCompo>
                      <SetItemCompo className="download-btn">
                        <DownloadBtn>Download activity data</DownloadBtn>
                      </SetItemCompo>
                    </SetListCompo>
                    <SetListCompo className="last">
                      <SetBodyCompo>
                        <ListCompoTitle>
                          Use my on-site activity to show more relevant content
                          (recommended)
                        </ListCompoTitle>
                        <p>
                          If you opt-out, existing recommendations will be
                          discarded within 24 hours.
                        </p>

                        <SetItemCompo className="toggle-div"></SetItemCompo>
                      </SetBodyCompo>
                    </SetListCompo>
                  </SetList>
                </SubTitle>
              </Main>
            </MainContainer>
          </Content>
        </Container>
      </MainDiv>
      <Footer />
    </React.Fragment>
  );
};

export default MypageSetting;
