import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

/** 2023/04/18 - 전체 영역 컴포넌트 - by 박수범 */
const LayoutArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: auto;
`;
/** 2023/04/18 - 전체 레이아웃 레이아웃 컴포넌트 - by 박수범 */
const LayoutContainer = styled.div`
  display: flex;
  width: 1250px;
  min-height: 100vh;
  border: solid 1px red;
`;
/** 2023/04/18 - 사이드바 레이아웃 컴포넌트 - by 박수범 */
const SidebarContainer = styled.div`
  width: 30%;
  min-height: 100%;
  border: solid 1px red;
`;
/** 2023/04/18 - 네비 레이아웃 컴포넌트 - by 박수범 */
const NavContainer = styled.div`
  width: 190px;
  min-height: 100%;
  border: solid 1px red;
`;
/** 2023/04/18 - 컨텐츠 레이아웃 컴포넌트 - by 박수범 */
const ContentsContainer = styled.div`
  width: 80%;
  min-height: 100%;
  border: solid 1px red;
`;

/*const SidebarContainer = styled.div`
  width: 300px;
`;*/

export default function Layout() {
  return (
    <div>
      <Header />
      <LayoutArea>
        <LayoutContainer>
          <NavContainer></NavContainer>
          <ContentsContainer></ContentsContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
        </LayoutContainer>
      </LayoutArea>
    </div>
  );
}
