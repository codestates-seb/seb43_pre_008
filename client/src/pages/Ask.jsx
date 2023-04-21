/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "../share/Header";
import Footer from "../share/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorContainer, editorModules } from "../share/EditorContainer";
import { PostBtn, NextBtn, DiscardBtn } from "../components/ask/AskButtons";
import { InputGroup, InputSec, InputText } from "../components/ask/AskContent";
import { TagsInputGroup } from "../components/ask/AskTagGroup";
import {
  HelperHeader,
  HelperMain,
  HelperSec,
  HelperWrap,
} from "../components/ask/AskHelper";
import axios from "axios";
import bg from "../img/askbackground.svg";
/** 23/4/21 배경색 지정을 위한 전체 감싸는 Wrap -by 고정윤 */
const Wrap = styled.div`
  background-color: #f8f9f9;
`;
/** 23/4/21 질문 작성페이지 전체 컨테이너 -by 고정윤 */
const Container = styled.div`
  width: 1264px;
  padding: 0 24px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: left;
`;
/** 23/4/21 질문 작성페이지 제목, 배경이미지 -by 고정윤*/
const AskTitle = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: right bottom;
  h1 {
    display: flex;
    align-items: center;
    line-height: 1.3;
    margin: 0 0 1em;
    font-size: 26px;
    font-weight: bolder;
    margin-bottom: 16px;
  }
`;
/** 23/4/21 전체 작성 페이지 정렬 -by 고정윤*/
const WrtieWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
/** 23/4/21 질문 작성페이지 컨텐츠 전체 묶음 -by 고정윤*/
const WriteMain = styled.main`
  min-height: 100vh;
  padding-bottom: 70px;
`;
/** 23/4/21 컨텐츠 상단 좋은질문 작성법 -by 고정윤*/
const Notice = styled.section`
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  padding: 24px;
  border-radius: 3px;
  color: #3b4045;
  width: 70%;
  h2 {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 13px;
  }
  p {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 15px;
    font-weight: 500;
    white-space: normal;
    span {
      font-size: 15px;
      font-weight: 500;
      color: #0074cc;
    }
  }
  h5 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  ul {
    list-style-type: disc;
    padding-left: 25px;

    li {
      font-size: 13px;
      padding: 2px 0;
      font-weight: 500;
    }
  }
`;
/** 23/4/21 태그 블럭 -by 고정윤*/
const TagBlock = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 19px;
  font-size: 12px;
  padding: 2px 7px;
  margin: 0 !important;
  border-radius: 3px;
  background-color: hsl(205, 46%, 92%);
  color: #39739d !important;
  white-space: nowrap;
`;
/** 23/4/21 태그 삭제버튼 -by 고정윤*/
const DeleteBtn = styled.span`
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
  width: 14px;
  height: 14px;
  &:hover {
    background-color: hsl(205, 47%, 42%);
  }
  svg {
    fill: #39739d;
    &:hover {
      fill: #fff;
    }
  }
`;

/** 23/4/21 태그 삭제 기능 -by 고정윤*/
const Tag = ({ tag, tags, setTags }) => {
  const onDelete = () => {
    setTags(
      tags.filter((t) => {
        return t.id !== tag.id;
      }),
    );
  };
  return (
    <TagBlock>
      {tag.name}
      <DeleteBtn onClick={onDelete}>
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path>
        </svg>
      </DeleteBtn>
    </TagBlock>
  );
};

