import styled from "styled-components";

/** 태그 전체 감싸는 그룹*/
export const TagsInputGroup = styled.label`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  min-height: 32.6px;
  width: 100%;
  padding: 8px 9px;
  box-sizing: border-box;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;
  padding-left: 6px;
  &.focused {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;
    &.error {
      border: 1px solid #de4f54;
      outline: 1px solid #de4f54;
      box-shadow: 0 0 0 4px rgba(222, 79, 84, 0.2);
    }
  }
  & ~ small {
    margin-top: 6px;
    display: none;
    font-size: 12px;
    color: #de4f54;
  }
  &.error {
    border-color: #de4f54;
    & ~ small.on {
      display: block;
    }
  }
  input {
    flex-shrink: 1;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    padding-left: 0;
    border: none;
    min-width: 250px;
    font-size: 13px;
    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      color: hsl(210, 8%, 75%);
    }
  }
`;
