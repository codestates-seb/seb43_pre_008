import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../share/Header";
import Nav from "../../share/Nav";
import Footer from "../../share/Footer";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import Mypage_setNav from "../../components/mypage/Mypage_setNav";
import ProfileImage from "../../img/profile_img.png";
import WmdBurtton from "../../img/wmd-buttons.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../../features/mypage/userDataSlice";
/** 2024/4/19 전체영역(메인 Nav + 컨텐츠) 컴포넌트 -by 고정윤 */
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  white-space: normal;
`;
/** 2024/4/19 컨테이너 컴포넌트 -by 고정윤 */
const Container = styled.div`
  width: 100%;
`;
/** 2024/4/19 컨텐츠 묶음 컴포넌트(header, menu, Maincontainer) -by 고정윤 */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
/** 2024/4/19 좌측 setting Nav + 우측 컨텐츠 묶음 컴포넌트 -by 고정윤 */
const MainContainer = styled.div`
  display: flex;
`;
/** 2024/4/19 우측 컨텐츠 묶음 컴포넌트 -by 고정윤 */
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
`;
/** 2024/4/19 타이틀 컴포넌트 -by 고정윤 */
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d6d9dc;
`;
/** 2024/4/19 h1 컴포넌트 -by 고정윤 */
const H1 = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 2.5em;
  line-height: calc(15 / 13);
`;
/** 2024/4/19 h3 컴포넌트 -by 고정윤 */
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
/** 2024/4/19 서브타이틀 컴포넌트 -by 고정윤 */
const SubTitle = styled.div``;
/** 2024/4/19 세팅 리스트별 묶음 컴포넌트 -by 고정윤 */
const SetList = styled.div`
  padding: 24px;
  margin-bottom: 48px;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
/** 2024/4/19 세팅 리스트 개별 컴포넌트 -by 고정윤 */
const ListCompoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 12px 0px 12px 0px;
  img {
    width: 164px;
    height: 164px;
    border-radius: 4px;
  }
  .linkWrap {
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    padding: 24px;
    gap: 16px;
  }
`;
/** 2024/4/19 세팅 리스트 타이틀 컴포넌트 -by 고정윤 */
const ListCompoTitle = styled.div`
  font-weight: bold;
  font-size: 1.4em;
  padding: 4px;
`;
/** 2024/4/19 세팅 리스트 내용 묶음 컴포넌트 -by 고정윤 */
const Label = styled.label`
  width: 100%;
  > div {
    margin: 2px 0 2px 0;
  }
  > input {
    width: 100%;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    max-width: 421.33px;
    min-height: 32.59px;
    padding: 7.8px 9.1px 7.8px 9.1px;
  }
  .wmd-container {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-radius: 3px;
  }
  .wmd-button-bar {
    clear: both;
    background-color: transparent;
    margin: 10px 0 0 0;
    padding: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-bottom: 0;
    min-height: 44px;
    overflow: hidden;
    position: relative;
  }
  .btr-sm {
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
    border-radius: 0 0 3px 3px;
  }
  .wmd-button-row {
    padding: 0 4px 0 8px;
    margin: 0;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 44px;
    border-bottom: 1px solid #ccc;
    > .wmd-button {
      max-width: 28px;
      height: 44px;
      flex: 10 0 23px;
      padding: 0;
      padding: 12px 0 0 0;
      text-align: center;
      cursor: pointer;
    }
    > .wmd-button > span {
      background-image: url(${WmdBurtton});
      width: 20px;
      height: 20px;
      background-size: initial !important;

      display: inline-block;
    }
    .wmd-spacer {
      height: 44px;
      flex: 1 0 4px;
      max-width: 27px;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      position: relative;
      left: 4px;
    }
    .wmd-spacer-max {
      max-width: none;
    }
  }
  textarea {
    padding: 10px;
    margin: -1px 0 0;
    height: 200px;
    line-height: 1.3;
    width: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    border-top: 1px solid #ccc;
    border-radius: 0 0 3px 3px;
    resize: vertical;
  }
  .user-page .grippie {
    margin-bottom: 3px;
  }
  .grippie {
    margin-top: -4px;
  }
  .grippie {
    border: 1px solid #ddd;
    border-width: 0 1px 1px;
    cursor: s-resize;
    height: 14px;
    overflow: hidden;
    background-color: #bbb;
    border-radius: 0 0 3px 3px;
  }
`;
/** 2024/4/19 버튼 묶음 컴포넌트 -by 고정윤 */
const BtnDiv = styled.div`
  margin-bottom: 48px;
  padding: 10px 0 15px 0;
  display: flex;
  gap: 16px;
`;
/** 2024/4/19 제출 버튼 컴포넌트 -by 고정윤 */
const SubmitBtn = styled.button`
  padding: 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 1.2em;
  background-color: #0a95ff;
  color: white;
  box-shadow: hsla(0, 0%, 100%, 0.4);
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #0074cc;
  }
`;
/** 2024/4/19 취소 버튼 컴포넌트 -by 고정윤 */
const CancelBtn = styled(SubmitBtn)`
  background-color: transparent;
  color: #0a95ff;
  :hover {
    background-color: hsl(206, 100%, 97%);
  }
`;

