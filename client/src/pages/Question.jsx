import Header from "../share/Header";
import Sidebar from "../share/Sidebar";
import Footer from "../share/Footer";
import styled from "styled-components";
import Nav from "../share/Nav";
import { EditorContainer } from "../share/EditorContainer";
import ReactQuill from "react-quill";
import { editorModules } from "../share/EditorContainer";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

/** 2023/04/18 - 전체 영역 컴포넌트 - by 박수범 */
const LayoutArea = styled.div`
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
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
const QuestionArticle = styled.div`
  min-height: max-content;
  display: flex;
`;
/** 2023/04/22 - 사이드바 레이아웃 컴포넌트 - by 박수범 */
const AnswerArticle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

/** 2023/04/18 - 네비 레이아웃 컴포넌트 - by 박수범 */
const NavContainer = styled.div`
  width: 190px;
  min-height: 100%;
`;
/** 2023/04/18 - 컨텐츠 레이아웃 컴포넌트 - by 박수범 */
const ContentsContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  width: calc(50vw + 300px);
`;

/** 2023/04/18 - 컨텐츠 레이아웃 컴포넌트 - by 박수범 */
const ContentsArticle = styled.article`
  min-width: calc(100% - 300px);
  height: 100%;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
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
/** 2023/04/18 - 컨텐츠헤더  Ask 버튼 컴포넌트 - by 박수범 */
const Contentinfo = styled.div`
  min-height: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(222, 226, 229);
  padding-bottom: 8px;
  margin-bottom: 16px;
  > ul {
    display: flex;
    > li {
      margin-right: 10px;
      color: rgb(95, 104, 113);
    }
  }
`;
/** 2023/04/18 - 컨텐츠헤더  Ask 버튼 컴포넌트 - by 박수범 */
const ContentsHeader = styled.div`
  min-height: 45px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  > a {
    text-decoration: none;
    color: black;
    font-size: 27px;
    white-space: normal;
  }
`;
/** 2023/04/18 - 질문 컨테이너 - by 박수범 */
const Questioncontainer = styled.div`
  display: flex;
`;
/** 2023/04/22 - 좋아요 버튼을 감싸는 컨테이너 컴포넌트 - by 박수범 */
const Votecontainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 16px;
  width: 60px;
  > button {
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    &:hover + .VoteText {
      display: block;
    }
  }
  > div {
    font-size: 1.8rem;
    color: rgb(95, 104, 113);
  }
  > .VoteText {
    position: absolute;
    font-size: 18px;
    inset: 85px auto auto 45px;
    margin: 0px;
    transform: translate(235px, 106px);
    padding: 10px 15px;
    background-color: #ffffff;
    border-radius: 5px;
    color: rgb(95, 104, 113);
    border: solid 1px gray;
    display: none;
  }
`;
/** 2023/04/18 - 컨텐츠 컨테이너 - by 박수범 */
const Contentcontainer = styled.div`
  width: calc(100% - 45px);
  > p {
    white-space: normal;
    font-size: 15px;
    line-height: 22.5px;
    margin-bottom: 24px;
    text-align: left;
  }
  > ul {
    display: flex;
    height: 23px;
    > li {
      height: 100%;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 0px 6px;
      margin-right: 4px;
      border-radius: 3px;
      background: rgb(220, 233, 242);
      color: hsl(205, 46%, 32%);
      cursor: pointer;
      &:hover {
        background-color: rgb(201, 228, 247);
      }
    }
    > span {
      color: rgb(39, 104, 145);
      font-size: 12px;
    }
  }
`;
/** 2023/04/18 - 컨텐츠 아티클 미드 컴포넌트 - by 박수범 */
const ContentmidContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 24px 0px;
`;
/** 2023/04/18 - 컨텐츠 아티클 미드 왼쪽(쉐어,에딧,팔로우) 컴포넌트 - by 박수범 */
const MidContainerleft = styled.div`
  display: flex;
  width: 100px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  > button {
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    > a {
      text-decoration: none;
      color: #6b6a6a;
      &:hover {
        color: #b1b1b1;
      }
    }
  }