const Ask = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const tokenState = {
    key: "tokenState",
    default: null,
  };
  const [token] = useState(tokenState);
  const [body, setBody] = useState({
    title: "",
    intro: "",
    expand: "",
    introText: "",
    expandText: "",
    tags: [],
  });

  /** 배열에 타입이 입력되면 그 스텝이 오픈됨 */
  const [opened, setOpened] = useState(["title"]);

  /** 에러 메세지 관리 */
  const [titleError, setTitleError] = useState(false);
  const [introError, setIntroError] = useState(false);
  const [expandError, setExpandError] = useState(false);

  /** 버튼의 활성화 비활성화를 제어하기 위해 필요 */
  const titleNextRef = useRef();
  const introNextRef = useRef();
  const expandNextRef = useRef();
  const answerNextRef = useRef();
  const tagNextRef = useRef();
  const postRef = useRef();

  /** 지금 입력 tag 관리 */
  const [tag, setTag] = useState("");
  /** tag 목록 관리 */
  const [tags, setTags] = useState([]);
  /** tag 목록 관리 */
  const tagOutBox = useRef();

  const postQuestion = async (body, token) => {
    //json 형태로 body 받아옴
    const response = axios.post(`${URL}/questions/ask`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    return response;
  };
  /** 제출하기 */
  const onSubmit = (e) => {
    e.preventDefault();

    const postBody = JSON.stringify({
      title: body.title,
      content: `${body.intro}<p><br></p>${body.expand}`,
      text: `${body.introText}\n${body.expandText}`,
      tags: [...body.tags],
    });

    postQuestion(postBody, token)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch(() => alert(`글 작성에 실패하였습니다.`));
  };

  /** 설명 박스 등장을 제어함*/
  const onHelperHandler = useCallback(() => {
    if (document.activeElement.closest(".helperUnit")) {
      if (document.querySelector(".helperUnit.active")) {
        document.querySelector(".helperUnit.active").classList.remove("active");
      }
      document.activeElement.closest(".helperUnit").classList.add("active");
    }
  }, []);

  /** next 버튼 누를시 다음 step 활성화 시키기 */
  const openNext = (e, next) => {
    e.preventDefault();
    setOpened([...opened, next]);
    e.target.classList.add("remove");
  };

  useEffect(() => {
    window.addEventListener("click", onHelperHandler);
    titleNextRef.current.addEventListener("click", (e) => {
      openNext(e, "introduce");
    });
    introNextRef.current.addEventListener("click", (e) => {
      openNext(e, "expand");
    });
    expandNextRef.current.addEventListener("click", (e) => {
      openNext(e, "tags");
    });
    tagNextRef.current.addEventListener("click", (e) => {
      openNext(e, "answer");
    });
  }, [opened]);

  /** title 인풋 변화 인식*/
  const onChangeTitle = (e) => {
    let isFit = e.target.value.length > 15;
    setBody({ ...body, title: e.target.value });
    if (!isFit) {
      titleNextRef.current.disabled = true;
      setTitleError(true);
    } else {
      titleNextRef.current.disabled = false;
      setTitleError(false);
    }
  };

  //introduce 에디터 변화 인식(intro, expand)
  const onChangeIntro = (htmlStr, text, currentType) => {
    setBody({
      ...body,
      [currentType]: htmlStr,
      [`${currentType}Text`]: text,
    });
    let isFit = text.length > 20;
    let nextBtn;
    let errorSetter;

    if (currentType === "intro") {
      nextBtn = introNextRef.current;
      errorSetter = setIntroError;
    } else {
      nextBtn = expandNextRef.current;
      errorSetter = setExpandError;
    }

    if (!isFit) {
      nextBtn.disabled = true;
      errorSetter(true);
    } else {
      nextBtn.disabled = false;
      errorSetter(false);
    }
  };
  /** 태그 갯수 인식 */
  const onTagChange = () => {
    if (tags.length < 1) {
      tagOutBox.current.classList.add("error");
    } else if (tags.length === 5) {
      tagOutBox.current.classList.add("error");
    } else {
      if (tagOutBox.current.classList.contains("error")) {
        tagOutBox.current.classList.remove("error");
      }
    }
  };

  /** 태그갯수 인식해서 tags에 담기 */
  useEffect(() => {
    onTagChange();
  }, [tags]);

  /** tag Enter 인식 */
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (tags.length < 5 && e.target.value.length > 0) {
        setTags([...tags, { name: tag }]);
        setTag("");
      }
    }
  };

  /** 작성하던것 지우고 상단으로 */
  const onDiscard = () => {
    navigate(0);
    window.scrollTo(0, 0);
  };

  return (
    <Wrap>
      <Header />
      <Container>
        <AskTitle>
          <h1>Ask a question</h1>
        </AskTitle>
        <WrtieWrapper>
          <WriteMain>
            <Notice>
              <h2>Writing a good question</h2>
              <p>
                You’re ready to <span>ask</span> a{" "}
                <span>programming-related question</span> and this form will
                help guide you through the process. Looking to ask a
                non-programming question? See <span>the topics here</span> to
                find a relevant site.
              </p>
              <h5>Steps</h5>
              <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
                <li>
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li>Review your question and post it to the site.</li>
              </ul>
            </Notice>
            <form onSubmit={onSubmit}>
              {/* ---------------- 질문 타이틀 섹선 ---------------- */}
              <InputGroup
                className={
                  opened.indexOf("title") !== -1
                    ? "helperUnit opened active"
                    : "helperUnit"
                }
              >
                <InputSec>
                  <label htmlFor="question-title-input">Title</label>
                  <p>
                    Be specific and imagine you’re asking a question to another
                    person.
                  </p>
                  <InputText
                    id="question-title-input"
                    type="text"
                    onChange={onChangeTitle}
                    className={titleError ? "error" : ""}
                  ></InputText>
                  <small>Minimum 15 characters.</small>
                  <NextBtn ref={titleNextRef} disabled>
                    Next
                  </NextBtn>
                </InputSec>
                <HelperWrap>
                  <HelperSec className="helper">
                    <HelperHeader>Writing a good title</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>Your title should summarize the problem.</p>
                        <p>
                          You might find that you have a better idea of your
                          title after writing out the rest of the question.
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                </HelperWrap>
              </InputGroup>
              {/* ---------------- 문제가 발생한 부분 섹션 ---------------- */}
              <InputGroup
                className={
                  opened.indexOf("introduce") !== -1
                    ? "helperUnit opened"
                    : "helperUnit"
                }
              >
                <InputSec>
                  <label>What are the details of your problem?</label>
                  <p>
                    Introduce the problem and expand on what you put in the
                    title. Minimum 20 characters.
                  </p>
                  <EditorContainer className={introError ? "error" : ""}>
                    <ReactQuill
                      theme="snow"
                      modules={editorModules}
                      onChange={(content, delta, source, editor) =>
                        onChangeIntro(
                          editor.getHTML(),
                          editor.getText(),
                          "intro",
                        )
                      }
                    />
                  </EditorContainer>
                  <small>Minimum 20 characters.</small>
                  <NextBtn ref={introNextRef} disabled>
                    Next
                  </NextBtn>
                </InputSec>
                <HelperWrap>
                  <HelperSec className="helper">
                    <HelperHeader>Introduce the problem</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>
                          Explain how you encountered the problem you’re trying
                          to solve, and any difficulties that have prevented you
                          from solving it yourself.
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                </HelperWrap>
              </InputGroup>
              {/* ---------------- 시도했던 것과 예상했던 부분 섹션 ---------------- */}
              <InputGroup
                className={
                  opened.indexOf("expand") !== -1
                    ? "helperUnit opened"
                    : "helperUnit"
                }
              >
                <InputSec>
                  <label>What did you try and what were you expecting?</label>
                  <p>
                    Describe what you tried, what you expected to happen, and
                    what actually resulted. Minimum 20 characters.
                  </p>
                  <EditorContainer className={expandError ? "error" : ""}>
                    <ReactQuill
                      theme="snow"
                      modules={editorModules}
                      onChange={(content, delta, source, editor) =>
                        onChangeIntro(
                          editor.getHTML(),
                          editor.getText(),
                          "expand",
                        )
                      }
                    />
                  </EditorContainer>
                  <small>Minimum 20 characters.</small>
                  <NextBtn ref={expandNextRef} disabled>
                    Next
                  </NextBtn>
                </InputSec>
                <HelperWrap>
                  <HelperSec className="helper">
                    <HelperHeader>Expand on the problem</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>
                          Show what you’ve tried, tell us what happened, and why
                          it didn’t meet your needs.
                        </p>
                        <p>
                          Not all questions benefit from including code, but if
                          your problem is better understood with code you’ve
                          written, you should include a{" "}
                          <span>minimal, reproducible example.</span>
                        </p>
                        <p>
                          Please make sure to post code and errors as text
                          directly to the question (and{" "}
                          <span>not as images</span>
                          ), and <span>format them appropriately.</span>
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                </HelperWrap>
              </InputGroup>
              {/* ---------------- 태그 기능 섹션 ---------------- */}
              <InputGroup
                className={
                  opened.indexOf("tags") !== -1
                    ? "helperUnit opened"
                    : "helperUnit"
                }
              >
                <InputSec>
                  <label htmlFor="question-title-input">Tags</label>
                  <p>
                    Add up to 5 tags to describe what your question is about.
                    Start typing to see suggestions. Minimum 1 tag.
                  </p>
                  <TagsInputGroup htmlFor="tag-input" ref={tagOutBox}>
                    {tags.map((t) => {
                      return (
                        <Tag
                          key={t.id}
                          tag={t}
                          tags={tags}
                          setTags={setTags}
                        ></Tag>
                      );
                    })}
                    <input
                      id="tag-input"
                      type="text"
                      placeholder="Type a Tag and Press Enter"
                      onChange={(e) => {
                        setTag(e.target.value);
                        onTagChange(e);
                      }}
                      onKeyPress={onKeyPress}
                    ></input>
                  </TagsInputGroup>
                  <NextBtn ref={tagNextRef} disabled>
                    Next
                  </NextBtn>
                </InputSec>
                <HelperWrap>
                  <HelperSec className="helper">
                    <HelperHeader>Adding tags</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>
                          Tags help ensure that your question will get attention
                          from the right people.
                        </p>
                        <p>
                          Tag things in more than one way so people can find
                          them more easily. Add tags for product lines,
                          projects, teams, and the specific technologies or
                          languages used.
                        </p>
                        <p>
                          <span>Learn more about tagging</span>
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                </HelperWrap>
              </InputGroup>
              {/* ---------------- 해당 키워드의 질문있는지 확인 섹션 ----------------*/}
              <InputGroup
                className={
                  opened.indexOf("answer") !== -1
                    ? "helperUnit opened active"
                    : "helperUnit"
                }
              >
                <InputSec>
                  <label htmlFor="answer-title-input">
                    Review questions already on Stack Overflow to see if your
                    question is a duplicate.
                  </label>
                  <p>
                    Clicking on these questions will open them in a new tab for
                    you to review. Your progress here will be saved so you can
                    come back and continue.
                  </p>
                  <InputText
                    id="answer-title-input"
                    type="text"
                    onChange={onChangeTitle}
                    className={titleError ? "error" : ""}
                  ></InputText>
                  <NextBtn ref={answerNextRef} disabled>
                    Next
                  </NextBtn>
                </InputSec>
                <HelperWrap>
                  <HelperSec className="helper">
                    <HelperHeader>
                      Make sure we don’t already have an answer for your
                      question
                    </HelperHeader>
                    <HelperMain>
                      <svg
                        aria-hidden="true"
                        className="svg-spot spotBell"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M11.81.8a1.37 1.37 0 1 0-2.5 1.16l1.91 4.09a1.37 1.37 0 0 0 2.5-1.16l-1.9-4.1Zm-8.7 3.98a1.37 1.37 0 0 1 1.94-.18l3.97 3.28A1.37 1.37 0 0 1 7.26 10L3.3 6.72a1.38 1.38 0 0 1-.19-1.94Zm34.91 23.57a21.3 21.3 0 0 0-.23-12.08 19.78 19.78 0 0 0-3-5.95 3.49 3.49 0 0 0-1.9-4.19 3.49 3.49 0 0 0-4.43 1.25c-2.2.13-4.4.71-6.44 1.58a21.65 21.65 0 0 0-9.3 7.6c-.82 1.18-1.6 2.39-2.4 3.6l-.38.6c-2.34 3.6-3.55 5.07-4.87 5.64-1.08.47-2.3 1.1-2.82 2.22A3 3 0 0 0 3.7 32.6l27.82 12.98c1.96.91 4.33-.6 4.27-2.8a8.47 8.47 0 0 0-.39-2.24c-.41-1.36-.07-3.24 1.2-7.35.49-1.6 1-3.21 1.42-4.84ZM.27 14.11c.02-.76.66-1.35 1.42-1.33l4.75.16a1.38 1.38 0 0 1-.1 2.75l-4.74-.16a1.38 1.38 0 0 1-1.33-1.42Zm45.99 15.63a1.37 1.37 0 1 0 .73-2.65l-4.96-1.37a1.37 1.37 0 1 0-.74 2.65l4.97 1.37Zm-2.74 6.53c-.5.57-1.37.64-1.94.14l-3.42-2.96a1.38 1.38 0 0 1 1.8-2.08l3.42 2.96c.57.5.64 1.36.14 1.94Zm3.22-15.37a1.37 1.37 0 1 0-1.05-2.54l-4.4 1.8a1.38 1.38 0 0 0 1.05 2.55l4.4-1.8Z"
                          opacity=".2"
                        ></path>
                        <path d="M13.73 22.3a1 1 0 1 1-1.78-.92c3.61-7.07 8.02-10.8 13.34-11.26a1 1 0 0 1 .17 2c-4.53.39-8.4 3.66-11.73 10.17Zm22.33 3.55c1.13-4.3.95-8.36-.23-12.08a19.77 19.77 0 0 0-3.01-5.95 3.49 3.49 0 0 0-1.9-4.18 3.49 3.49 0 0 0-4.42 1.24c-2.21.13-4.4.71-6.44 1.58a21.65 21.65 0 0 0-9.3 7.6c-.83 1.18-1.61 2.39-2.4 3.6l-.38.6c-2.34 3.6-3.55 5.07-4.87 5.64a9.4 9.4 0 0 0-1.9 1.08 3 3 0 0 0 .52 5.12l27.83 12.98a3 3 0 0 0 4.26-2.8 8.47 8.47 0 0 0-.38-2.24c-.41-1.36-.07-3.24 1.19-7.34l.21-.7c.43-1.38.85-2.75 1.22-4.15Zm-4.23 14.48a1 1 0 0 1-1.43.94L2.58 28.29a1 1 0 0 1-.18-1.7c.43-.32.93-.6 1.5-.86 1.84-.8 3.17-2.4 5.76-6.39l.39-.6c.77-1.19 1.53-2.38 2.35-3.53a19.65 19.65 0 0 1 8.44-6.91 15.72 15.72 0 0 1 6.23-1.44 1 1 0 0 0 .92-.57c.42-.9 1.3-1.21 2.09-.84.8.37 1.11 1.24.7 2.13a1 1 0 0 0 .15 1.09 15.96 15.96 0 0 1 3 5.7 19.36 19.36 0 0 1 .2 10.97c-.37 1.36-.78 2.71-1.2 4.06l-.21.7c-1.4 4.55-1.77 6.61-1.2 8.52.2.61.3 1.18.3 1.71Zm-14.78-.72a1 1 0 1 1 1.78.9 2.44 2.44 0 1 0 4.44 2.03 1 1 0 0 1 1.85.77 4.44 4.44 0 1 1-8.07-3.7Z"></path>
                      </svg>
                      <div>
                        <p>Stack Overflow is a huge database of knowledge.</p>
                        <p>
                          Please make sure your question isn’t already answered
                          before posting, or your question might be closed as a
                          duplicate.
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                </HelperWrap>
              </InputGroup>
              <div>
                <PostBtn
                  ref={postRef}
                  type="submit"
                  className={opened.indexOf("post") !== -1 ? "opened" : ""}
                  disabled
                >
                  Post your question
                </PostBtn>
                <DiscardBtn onClick={onDiscard}>Discard draft</DiscardBtn>
              </div>
            </form>
          </WriteMain>
        </WrtieWrapper>
      </Container>
      <Footer />
    </Wrap>
  );
};
export default Ask;
