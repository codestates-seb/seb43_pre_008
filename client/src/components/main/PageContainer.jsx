import styled from "styled-components";

import Pagination from "react-js-pagination";

/** 2023/04/20 - 페이지네이션 영역 컴포넌트 - by 박수범 */
const PageContaine = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 20px 0px;
  padding-left: 24px;
  > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    > button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      border: 1px solid rgb(214, 217, 220);
      height: 25px;
      border-radius: 3px;
      margin: 0px 3px;
      padding: 0px 8px;
      background-color: white;
      &:focus {
        background-color: orange;
        color: white;
      }
    }
    > p {
      margin: 0px 10px;
    }
  }
  > ul {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    > li {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      border: 1px solid rgb(214, 217, 220);
      height: 25px;
      border-radius: 3px;
      margin: 0px 3px;
      padding: 0px 8px;

      &:hover {
        background-color: rgb(214, 217, 220);
      }
      > a {
        text-decoration: none;
        color: rgb(0, 116, 204);
      }
    }
  }
`;

export default function PageContainer({
  page,
  count,
  setPage,
  setPostPerPage,
  postPerPage,
}) {
  const pageBtn = (page) => {
    setPostPerPage(page);
  };
  return (
    <PageContaine>
      <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={count}
        pageRangeDisplayed={postPerPage}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
      <div>
        <button onClick={() => pageBtn(15)}>15</button>
        <button onClick={() => pageBtn(30)}>30</button>
        <button onClick={() => pageBtn(50)}>50</button>
        <p>per page</p>
      </div>
    </PageContaine>
  );
}
