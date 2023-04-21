import styled from "styled-components";
/** 23/4/21 각 섹션 감싸는 InputGroup (내용 + 도움말) */
export const InputGroup = styled.section`
  display: flex;
  opacity: 0.3;
  pointer-events: none;
  &.active {
    .helper {
      display: block;
    }
  }
  &:not(.opened) {
    button {
      display: none;
    }
  }
  &.opened {
    opacity: 1;
    pointer-events: auto;
  }

  &.active {
    flex-direction: row;
    background-color: transparent;
    button {
      display: block;
    }
  }
`;
/** 23/4/21 해당 내용 감싸는 섹션 (내용만 감싸는)  */
export const InputSec = styled.section`
  width: 70% !important;
  height: fit-content;
  flex-shrink: 0;
  padding: 24px;
  margin: 16px 0;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  background-color: #fff;
  white-space: normal;
  label {
    font-size: 15px;
    font-weight: 700;
    color: #0c0d0e;
  }
  p {
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 15px;
    color: #3b4045;
  }
  .quill {
    height: 232px;
    border: 3px;
    .ql-container {
      height: 191.06px;
    }
  }
`;
/** 23/4/21 작성내용의 input  */
export const InputText = styled.input`
  height: 32.6px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;
  font-size: 14px;
  &:focus-visible {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;
  }
  &::placeholder {
    color: hsl(210, 8%, 75%);
  }
  & + small {
    margin-top: 6px;
    display: none;
    font-size: 12px;
    color: #de4f54;
  }
  &.error {
    border-color: #de4f54;
    &:focus-visible {
      border: 1px solid #de4f54;
      outline: 1px solid #de4f54;
      box-shadow: 0 0 0 4px rgba(222, 79, 84, 0.2);
    }
    & + small {
      display: block;
    }
  }
`;