const EditProfile = () => {
  const dispatch = useDispatch();
  const userDataState = useSelector((state) => state.userData);
  const [displayName, setDisplayName] = useState(userDataState.displayName);
  // const [password, setPassword] = useState(null);
  const [location, setLocation] = useState(null);
  const [title, setTitle] = useState(null);
  const state = useSelector((state) => state.log);
  if (
    !(
      state.value === 1 ||
      state.value === "1" ||
      state.value === 0 ||
      state.value === "0"
    )
  ) {
    window.location.reload();
  }
  const submitHandler = () => {
    const accessToken = localStorage.getItem("Authorization");
    const editData = {};
    // If no displayName or password data is entered, do not include it in the editData object
    if (displayName) {
      editData.displayName = displayName;
    } else if (location) {
      editData.location = location;
    } else if (title) {
      editData.title = title;
    }
    // else if (password) {
    //       editData.password = password;
    //     }

    axios
      .patch(`http://localhost:4000/user/${userDataState.memberId}`, editData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(saveData(res.data.data));
          alert("Your member information has been changed");
          window.location.reload("/mypage/useredit");
        } else {
          alert("Failed to change member information");
        }
      })
      .catch(() => alert("An error occurred"));
  };
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
                  <H1>Edit your Profile</H1>
                </Title>
                <SubTitle>
                  <H3>Public information</H3>
                  <SetList>
                    <ListCompoDiv>
                      <Label htmlFor="change-picture">
                        <ListCompoTitle>Profile image</ListCompoTitle>
                        <div>
                          <img
                            id="my_profile_img"
                            src={`${ProfileImage}`}
                            alt="my profile img"
                          />
                        </div>
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>Display name</ListCompoTitle>
                        <input
                          onChange={(e) => setDisplayName(e.target.value)}
                          value={displayName}
                        />
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>Location</ListCompoTitle>
                        <input onChange={(e) => setLocation(e.target.value)} />
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>Title</ListCompoTitle>
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="No title has been set"
                        />
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>About me</ListCompoTitle>
                        <div className="wmd-container">
                          <div
                            id="wmd-button-bar"
                            className="wmd-button-bar btr-sm"
                          >
                            <ul id="wmd-button-row" className="wmd-button-row">
                              <li
                                className="wmd-button"
                                id="wmd-bold-button"
                                title="Strong <strong> Ctrl+B"
                              >
                                <span
                                  style={{ backgroundPosition: "0px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-italic-button"
                                title="Emphasis <em> Ctrl+I"
                              >
                                <span
                                  style={{ backgroundPosition: "-20px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-spacer wmd-spacer1"
                                id="wmd-spacer1"
                              ></li>
                              <li
                                className="wmd-button"
                                id="wmd-link-button"
                                title="Hyperlink <a> Ctrl+L"
                              >
                                <span
                                  style={{ backgroundPosition: "-40px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-quote-button"
                                title="Blockquote <blockquote> Ctrl+Q"
                              >
                                <span
                                  style={{ backgroundPosition: "-60px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-code-button"
                                title="Code Sample <pre><code> Ctrl+K"
                              >
                                <span
                                  style={{ backgroundPosition: "-80px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-image-button"
                                title="Image <img> Ctrl+G"
                              >
                                <span
                                  style={{ backgroundPosition: "-100px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-spacer wmd-spacer2"
                                id="wmd-spacer2"
                              ></li>
                              <li
                                className="wmd-button"
                                id="wmd-olist-button"
                                title="Numbered List <ol> Ctrl+O"
                              >
                                <span
                                  style={{ backgroundPosition: "-120px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-ulist-button"
                                title="Bulleted List <ul> Ctrl+U"
                              >
                                <span
                                  style={{ backgroundPosition: "-140px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-heading-button"
                                title="Heading <h1>/<h2> Ctrl+H"
                              >
                                <span
                                  style={{ backgroundPosition: "-160px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-hr-button"
                                title="Horizontal Rule <hr> Ctrl+R"
                              >
                                <span
                                  style={{ backgroundPosition: "-180px 0px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-spacer wmd-spacer3"
                                id="wmd-spacer3"
                              ></li>
                              <li
                                className="wmd-button"
                                id="wmd-undo-button"
                                title="Undo - Ctrl+Z"
                              >
                                <span
                                  style={{ backgroundPosition: "-200px -20px" }}
                                ></span>
                              </li>
                              <li
                                className="wmd-button"
                                id="wmd-redo-button"
                                title="Redo - Ctrl+Shift+Z"
                              >
                                <span
                                  style={{ backgroundPosition: "-220px -20px" }}
                                ></span>
                              </li>
                              <li className="wmd-spacer wmd-spacer-max"></li>
                              <li
                                className="wmd-button wmd-help-button"
                                id="wmd-help-button"
                                title="Markdown Editing Help"
                                style={{ right: "0px" }}
                              >
                                <span
                                  style={{ backgroundPosition: "-240px 0px" }}
                                ></span>
                              </li>
                            </ul>
                            <textarea
                              id="wmd-input"
                              className="s-textarea wmd-input bar0 processed"
                              name="AboutMe"
                              cols="92"
                              rows="15"
                              placeholder=""
                              data-default=""
                              data-site=""
                              onChange={(e) => setDisplayName(e.target.value)}
                            ></textarea>
                            <div className="grippie bbr-sm" style={{}}></div>
                          </div>
                        </div>
                      </Label>
                    </ListCompoDiv>
                  </SetList>
                </SubTitle>

                <SubTitle>
                  <H3>Links</H3>
                  <SetList>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoDiv className="linkWrap">
                          <Label>
                            <ListCompoTitle>Website link</ListCompoTitle>
                            <input
                              id="WebsiteUrl"
                              name="WebsiteUrl"
                              type="text"
                              value=""
                              data-default=""
                              maxLength="200"
                              data-site=""
                              onChange={(e) => setDisplayName(e.target.value)}
                            />
                          </Label>
                          <Label>
                            <ListCompoTitle>
                              Twitter link or username
                            </ListCompoTitle>
                            <input
                              id="WebsiteUrl"
                              name="WebsiteUrl"
                              type="text"
                              value=""
                              data-default=""
                              maxLength="200"
                              data-site=""
                              onChange={(e) => setDisplayName(e.target.value)}
                            />
                          </Label>
                          <Label>
                            <ListCompoTitle>
                              GitHub link or username
                            </ListCompoTitle>
                            <input
                              id="WebsiteUrl"
                              name="WebsiteUrl"
                              type="text"
                              value=""
                              data-default=""
                              maxLength="200"
                              data-site=""
                              onChange={(e) => setDisplayName(e.target.value)}
                            />
                          </Label>
                        </ListCompoDiv>
                      </Label>
                    </ListCompoDiv>
                  </SetList>
                </SubTitle>
                <SubTitle>
                  <H3>
                    Private information
                    <span className="titleSpan">Not shown publicly</span>
                  </H3>
                  <SetList>
                    <Label>
                      <ListCompoTitle>Full name</ListCompoTitle>
                      <input
                        className="s-input s-input__search wmx4 sm:wmx-initial"
                        id="WebsiteUrl"
                        name="WebsiteUrl"
                        type="text"
                        value={displayName}
                        data-default=""
                        maxLength="200"
                        data-site=""
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </Label>
                  </SetList>
                </SubTitle>

                <BtnDiv>
                  <SubmitBtn onClick={submitHandler}>Save Profile</SubmitBtn>
                  <CancelBtn>Cancel</CancelBtn>
                </BtnDiv>
              </Main>
            </MainContainer>
          </Content>
        </Container>
      </MainDiv>
      <Footer />
    </React.Fragment>
  );
};

export default EditProfile;
