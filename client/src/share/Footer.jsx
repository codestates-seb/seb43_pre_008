import { ReactComponent as LogoIcon } from "../img/mobileLogo.svg";
import styled from "styled-components";
/** 2023/04/19 - 풋터 전체 영역 컴포넌트 - by 이진하 */
export const FooterWrapper = styled.footer`
  padding: 12px 24px;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #24262a;
`;
/** 2023/04/19 - 풋터 블록 - by 이진하 */
export const FooterBlock = styled.div`
  width: 100%;
  max-width: 1264px;
  padding: 32px 12px 12px 12px;
`;
/** 2023/04/19 - 데스크탑와퍼 - by 이진하 */
export const DesktopWrapper = styled(FooterBlock)`
  display: flex;
  justify-content: space-around;
`;
/** 2023/04/19 - 테블릿와퍼 - by 이진하 */
export const TabletWrapper = styled(FooterBlock)`
  padding: 24px;
  .mt-24 {
    margin-top: 24px;
  }
`;
/** 2023/04/19 - 모바일와퍼 - by 이진하 */
export const MobileWrapper = styled(FooterBlock)`
  padding: 16px;
`;
/** 2023/04/19 - 플렉스박스 - by 이진하 */
export const FlexBox = styled.div`
  display: flex;
`;
/** 2023/04/19 - 저스터파이 이버늘리 - by 이진하 */
export const JustifyEvenly = styled(FlexBox)`
  justify-content: space-evenly;
  flex-grow: 1;
`;
/** 2023/04/19 - 칼럼 갭 - by 이진하 */
export const ColumnGap = styled(FlexBox)`
  column-gap: 12px;
  flex-wrap: wrap;
`;
/** 2023/04/19 - 얼라인 비트윈 - by 이진하 */
export const AlignBetween = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-between;
`;
/** 2023/04/19 - 로고 - by 이진하 */
export const Logo = styled.div`
  margin-bottom: 32px;
  svg {
    cursor: pointer;
  }
`;
/** 2023/04/19 - 컨텐츠 - by 이진하 */
export const Content = styled.div`
  padding-right: 12px;
  padding-bottom: 24px;
`;
/** 2023/04/19 - 타이틀 - by 이진하 */
export const Title = styled.h5`
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #babfc4;
`;
/** 2023/04/19 - 아이템 - by 이진하 */
export const Item = styled.li`
  padding: 4px 0;
  font-size: 13px;
  font-weight: 400;
  color: #9199a1;
  cursor: pointer;
`;
/** 2023/04/19 - 소셜 네트워크 서비스 - by 이진하 */
export const Sns = styled(Item)`
  font-size: 11px;
  &:not(:first-child) {
    margin-left: 12px;
  }
`;
/** 2023/04/19 - 태블릿 소셜 네트워크 서비스 박스 - by 이진하 */
export const TabletSnsBox = styled(FlexBox)`
  margin-bottom: 8px;
`;
/** 2023/04/19 - 라이선스 - by 이진하 */
export const License = styled.p`
  margin-bottom: 24px;
  font-size: 11px;
  font-weight: 400;
  color: #9199a1;
`;
/** 2023/04/19 - 태블릿 라이센스 - by 이진하 */
export const TabletLicense = styled(License)`
  margin-bottom: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <JustifyEvenly>
        <Content>
          <Title>Stack Overflow</Title>
          <ul>
            <Item>Questions</Item>
            <Item>Help</Item>
          </ul>
        </Content>
        <Content>
          <Title>Products</Title>
          <ul>
            <Item>Teams</Item>
            <Item>Advertising</Item>
            <Item>Collectives</Item>
            <Item>Talent</Item>
          </ul>
        </Content>
        <Content>
          <Title>Company</Title>
          <ul>
            <Item>About</Item>
            <Item>Press</Item>
            <Item>Work Here</Item>
            <Item>Legal</Item>
            <Item>Privacy PoItemcy</Item>
            <Item>Terms of Service</Item>
            <Item>Contact Us</Item>
            <Item>Cookie Settings</Item>
            <Item>Cookie PoItemcy</Item>
          </ul>
        </Content>
        <Content>
          <Title> Stack Exchange Network</Title>
          <ul>
            <Item>Technology</Item>
            <Item>Culture & recreation</Item>
            <Item>Itemfe & arts</Item>
            <Item>Science</Item>
            <Item>Professional</Item>
            <Item>Business</Item>
            <Item>API</Item>
            <Item>Data</Item>
          </ul>
        </Content>
      </JustifyEvenly>
      <AlignBetween>
        <FlexBox as={"ul"}>
          <Sns>Blog</Sns>
          <Sns>Facebook</Sns>
          <Sns>Twitter</Sns>
          <Sns>LinkedIn</Sns>
          <Sns>Instagram</Sns>
        </FlexBox>
        <License>
          Site design / logo © 2022 Stack Exchange Inc; user
          <br />
          contributions licensed under CC BY-SA.
          <br /> rev 2022.12.21.43127
        </License>
      </AlignBetween>
    </FooterWrapper>
  );
};

export default Footer;
