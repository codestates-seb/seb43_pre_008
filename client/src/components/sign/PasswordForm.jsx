import styled from "styled-components";

/** 2023/04/19 - 패스워드 박스폼 CSS - by 이진하 */
const PasswordBlock = styled.div`
  width: 100%;
  margin: 6px 0;
`;
/** 2023/04/19 - 패스워드 폰트블록폼 CSS - by 이진하 */
const LabelBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
`;
/** 2023/04/19 - 패스워드 폰트폼 CSS - by 이진하 */
const PasswordLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  align-self: flex-start;
`;
/** 2023/04/19 - 패스워드 찾기폼 CSS - by 이진하 */
const PasswordSearch = styled.button`
  font-size: 12px;
  color: #0074cc;
`;
/** 2023/04/19 - 패스워드 입력폼 CSS - by 이진하 */
const PasswordInput = styled.input.attrs({
  type: "password",
})`
  border: 1px solid hsl(210, 8%, 80%);
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
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border-color: hsl(210, 50%, 50%);
    box-shadow: 0 0 0 2px hsl(210, 50%, 50%);
  }
`;

const PasswordForm = ({ loginPassword, setLoginPassword }) => {
  return (
    <PasswordBlock>
      <div>
        <LabelBlock>
          <PasswordLabel htmlFor="passwordInput">Password</PasswordLabel>
          <PasswordSearch>Forgot password?</PasswordSearch>
        </LabelBlock>
      </div>
      <PasswordInput
        id="passwordInput"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
      />
    </PasswordBlock>
  );
};

export default PasswordForm;
