import styled from "styled-components";
import SignupButton from "./SignupButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/** 2023/04/23 닉네임 입력 버튼 - by 이진하*/
const DisplayNameInput = styled.input.attrs({
  type: "text",
})`
  border: 1px solid hsl(210, 8%, 85%);
  display: flex;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;

  &:focus {
    outline: none;
    border-color: hsl(210, 50%, 50%);
    box-shadow: 0 0 0 2px hsl(210, 50%, 50%);
  }
`;
/** 2023/04/23 닉네임 라벨 - by 이진하*/
const DisplayNameLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
`;
/** 2023/04/23 이메일 입력 버튼 - by 이진하*/
const EmailInput = styled.input.attrs({
  type: "text",
})`
  border: 1px solid hsl(210, 8%, 85%);
  display: flex;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;

  &:focus {
    outline: none;
    border-color: hsl(210, 50%, 50%);
    box-shadow: 0 0 0 2px hsl(210, 50%, 50%);
  }
`;
/** 2023/04/23 이메일 라벨 - by 이진하*/
const EmailLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
`;
/** 2023/04/23 패스워드 라벨 - by 이진하*/
const PasswordLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
`;
const PasswordInput = styled.input.attrs({
  type: "password",
})`
  border: 1px solid hsl(210, 8%, 85%);
  display: flex;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: hsl(210, 50%, 50%);
    box-shadow: 0 0 0 2px hsl(210, 50%, 50%);
  }
`;
/** 2023/04/23 회원가입 폼 - by 이진하*/
const Sign = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
/** 2023/04/23 상세설명 - by 이진하*/
const Msgdiv = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;
/** 2023/04/23 링크 - by 이진하*/
const LinkSpan = styled.span`
  color: #0074ce;
  cursor: pointer;
`;
/** 2023/04/23 컨텐츠 - by 이진하*/
const ContentDiv = styled.div`
  margin: 6px 0;
  width: 100%;
`;

const SignupForm = ({
  displayName,
  setDisplayName,
  signupEmail,
  setSignupEmail,
  signupPassword,
  setSignupPassword,
}) => {
  const navigate = useNavigate();
  const handleSignupButton = (e) => {
    e.preventDefault();

    const reqbody = {
      email: signupEmail,
      password: signupPassword,
      name: displayName,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: "",
    };

    axios
      .post("http://localhost:4000/api/signup", JSON.stringify(reqbody), {
        headers,
      })
      .then((res) => {
        console.error(res);
        window.alert("회원가입 성공 !");
        navigate("../Signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Sign onSubmit={(e) => handleSignupButton(e)}>
      <ContentDiv>
        <div>
          <DisplayNameLabel htmlFor="displayNameInput">
            Display name
          </DisplayNameLabel>
        </div>
        <DisplayNameInput
          id="displayNameInput"
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </ContentDiv>
      <ContentDiv>
        <div>
          <EmailLabel>Email</EmailLabel>
        </div>
        <EmailInput onChange={(e) => setSignupEmail(e.target.value)} required />
      </ContentDiv>
      <ContentDiv>
        <div>
          <PasswordLabel>Password</PasswordLabel>
        </div>
        <PasswordInput
          onChange={(e) => setSignupPassword(e.target.value)}
          required
        />
      </ContentDiv>
      <SignupButton type={"signup"} />
      <Msgdiv>
        By clicking “Sign up”, you agree to our
        <LinkSpan>
          {" "}
          terms of
          <br /> service, privacy policy
        </LinkSpan>
        and <LinkSpan>cookie policy</LinkSpan>
      </Msgdiv>
    </Sign>
  );
};

export default SignupForm;
