import styled from "styled-components";

/** 제출하기 버튼 */
export const PostBtn = styled.button`
  display: inline-block;
  padding: 9px;
  font-size: 13px;
  background-color: #0a95ff;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:disabled {
    opacity: 0.3;
  }
`;

/** Next 버튼 */
export const NextBtn = styled(PostBtn)`
  margin-right: 0;
  margin-top: 10.4px;
  &.remove {
    display: none !important;
  }
`;

/** DiscardBtn 버튼 */
export const DiscardBtn = styled.p`
  display: inline-block;
  padding: 9px;
  font-size: 13px;
  color: hsl(358, 62%, 47%);
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  background-color: unset;
  &:hover {
    background-color: hsl(358, 75%, 97%);
  }
`;
