import styled from "styled-components";
/** 2023/04/20 검색결과 main 묶음 - by 고정윤*/
const NoResultWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  border-top: 1px solid #d4d4d4;

  padding: 24px;
  text-align: center;
  svg {
    margin-bottom: 15px;
    opacity: 0.2;
  }
`;
/** 2023/04/20 검색결과 main 텍스트 묶음 - by 고정윤*/
const NoResultText = styled.div`
  color: #232629;
  text-align: center;
  line-height: 1.8em;
  font-size: 1.2rem;
  b {
    font-weight: bold;
    font-size: inherit;
  }
`;

const SearchKeyword = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
`;
const NoResult = () => {
  // let { keyword } = useParams();
  return (
    <NoResultWrap>
      <svg width="96" height="96" viewBox="0 0 96 96">
        <path
          opacity=".1"
          d="M60.38 76.15a6.2 6.2 0 1 1 8.77-8.77l17.78 17.79a6.2 6.2 0 0 1-8.76 8.76L60.38 76.15Z"
        ></path>
        <path d="M52.17 13.27a1.5 1.5 0 0 0-1.5 2.6A25.5 25.5 0 0 1 63 32.97a1.5 1.5 0 1 0 2.94-.59 28.5 28.5 0 0 0-13.77-19.1ZM36.64 11c0-.84.67-1.5 1.5-1.5 1.8 0 3.59.19 5.35.53a1.5 1.5 0 1 1-.58 2.95 25.5 25.5 0 0 0-4.78-.48 1.5 1.5 0 0 1-1.5-1.5ZM38 1.5a36.5 36.5 0 1 0 22.3 65.4 6.47 6.47 0 0 0 1.9 4.48l19.15 19.15a6.5 6.5 0 0 0 9.18-9.18L71.38 62.2a6.47 6.47 0 0 0-4.48-1.9A36.5 36.5 0 0 0 38 1.5ZM4.5 38a33.5 33.5 0 1 1 67 0 33.5 33.5 0 0 1-67 0Zm59.83 31.26a3.5 3.5 0 0 1 4.93-4.93l19.15 19.14a3.5 3.5 0 1 1-4.94 4.94L64.33 69.26Z"></path>
      </svg>
      <NoResultText>
        <SearchKeyword>
          We couldn't find anything for <b>{"키워드 나올곳"}</b>
        </SearchKeyword>
        <b>Search options:</b> not deleted
        <br />
        Try different or less specific keywords.
      </NoResultText>
    </NoResultWrap>
  );
};
export default NoResult;