`;
/** 2023/04/18 - 컨텐츠 아티클 미드 오른쪽 컴포넌트 - by 박수범 */
const MidContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 6px 7px 7px;
  border-radius: 3px;
  background-color: rgb(210, 231, 246);
  width: 165px;
  height: 67px;
  > div {
    margin-top: 3px;
    text-align: left;
    color: rgb(95, 104, 113);
  }
  > p {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 5px;
    > img {
      width: 34px;
      height: 34px;
      margin-right: 10px;
    }
    > div {
      font-size: 13px;
      > a {
        text-decoration: none;
        font-size: 13px;
        color: rgb(0, 105, 193);
      }
    }
  }
`;
/** 2023/04/22 - 컨텐츠 아티클 바텀 컨테이너 - by 박수범 */
const ContentbottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 15px;
  > button {
    text-align: left;
    margin-top: 8px;
    background-color: rgb(255, 255, 255);
    color: rgb(171, 177, 183);
    font-size: 13px;
    &:hover {
      color: rgb(0, 105, 193);
    }
  }
`;
/** 2023/04/22 - 컨텐츠 아티클 바텀 탑 컨테이너 - by 박수범 */
const BottomContainerTop = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin: 4px 0px;
  padding-top: 4px;
  border-top: 1px solid rgb(222, 226, 229);
  > p {
    text-align: left;
    color: rgb(71, 79, 85);
    font-size: 12px;
    white-space: normal;
    overflow-wrap: break-word;
    width: 80%;
  }
  > div {
    white-space: normal;
    > .name {
      color: rgb(0, 105, 193);
    }
    > .createAt {
      color: rgb(133, 142, 151);
      margin-left: 3px;
    }
  }
`;
/** 2023/04/22 - 답변 수 컴포넌트 - by 박수범 */
const AnswerCount = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 35px;
  margin-bottom: 15px;
  > h2 {
    font-size: 22px;
  }
  > div {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
/** 2023/04/22 - 답변 인풋폼 컨테이너 - by 박수범 */
const AnswerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    text-align: left;
    font-size: 19px;
    margin: 20px 0px;
  }
  > .postbtn-container {
    margin-top: 10px;
    text-align: left;
    > button {
      background-color: rgb(10, 149, 255);
      color: rgb(255, 255, 255);
      border: 1px solid rgb(204, 204, 204);
      padding: 10.4px;
      border-radius: 3px;
      width: 128px;
      height: 38px;
      cursor: pointer;
      font-size: 13px;
      box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px;
      &:hover {
        background-color: rgb(0, 105, 193);
      }
    }
  }
`;
/** 2023/04/22 - 답변 인풋폼 - by 박수범 */
const AnswerInputForm = styled.div`
  border-radius: 3px;
  margin-bottom: 5px;
`;

const AnswerContant = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(222, 226, 229);
`;

