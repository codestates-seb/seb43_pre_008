import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: auto;
`;
const LayoutContainer = styled.div`
  display: flex;
  width: 1250px;
  min-height: 100vh;
  border: solid 1px red;
`;

const SidebarContainer = styled.div`
  width: 30%;
  min-height: 100%;
  border: solid 1px red;
`;

const NavContainer = styled.div`
  width: 190px;
  min-height: 100%;
  border: solid 1px red;
`;
const ViewContainer = styled.div`
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
          <ViewContainer></ViewContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
        </LayoutContainer>
      </LayoutArea>
    </div>
  );
}
