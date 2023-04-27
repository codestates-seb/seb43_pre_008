import styled from "styled-components";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-light.css";
/** 2023/4/21 quill 에디터 감싸는 컨테이너 */
export const EditorContainer = styled.div`
  width: 100%;
  & + small {
    margin-top: 6px;
    display: none;
    font-size: 12px;
    color: #de4f54;
  }
  &.error {
    box-shadow: 0 0 0 4px rgba(222, 79, 84, 0.2);
    border-radius: 3px;
    & + small {
      display: block;
    }
    .ql-toolbar.ql-snow {
      border-color: #de4f54;
    }
    .ql-container.ql-snow {
      border-color: #de4f54;
    }
  }
  .quill {
    height: 232px;
    border: 3px;
    .ql-toolbar {
      border-radius: 3px 3px 0 0;
      text-align: left;
    }
    button.ql-code-block {
      background-color: #444;
      height: 80%;
      border-radius: 2px;
      &:hover {
        background-color: #292929;
        polyline,
        line {
          stroke: #fff;
        }
      }
      polyline,
      line {
        stroke: #fff;
      }
      &.ql-active {
        polyline,
        line {
          stroke: #3e9dfc;
        }
        &:hover {
          background-color: #292929;
          polyline,
          line {
            stroke: #3e9dfc;
          }
        }
      }
    }
    .ql-container {
      height: 191.06px;
      border-radius: 0 0 3px 3px;
      .ql-editor pre.ql-syntax {
        background-color: #f0f0f0 !important;
        color: unset !important;
      }
    }
  }
`;

/** hljs는 코드 부분 스타일 적용 */
hljs.configure({
  languages: ["javascript", "ruby", "python", "java", "cpp", "kotlin", "sql"],
});

/** 2023/4/21 quill 툴바 지정 */
export const editorModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic"], // toggled buttons
    ["code", "code-block"],
    ["link", ("underline", "strike", "blockquote"), "image"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
};
