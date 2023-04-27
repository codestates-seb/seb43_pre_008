/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
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

const Ask2 = () => {
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
  const location = useLocation();
  console.log(location.state.tags);
  /** 버튼의 활성화 비활성화를 제어하기 위해 필요 */
  const titleNextRef = useRef();
  const introNextRef = useRef();
  const postRef = useRef();

  //tag 키값 변수
  let nextTagId = useRef(0);
  /** 지금 입력 tag 관리 */
  const [tag, setTag] = useState(location.state.tags[0]);
  /** tag 목록 관리 */
  const [tags, setTags] = useState(location.state.tags);
  /** tag 목록 관리 */
  const tagOutBox = useRef();
  const tagInputRef = useRef();
  const tagMinimumRef = useRef();
  const tagMaximumRef = useRef();

  const postQuestion = async (body, token) => {
    //json 형태로 body 받아옴
    const response = axios.post(`http://localhost:4000/discussions`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "Access-Control-Allow-Origin": "*",
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
      vote: 0,
      summary: 0,
      views: 0,
      createAt: new Date().toLocaleString(),
      username: ``,
    });

    postQuestion(postBody, token)
      .then(() => {
        navigate(`/`, { replace: true });
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
  /** 버튼 클릭시 도움말 활성화 */
  useEffect(() => {
    window.addEventListener("click", onHelperHandler);
    titleNextRef.current.addEventListener("click", (e) => {
      openNext(e, "introduce");
    });
    introNextRef.current.addEventListener("click", (e) => {
      openNext(e, "expand");
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
      nextBtn = tagOutBox.current;
    }
    if (currentType === "intro") {
      nextBtn = introNextRef.current;
      errorSetter = setIntroError;
    } else {
      nextBtn = tagOutBox.current;
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
    const tagOutBoxClassList = tagOutBox.current.classList;
    const tagMinimumRefClassList = tagMinimumRef.current.classList;
    const tagMaximumRefClassList = tagMaximumRef.current.classList;

    if (tags.length < 1) {
      tagOutBoxClassList.add("error");
      tagMinimumRefClassList.add("on");
      tagMaximumRefClassList.remove("on");
    } else if (tags.length === 5) {
      tagOutBoxClassList.add("error");
      tagMinimumRefClassList.remove("on");
      tagMaximumRefClassList.add("on");
    } else {
      tagOutBoxClassList.remove("error");
      tagMinimumRefClassList.remove("on");
      tagMaximumRefClassList.remove("on");
    }
  };
  useEffect(() => {
    if (tags.length > 0) {
      postRef.current.disabled = false;
    } else {
      postRef.current.disabled = true;
    }

    // 추가 삭제를 위해 객체로 관리하던 tags를 배열로 변경
    const tagNameArr = tags.map((obj) => {
      return obj.name;
    });

    setBody({
      ...body,
      tags: [...tagNameArr],
    });
  }, [tags]);
  // 태그 박스에 포커스 효과 제어
  const onTagFocused = (e) => {
    e.target.closest("label").classList.toggle("focused");
  };

  useEffect(() => {
    const handleNextClick = (e, section) => {
      openNext(e, section);
    };

    window.addEventListener("click", onHelperHandler);
    titleNextRef.current.addEventListener("click", (e) =>
      handleNextClick(e, "introduce"),
    );
    introNextRef.current.addEventListener("click", (e) =>
      handleNextClick(e, "tags"),
    );
    tagInputRef.current.addEventListener("focus", onTagFocused);
    tagInputRef.current.addEventListener("blur", onTagFocused);
    tagInputRef.current.addEventListener("mouseenter", (e) =>
      handleNextClick(e, "summary"),
    );
  }, [opened]);

  /** 태그갯수 인식해서 tags에 담기 */
  useEffect(() => {
    onTagChange();
  }, [tags]);

  useEffect(() => {
    tagOutBox.current.classList.remove("error");
    tagMinimumRef.current.classList.remove("on");
  }, []);

  /** tag Enter 인식 */
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (tags.length < 5 && e.target.value.length > 0) {
        setTags([...tags, { name: tag, id: nextTagId.current }]);
        nextTagId.current++;
        tagInputRef.current.value = "";
        tagInputRef.current.focus();
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
          <h1>Edit question</h1>
        </AskTitle>
        <WrtieWrapper>
          <WriteMain>
            <Notice>
              <h2>Writing a good question</h2>
              <p>
                You’re ready to <span>ask</span> a
                <span> programming-related question</span> and this form will
                help guide you through the process. Looking to ask a
                non-programming question? See <span>the topics here</span> to
                find a relevant site.
              </p>
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
                    defaultValue={location.state.title}
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
                      ref={tagInputRef}
                      onChange={(e) => {
                        setTag(e.target.value);
                        onTagChange(e);
                      }}
                      onKeyDown={onKeyDown}
                    ></input>
                  </TagsInputGroup>
                  <small ref={tagMinimumRef}>
                    최소 1개의 태그를 입력해주세요.
                  </small>
                  <small ref={tagMaximumRef}>
                    최대 5개까지 입력 가능합니다.
                  </small>
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
              {/* ---------------- Edit Summary 섹션 ----------------*/}
              <InputGroup
                className={
                  opened.indexOf("summary") !== -1
                    ? "helperUnit opened active"
                    : "helperUnit"
                }
              >
                <InputSec>
                  <label htmlFor="summary-title-input">Edit Summary</label>
                  <p></p>
                  <InputText
                    id="summary-title-input"
                    type="text"
                    onChange={onChangeTitle}
                    className={titleError ? "error" : ""}
                    placeholder="briefly explain your changes (corrected spelling, fixed grammar, imporved formatting)"
                  ></InputText>
                  <small>Minimum 15 characters.</small>
                </InputSec>
              </InputGroup>
              <div>
                <PostBtn
                  ref={postRef}
                  type="submit"
                  className={opened.indexOf("post") !== -1 ? "opened" : ""}
                  // disabled
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
export default Ask2;