export default function Question() {
  const [answerBody, setAnswerBody] = useState("");
  const location = useLocation();
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();
  console.log(answer);

  /*const postAnswer = async (body, token) => {
    //json 형태로 body 받아옴
    axios
      .post(`${URL}/questions/${location.state.id}/answer`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        alert(res.data);
      });
  };*/

  const getAnswer = () => {
    //json 형태로 body 받아옴
    axios
      .get(`${URL}/questions/${location.state.id}/answers?page=1&size=10`, {
        page: 1,
        size: 10,
      })
      .then((res) => {
        setAnswer(res.data);
      });
  };

  useEffect(() => {
    getAnswer();
  }, []);

  /*const postBody = JSON.stringify({
    content: `${answerBody}`,
    createdAt: new Date(),
    membetID: 1234,
  });*/

  /** 2023/04/18 - Ask 버튼 클릭 시 질문작성페이지로 이동하는 함수 - by 박수범 */
  const AskBtnHandler = () => {
    navigate("/ask");
  };

  /** 2023/04/22 -Add코멘트 클릭 시 로그인 페이지로 이동하는 함수 - by 박수범 */
  const AddCommentBtn = () => {
    navigate("/signin");
  };

  const PostAnswertBtn = () => {
    setAnswer([
      ...answer,
      {
        id: location.state.id,
        answer: location.state.answer,
        content: answerBody.replace(/(<([^>]+)>)/gi, ""),
        createAt: location.state.createAt,
        username: location.state.username,
        views: location.state.views,
        tags: location.state.tags,
        vote: location.state.vote,
      },
    ]);
  };

  const AnswerHandler = (editor) => {
    setAnswerBody(editor);
  };

  return (
    <div>
      <LayoutArea>
        <Header />
        <LayoutContainer>
          <NavContainer>
            <Nav />
          </NavContainer>
          <ContentsContainer>
            <ContentsHeader>
              <a href={`/question/${location.state.id}`}>
                {location.state.title}
              </a>
              <ContentsHeaderAsk onClick={AskBtnHandler}>
                Ask Question
              </ContentsHeaderAsk>
            </ContentsHeader>
            <Contentinfo>
              <ul>
                <li>Asked {location.state.createAt}</li>
                <li>views {location.state.views}</li>
              </ul>
            </Contentinfo>
            <QuestionArticle>
              <ContentsArticle>
                <Questioncontainer>
                  <Votecontainer>
                    <button>
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconArrowUpLg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="#B1B7BC"
                      >
                        <path d="M2 25h32L18 9 2 25Z"></path>
                      </svg>
                    </button>
                    <div className="VoteText">
                      This question shows research effort; it is useful and
                      clear
                    </div>
                    <div>{location.state.vote}</div>
                    <button>
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconArrowDownLg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="#B1B7BC"
                      >
                        <path d="M2 11h32L18 27 2 11Z"></path>
                      </svg>
                    </button>
                    <div className="VoteText">
                      This question shows research effort; it is useful and
                      clear
                    </div>
                    <svg
                      aria-hidden="true"
                      className="js-saves-btn-unselected svg-icon iconBookmarkAlt"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#B1B7BC"
                    >
                      <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                    </svg>
                  </Votecontainer>
                  <Contentcontainer>
                    <p>{location.state.content}</p>
                    <ul>
                      {location.state.tags.map((el, idx) => {
                        return (
                          <li key={idx}>
                            <span>{el}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <ContentmidContainer>
                      <MidContainerleft>
                        <button>
                          <Link
                            to={`/question/${location.state.id}/edit`}
                            state={{
                              id: location.state.id,
                              title: location.state.title,
                              answer: location.state.answer,
                              content: location.state.content,
                              createAt: location.state.createAt,
                              username: location.state.username,
                              views: location.state.views,
                              tags: location.state.tags,
                              vote: location.state.vote,
                            }}
                          >
                            Edit
                          </Link>
                        </button>
                      </MidContainerleft>
                      <MidContainerRight>
                        <div>asked {location.state.createAt}</div>
                        <p>
                          <img
                            src="https://www.gravatar.com/avatar/73a947b04ec422b1677d20933ab4fe1e?s=64&amp;d=identicon&amp;r=PG&amp;f=1"
                            alt="Tom Bom's user avatar"
                          ></img>
                          <div>
                            <a href="/mypage">{location.state.username}</a>
                          </div>
                        </p>
                      </MidContainerRight>
                    </ContentmidContainer>
                    <ContentbottomContainer>
                      <BottomContainerTop>
                        <p>I have the same question!</p>
                        <div>
                          <span className="name">
                            {location.state.username}
                          </span>
                          <span className="createAt">
                            {location.state.createAt}
                          </span>
                        </div>
                      </BottomContainerTop>
                      <button onClick={AddCommentBtn}>Add a comment</button>
                    </ContentbottomContainer>
                  </Contentcontainer>
                </Questioncontainer>
                <AnswerArticle>
                  <AnswerCount>
                    <h2>{answer.length} Answers</h2>
                    <div>
                      <label htmlFor="answer-sort-method-select">
                        Sorted by
                      </label>
                      <select name="pets" id="answer-sort-method-select">
                        <option value="high">Highest crore (default)</option>
                        <option value="date">Date created (default)</option>
                      </select>
                    </div>
                  </AnswerCount>
                  {answer.length === 0
                    ? null
                    : answer.map((el, idx) => {
                        return (
                          <Questioncontainer key={idx}>
                            <Votecontainer>
                              <button>
                                <svg
                                  aria-hidden="true"
                                  className="svg-icon iconArrowUpLg"
                                  width="36"
                                  height="36"
                                  viewBox="0 0 36 36"
                                  fill="#B1B7BC"
                                >
                                  <path d="M2 25h32L18 9 2 25Z"></path>
                                </svg>
                              </button>
                              <div className="VoteText">
                                This question shows research effort; it is
                                useful and clear
                              </div>
                              <div>{el.vote}</div>
                              <button>
                                <svg
                                  aria-hidden="true"
                                  className="svg-icon iconArrowDownLg"
                                  width="36"
                                  height="36"
                                  viewBox="0 0 36 36"
                                  fill="#B1B7BC"
                                >
                                  <path d="M2 11h32L18 27 2 11Z"></path>
                                </svg>
                              </button>
                              <div className="VoteText">
                                This question shows research effort; it is
                                useful and clear
                              </div>
                              <svg
                                aria-hidden="true"
                                className="js-saves-btn-unselected svg-icon iconBookmarkAlt"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="#B1B7BC"
                              >
                                <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                              </svg>
                            </Votecontainer>
                            <Contentcontainer>
                              <p>{el.content}</p>
                              <ContentmidContainer>
                                <MidContainerleft>
                                  <button>
                                    <Link to="/">Edit</Link>
                                  </button>
                                </MidContainerleft>
                                <MidContainerRight>
                                  <div>answered {el.createAt}</div>
                                  <p>
                                    <img
                                      src="https://www.gravatar.com/avatar/73a947b04ec422b1677d20933ab4fe1e?s=64&amp;d=identicon&amp;r=PG&amp;f=1"
                                      alt="Tom Bom's user avatar"
                                    ></img>
                                    <div>
                                      <a href="/mypage">{el.username}</a>
                                    </div>
                                  </p>
                                </MidContainerRight>
                              </ContentmidContainer>
                              <ContentbottomContainer>
                                <BottomContainerTop>
                                  <p>I have the same question!</p>
                                  <div>
                                    <span className="name">
                                      {location.state.username}
                                    </span>
                                    <span className="createAt">
                                      {location.state.createAt}
                                    </span>
                                  </div>
                                </BottomContainerTop>
                                <button onClick={AddCommentBtn}>
                                  Add a comment
                                </button>
                              </ContentbottomContainer>
                            </Contentcontainer>
                          </Questioncontainer>
                        );
                      })}
                  <AnswerInputContainer>
                    <h2>Your Answer</h2>
                    <AnswerContant></AnswerContant>
                    <AnswerInputForm>
                      <EditorContainer>
                        <ReactQuill
                          height="200px"
                          theme="snow"
                          modules={editorModules}
                          onChange={(content, delta, source, editor) =>
                            AnswerHandler(editor.getHTML())
                          }
                        />
                      </EditorContainer>
                    </AnswerInputForm>
                    <div className="postbtn-container">
                      <button onClick={PostAnswertBtn}>Post Your Answer</button>
                    </div>
                  </AnswerInputContainer>
                </AnswerArticle>
              </ContentsArticle>
              <Sidebar />
            </QuestionArticle>
          </ContentsContainer>
        </LayoutContainer>
      </LayoutArea>
      <Footer />
    </div>
  );
}
