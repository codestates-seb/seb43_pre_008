import styled from "styled-components";

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

export default function PageContainer() {
  return (
    <PageContaine>
      <ul>
        <li>
          <a href="/" aria-label="Go to first page">
            &lt;&lt;
          </a>
        </li>
        <li>
          <a href="/" aria-label="Go to previous page">
            Prev
          </a>
        </li>
        <li>
          <a href="/" aria-label="Go to page 1">
            1
          </a>
        </li>
        <li>
          <a href="/" aria-label="Go to page 1">
            next
          </a>
        </li>
        <li>
          <a href="/" aria-label="Go to page 1">
            &gt;&gt;
          </a>
        </li>
      </ul>
      <div>
        <button>15</button>
        <button>30</button>
        <button>50</button>
        <p>per page</p>
      </div>
    </PageContaine>
  );
}
