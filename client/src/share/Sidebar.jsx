import styled from "styled-components";
/** 사이드바 전체 감싸주는 컨테이너 */
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  & > a {
    width: 100%;
    & > img {
      width: 100%;
    }
  }
`;

const SidebarWrap = styled.div`
  border-radius: 3px;
  color: hsl(210, 8%, 25%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  header {
    padding: 12px 15px;
    font-size: 13px;
    font-weight: 700;
    text-align: left;
  }

  ul {
    padding: 4px 15px;
  }
`;

const SidebarInner = styled(SidebarWrap)`
  border: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 83%, 91%);
  width: 300px;

  header {
    border-top: 1px solid hsl(47, 65%, 84%);
    border-bottom: 1px solid hsl(47, 65%, 84%);

    &:first-child {
      border-top: none;
    }
  }

  ul {
    padding: 4px 15px;
    background-color: #faf5e6;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 7px;
    margin: 12px 0;
    font-size: 13px;
    list-style: inside;
    list-style-type: none;
    text-align: left;
    cursor: pointer;
    :hover {
      color: hsl(210, 8%, 35%);
    }
    overflow: hidden;
  }

  svg {
    flex-shrink: 0;
  }
`;

// Icons ChatIcon

const ChatIcon = styled.div`
  background-image: url("./images/favicons-sprite16.png");
  background-size: 16px 7038px;
  background-position: 0 -6120px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const LogoIcon = styled(ChatIcon)`
  background-position: 0 -6156px;
`;

const NumberBadge = styled.span`
  color: hsl(210, 8%, 45%);
`;

const Sidebar = () => {
  const penIcon = (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
      <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
    </svg>
  );
  return (
    <Container>
      <SidebarInner>
        <header>The Overflow Blog</header>
        <ul>
          <li>{penIcon}Are meetings making you less productive?</li>
          <li>{penIcon}The philosopher who believes in Web Assembly</li>
        </ul>
        <header>Featured on Meta</header>
        <ul>
          <li>
            <ChatIcon />
            Improving the copy in the close modal and post notices - 2023
            edition
          </li>
          <li>
            <LogoIcon />
            Temporary policy: ChatGPT is banned
          </li>
          <li>
            <LogoIcon />
            The [protection] tag is being burninated
          </li>
          <li>
            <LogoIcon />
            Content Discovery initiative 4/13 update: Related questions using a
            Machine...
          </li>
        </ul>
        <header>Hot Meta Posts</header>
        <ul>
          <li>
            <NumberBadge>11</NumberBadge>
            How to review First Answers that repeat previously posted answers
          </li>
        </ul>
      </SidebarInner>
    </Container>
  );
};

export default Sidebar;
