import styled from "styled-components";
import { Link } from "react-router-dom";

/** 2023-04-18 - 질문리스트 컨테이너 컴포넌트 - by 박수범*/
const QuestionContainer = styled.div`
  padding: 16px;
  display: flex;
  border-top: 1px solid rgb(227, 230, 232);
`;
/** 2023-04-18  컨테이너 좌측 컴포넌트 */
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 108px;
  text-align: right;
  font-size: 13px;
  margin: 0px 16px 4px 0px;
  > p {
    padding-bottom: 10px;
  }
`;
const Answerview = styled.p`
  color: #807d7d;
`;
/** 2023-04-18 - 컨테이너 우측 컴포넌트 - by 박수범 */
const RightContainer = styled.div`
  width: 100%;
  white-space: normal;
  text-decoration: none;
  color: rgb(0, 116, 204);
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
/** 2023-04-18 -  질문 컨텐츠 컴포넌트 - by 박수범*/
const QuestionContents = styled.div`
  margin: -2px 0px 5px;
  white-space: normal;
  text-decoration: none;
  color: rgb(0, 116, 204);
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  > a {
    text-align: left;
    font-size: 17px;
    white-space: normal;
    text-decoration: none;
    color: rgb(0, 116, 204);
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  > div {
    max-height: 100px;
    white-space: normal;
    font-size: 13px;
    margin-bottom: 8px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    > p {
      color: black;
      text-align: left;
      white-space: normal;
      font-size: 13px;
      margin-bottom: 8px;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
/** 2023-04-18 - 질문리스트 태그 컴포넌트 - by 박수범*/
const TagContainer = styled.div`
  display: flex;
  margin-bottom: 13px;
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
      cursor: pointer;
      &:hover {
        background: rgb(196, 222, 240);
      }
      > span {
        color: rgb(39, 104, 145);
        font-size: 12px;
      }
    }
  }
`;
/** 2023-04-18 - 질문리스트 작성자 및 작성날짜 컴포넌트 - by 박수범*/
const MemberandcteateAt = styled.div`
  display: flex;
  justify-content: right;
  > a {
    margin: 0px 2px;
    text-decoration: none;
    color: rgb(0, 116, 204);
  }
  > span {
    color: rgb(82, 89, 96);
    margin-left: 3px;
    margin: 0px 2px;
  }
`;

export default function Questionlist({ el }) {
  return (
    <QuestionContainer>
      <LeftContainer>
        <p>{el.vote} votes</p>
        <Answerview>{el.answer} asnwers</Answerview>
        <Answerview>{el.views} views</Answerview>
      </LeftContainer>
      <RightContainer>
        <QuestionContents>
          <Link
            to={`/question/${el.id}`}
            state={{
              id: el.id,
              title: el.title,
              answer: el.answer,
              content: el.content,
              createAt: el.createAt,
              username: el.username,
              views: el.views,
              tag: el.tag,
              vote: el.vote,
            }}
          >
            {el.title}
          </Link>
        </QuestionContents>
        <QuestionContents>
          <div>
            <p>{el.content}</p>
            <QuestionContents>
              <TagContainer>
                <ul>
                  <li>
                    <span>{el.tag[0]}</span>
                  </li>
                  <li>
                    <span>{el.tag[1]}</span>
                  </li>
                </ul>
              </TagContainer>
            </QuestionContents>
            <MemberandcteateAt>
              <Link to="/mypage">{el.username}</Link>
              <span></span>
              <span>{el.createAt}</span>
            </MemberandcteateAt>
          </div>
        </QuestionContents>
      </RightContainer>
    </QuestionContainer>
  );
}
