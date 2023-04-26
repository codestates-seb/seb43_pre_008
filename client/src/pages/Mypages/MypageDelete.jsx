// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../share/Header";
import Nav from "../../share/Nav";
import Footer from "../../share/Footer";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import Mypage_setNav from "../../components/mypage/Mypage_setNav";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../../features/mypage/userDataSlice";
import { logout } from "../../features/mypage/logSlice";
import axios from "axios";
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
/** 2024/4/19 p 컴포넌트 -by 고정윤 */
const P = styled.p`
  margin-bottom: 1.2em;
  white-space: normal;
  text-align: left;
  font-size: 1.4em;
  line-height: 1.5em;
  clear: both;
`;
/** 2024/4/19 ul 컴포넌트 -by 고정윤 */
const UL = styled.ul`
  margin-bottom: 1.2em;
  margin-left: 3em;
  text-align: left;
  > li {
    list-style: disc;
    white-space: normal;
    font-size: 1.4em;
    line-height: 1.5em;
    margin-bottom: 10px;
  }
`;
/** 2024/4/19 form 컴포넌트 -by 고정윤 */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
/** 2024/4/19 fieldset 컴포넌트 -by 고정윤 */
const Fieldset = styled.fieldset`
  margin-bottom: 24px;
`;
/** 2024/4/19 ckeck박스 컴포넌트 -by 고정윤 */
const CheckDiv = styled.div`
  > label {
    display: flex;

    > div {
      white-space: normal;
      font-size: 1.4em;
      line-height: 1.5em;
      text-align: left;
      margin-left: 10px;
    }
  }
`;
/** 2024/4/19 삭제버튼 컴포넌트 -by 고정윤 */
const DeleteBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: #d0393e;
  font-size: 1.2em;
  color: white;
  box-shadow: hsla(0, 0%, 100%, 0.4);
  padding: 10.4px;
  &:hover {
    cursor: pointer;
    background-color: #ab262a;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    text-decoration: none;
  }
`;
/** 2024/4/19 마이페이지 Delete Profile -by 고정윤 */
const MypageDelete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataState = useSelector((state) => state.userData);
  const state = useSelector((state) => state.log);
  const [boxChecked, setBoxChecked] = useState(false);
  let deleteQuery = window.location.search;
  useEffect(() => {
    if (deleteQuery === "?delete-agree=on") {
      alert("회원정보를 삭제하고 로그아웃하였습니다.");
      navigate("/", { replace: true });
    }
  }, [deleteQuery, navigate]);
  const CheckedHandler = () => {
    setBoxChecked(!boxChecked);
  };

  const deleteHandler = () => {
    const accessToken = localStorage.getItem("Authorization");
    // const refreshToken = localStorage.getItem('Refresh');

    axios
      .delete(`http://localhost:4000/users/${userDataState.memberId}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
          // Refresh: refreshToken,
        },
      })
      .then((res) => {
        if (!res.ok) {
          alert("Failed to delete member information");
        } else {
          let data = res.data;
          console.log(data);
          localStorage.removeItem("Authorization");
          // localStorage.removeItem('Refresh');
          dispatch(deleteData());
          dispatch(logout(state));
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
                  <H1>Delete Profile</H1>
                </Title>
                <div className="main_Txt">
                  <P>
                    Before confirming that you would like your profile deleted,
                    we'd like to take a moment to explain the implications of
                    deletion:
                  </P>
                  <UL>
                    <li>
                      Deletion is irreversible, and you will have no way to
                      regain any of your original content, should this deletion
                      be carried out and you change your mind later on.
                    </li>
                    <li>
                      Your questions and answers will remain on the site, but
                      will be disassociated and anonymized (the author will be
                      listed as "email") and will not indicate your authorship
                      even if you later return to the site.
                    </li>
                  </UL>
                  <P>
                    Confirming deletion will only delete your profile on Stack
                    Overflow - it will not affect any of your other profiles on
                    the Stack Exchange network. If you want to delete multiple
                    profiles, you'll need to visit each site separately and
                    request deletion of those individual profiles.
                  </P>
                </div>
                <Form>
                  <Fieldset>
                    <CheckDiv>
                      <label>
                        <div>
                          <input
                            type="checkbox"
                            name="delete-agree"
                            checked={boxChecked}
                            onChange={CheckedHandler}
                          />
                        </div>
                        <div>
                          I have read the information stated above and
                          understand the implications of having my profile
                          deleted. I wish to proceed with the deletion of my
                          profile.
                        </div>
                      </label>
                    </CheckDiv>
                  </Fieldset>
                  {boxChecked ? (
                    <DeleteBtn onClick={deleteHandler}>
                      Delete Profile
                    </DeleteBtn>
                  ) : (
                    <DeleteBtn className="disabled">Delete Profile</DeleteBtn>
                  )}
                </Form>
              </Main>
            </MainContainer>
          </Content>
        </Container>
      </MainDiv>
      <Footer />
    </React.Fragment>
  );
};

export default MypageDelete;
