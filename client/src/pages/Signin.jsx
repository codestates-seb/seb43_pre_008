import styled from "styled-components";
import logo_stack from "../img/logo_stack.svg";
import copyButton from "../img/copyButton.svg";
import { Link } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logowrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  cursor: pointer;
  img {
    width: 32px;
    height: 37px;
  }
`;

const RedirectionDiv1 = styled.div`
  padding: 16px;
  margin-bottom: 24px;
  font-size: 13px;
  text-align: center;
`;
const RedirectionLink = styled(Link).attrs()`
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
  &:hover,
  &:focus,
  &:active {
    color: #0074cc;
  }
`;
const RedirectionDiv2 = styled.div`
  margin-top: 12px;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  vertical-align: baseline;
  > :last-child {
    text-align: center;
    color: #0074cc;
    text-decoration: none;
    font-size: 13px;
    &:hover,
    &:focus,
    &:active {
      color: #0074cc;
    }
  }
`;

const Signin = () => {
  return (
    <Page>
      <LoginWrapper>
        <Logowrapper>
          <img src={logo_stack} alt="logo_stack" />
        </Logowrapper>
        <RedirectionDiv1>
          Don't have an account?{" "}
          <RedirectionLink to="../users/signup">Sign up</RedirectionLink>
          <RedirectionDiv2>
            Are you an empolyer?{" "}
            <a href="/">
              Sign up on Talent
              <img src={copyButton} alt="" />
            </a>
          </RedirectionDiv2>
        </RedirectionDiv1>
      </LoginWrapper>
    </Page>
  );
};

export default Signin;
