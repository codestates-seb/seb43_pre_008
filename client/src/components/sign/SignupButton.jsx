import styled from "styled-components";
import logo_github from "../../img/logo_github.svg";
import logo_google from "../../img/logo_google.svg";
import logo_facebook from "../../img/logo_facebook.svg";
/** 2023/04/23 소셜 회원가입 버튼 - by 이진하*/
const SignupButton = ({ type }) => {
  if (type === "google") {
    return (
      <GoogleSignup>
        <img src={logo_google} alt="logo_google" />
        Sign up with Google
      </GoogleSignup>
    );
  }
  if (type === "github") {
    return (
      <GitSignup>
        <img src={logo_github} alt="logo_github" />
        Sign up with GitHub
      </GitSignup>
    );
  }
  if (type === "facebook") {
    return (
      <FacebookSignup>
        <img src={logo_facebook} alt="logo_facebook" />
        Sign up with Facebook
      </FacebookSignup>
    );
  }
  if (type === "signup") {
    return <BlueButton>Sign up</BlueButton>;
  }
};
/** 2023/04/23 소셜 회원가입 버튼 - by 이진하*/
const SocialSignUpButton = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  word-spacing: normal;
  width: 100%;
  margin: 4px 0;
  padding: 10px;
  border: 1px solid #d7d9dd;
  border-radius: 5px;
  letter-spacing: normal;
  text-align: center;

  & > img {
    display: inline-block;
    width: 18px;
    height: 18px;
    text-align: center;
    letter-spacing: normal;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
/** 2023/04/23 깃 소셜 회원가입 버튼 - by 이진하*/
const GitSignup = styled(SocialSignUpButton)`
  background-color: #232629;
  color: white;
  outline: none;
`; /** 2023/04/23 구글 소셜 회원가입 버튼 - by 이진하*/
const GoogleSignup = styled(SocialSignUpButton)`
  background-color: #ffffff;
  outline: none;
`; /** 2023/04/23 페이스북 소셜 회원가입 버튼 - by 이진하*/
const FacebookSignup = styled(SocialSignUpButton)`
  background-color: #385499;
  color: white;
  outline: none;
`; /** 2023/04/23 블루 회원가입 버튼 - by 이진하*/
const BlueButton = styled.button`
  display: inline-block;
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: center;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  background-color: #0a95ff;
  padding: 10px;
  margin: 2px 0;
  color: white;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  border-radius: 3px;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;

export default SignupButton;
