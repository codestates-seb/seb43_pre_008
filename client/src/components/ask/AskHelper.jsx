import styled from "styled-components";

/** 도움말 전체 감싸는 Wrap. position 때문 사용 */
export const HelperWrap = styled.div`
  width: 100%;
  position: relative;
`;

/** 도움말 내용 감싸는 부분 */
export const HelperSec = styled.section`
  position: absolute;
  display: none;
  height: fit-content;
  margin: 16px 0;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  color: #232629;
  background-color: #fff;
  margin-left: 24px;
`;

/** 도움말 헤더 부분 */
export const HelperHeader = styled.header`
  padding: 12px;
  background-color: hsl(210, 8%, 97.5%);
  border-bottom: 1px solid #e3e6e8;
  font-size: 14px;
`;

/** 도움말 내용 부분 */
export const HelperMain = styled.main`
  display: flex;
  padding: 16px;
  font-size: 12px;
  line-height: 16px;
  svg {
    flex-shrink: 0;
  }
  div {
    font-size: 12px;
    margin-left: 16px;
    p {
      margin-bottom: 11px;
      white-space: normal;
    }
  }
  span {
    color: #0074cc;
    cursor: pointer;
    &:hover {
      color: #0a95ff;
    }
  }
`;
