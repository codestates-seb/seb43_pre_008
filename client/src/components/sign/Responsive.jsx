import { useMediaQuery } from "react-responsive";
/** 2023/04/23 데스크탑 크기 - by 이진하*/
export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 981 });
  return isDesktop ? children : null;
};
/** 2023/04/23 테블릿 크기 - by 이진하*/
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 980 });
  return isTablet ? children : null;
};
/** 2023/04/23 모바일 크기 - by 이진하*/
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return isMobile ? children : null;
};
