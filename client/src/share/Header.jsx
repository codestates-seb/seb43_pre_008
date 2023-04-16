import { useState } from "react";
import styled from "styled-components";

const Headerbar = styled.header`
  min-width: auto;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100%;
  z-index: 5050;
  background-color: hsl(210, 8%, 97.5%);
  height: 50px;
  display: flex;
  border-top: 3px solid rgb(244, 130, 37);
  position: relative;
  align-items: center;
`;
const TopbarContainer = styled.div`
  width: 115.2307692rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;
const TopbarLogoImg = styled.img`
  width: 165px;
  height: 35px;
  margin-top: -4px;
  padding: 0px 8px;
  cursor: pointer;
`;
const TopbarProfileImg = styled.img`
  margin-left: 15px;
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
`;
const TopbarSVG = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const TopbarLeftBtn = styled.button`
  position: relative;
  cursor: pointer;
  font-size: 13px;
  color: rgb(82, 89, 96);
  padding: 6px 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 1000px;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    color: #1f1e1e;
    background-color: #ede8e8;
  }
`;
const TopbarRightBtn = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid rgb(204, 204, 204);
  padding: 0px 10.4px;
  border-radius: 3px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.margin};
  cursor: pointer;
  font-size: 13px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px;
  &:hover {
    color: ${(props) => props.color};
    background-color: ${(props) => props.hover};
  }
`;

const TopbarInputForm = styled.form`
  width: 100%;
  max-width: 776.734px;
  padding: 0px 8px;
  position: relative;
  border: none;
`;

const TopbarInput = styled.input`
  width: ${(props) => props.width};
  padding: 7.8px 9.1px 7.8px 32px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  &:focus {
    outline: none;
    box-shadow: rgb(107, 187, 247) 0px 0px 8px 1px;
  }
`;
const TopbarInputSearch = styled.div`
  cursor: pointer;
  position: absolute;
  top: 6px;
  left: 15px;
  opacity: 0.5;
`;
const TopbarInputSearchHint = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
  top: 43px;
  left: 8px;
  width: 98%;
  max-width: 776.734px;
  min-width: 420px;
  z-index: 2000;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px, rgba(0, 0, 0, 0.06) 0px 2px 6px,
    rgba(0, 0, 0, 0.09) 0px 3px 8px;
  > div {
    flex-basis: 50%;
  }
`;

const HintContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  -webkit-box-align: center;
  align-items: center;
  margin: 12px 12px;
`;

const HintlistHead = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: hsl(210, 8%, 5%);
`;

const Hintlist = styled.span`
  font-size: 14px;
  color: hsl(210, 8%, 45%);
`;

export default function Header() {
  const [isSigngin, setIsSignin] = useState(false);
  const [isSigngup, setIsSignup] = useState(false);
  const [hintModal, setHintModalp] = useState(false);

  /** 2023/04/16 - 로고클릭 시 홈으로 리다이렉트 시켜주는 함수 - by 박수범 */
  const logoClickEvent = () => {
    console.log("홈으로 이동합니당.");
  };

  /** 2023/04/16 - signin 버튼 클릭 시 signin 페이지로 이동시켜주는 함수 - by 박수범 */
  const signinBtnHandler = () => {
    console.log(".signin 페이지로 이동합니다.");
    setIsSignin(!isSigngin);
  };

  /** 2023/04/16 - signup 버튼 클릭 시 signup 페이지로 이동시켜주는 함수 - by 박수범 */
  const signupBtnHandler = () => {
    console.log(".signup 페이지로 이동합니다.");
    setIsSignup(!isSigngup);
  };

  /** 2023/04/16 - logout 버튼 클릭 시 main(question) 페이지로 이동시켜주는 함수 - by 박수범 */
  const logoutBtnHandler = () => {
    console.log(".signup 페이지로 이동합니다.");
    setIsSignin(!isSigngin);
  };

  /** 2023/04/16 - input창 클릭 시 search hint 모달창 띄워주는 함수 - by 박수범 */
  const searchHintHandler = () => {
    console.log("검색 힌트 모달창 실행.");
    setHintModalp(!hintModal);
  };

  return (
    <Headerbar>
      <TopbarContainer>
        <TopbarLogoImg
          src="http://underdog15.s3-website.ap-northeast-2.amazonaws.com/static/media/HeaderLogo.4ed02aa320f335754b2f.JPG"
          alt="HeaderLogo"
          onClick={logoClickEvent}
        />
        {!isSigngin ? <TopbarLeftBtn>About</TopbarLeftBtn> : null}
        <TopbarLeftBtn>Products</TopbarLeftBtn>
        {!isSigngin ? <TopbarLeftBtn>For Teams</TopbarLeftBtn> : null}

        <TopbarInputForm>
          <TopbarInputSearch>
            <TopbarSVG aria-hidden="true" viewBox="0 0 18 18">
              <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
            </TopbarSVG>
          </TopbarInputSearch>
          <TopbarInput
            width="100%"
            placeholder="Search..."
            onClick={searchHintHandler}
          />
          {hintModal ? (
            <TopbarInputSearchHint>
              <div>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>[tag]</HintlistHead> search within a tag
                  </Hintlist>
                </HintContainer>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>user:1234</HintlistHead> search by author
                  </Hintlist>
                </HintContainer>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>"words here" </HintlistHead> exact phrase
                  </Hintlist>
                </HintContainer>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>collective:"Name"</HintlistHead> collective
                    content
                  </Hintlist>
                </HintContainer>
              </div>
              <div>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>answers:0</HintlistHead> unanswered questions
                  </Hintlist>
                </HintContainer>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>score:3</HintlistHead> posts with a 3+ score
                  </Hintlist>
                </HintContainer>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>is:question </HintlistHead> type of post
                  </Hintlist>
                </HintContainer>
                <HintContainer>
                  <Hintlist>
                    <HintlistHead>isaccepted:yes</HintlistHead> search within
                    status
                  </Hintlist>
                </HintContainer>
              </div>
            </TopbarInputSearchHint>
          ) : null}
        </TopbarInputForm>

        {!isSigngin ? (
          <TopbarRightBtn
            hover="rgb(189, 196, 201)"
            margin="10px"
            backgroundColor="rgb(225, 236, 244)"
            color="rgb(57, 115, 157)"
            width="57px"
            height="32px"
            onClick={signinBtnHandler}
          >
            Log in
          </TopbarRightBtn>
        ) : (
          <TopbarProfileImg src="https://www.gravatar.com/avatar/b1bf695e61fd622161b5dbd20b037d10?s=48&d=identicon&r=PG&f=y&so-version=2" />
        )}

        {!isSigngin ? (
          <TopbarRightBtn
            hover="rgb(8, 127, 218)"
            margin="10px"
            backgroundColor="rgb(10, 149, 255)"
            color="rgb(255, 255, 255)"
            width="66px"
            height="32px"
            onClick={signupBtnHandler}
          >
            Sign up
          </TopbarRightBtn>
        ) : (
          <TopbarRightBtn
            hover="rgb(248, 53, 62)"
            margin="10px"
            backgroundColor="rgb(248, 82, 90)"
            color="rgb(255, 255, 255)"
            width="66px"
            height="32px"
            onClick={logoutBtnHandler}
          >
            Log out
          </TopbarRightBtn>
        )}
      </TopbarContainer>
    </Headerbar>
  );
}
