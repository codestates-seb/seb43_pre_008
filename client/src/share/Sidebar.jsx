import styled from "styled-components";
import Icons from "../img/favicons-sprite16.png";
/** 2023/04/17 사이드바 전체 감싸주는 컨테이너(초기화용) - by 고정윤 */
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & > a {
    width: 100%;
    & > img {
      width: 100%;
    }
  }
`;
/** 2023/04/17 사이드바 내용을 감싸는 css - by 고정윤 */
const SidebarWrap = styled.div`
  border-radius: 3px;
  color: hsl(210, 8%, 25%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 300px;
`;
/** 2023/04/17 사이드바 내용에 해당하는 css - by 고정윤 */
const SidebarInner = styled(SidebarWrap)`
  border: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 83%, 91%);
  white-space: normal;
  header {
    padding: 12px 15px;
    font-size: 13px;
    font-weight: 700;
    text-align: left;
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
    white-space: normal;
  }

  svg {
    flex-shrink: 0;
  }
`;

/** 2023/04/17 사이드바 내에 사용되는 아이콘(sprite 이미지 사용하여 position값으로 적용됨) - by 고정윤*/
/** 2023/04/17 사이드바 내용의 채팅 아이콘 - by 고정윤*/
const ChatIcon = styled.div`
  background-image: url(${Icons});
  background-size: 16px 7038px;
  background-position: 0 -6120px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
/** 2023/04/17 사이드바 내용의 스택오버플로우 아이콘 - by 고정윤 */
const LogoIcon = styled(ChatIcon)`
  background-position: 0 -6156px;
`;
/** 2023/04/17 사이드바 내용의 숫자뱃지 색 지정 - by 고정윤 */
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
      <SidebarWrap>
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
              Content Discovery initiative 4/13 update: Related questions using
              a Machine...
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
      </SidebarWrap>
    </Container>
  );
};

export default Sidebar;
