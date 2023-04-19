// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const MyPageMenuUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 2px 0px 2px 0px;
  margin: 0px;
  list-style: none;
`;

const MyPageMenuLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1000px;
  height: 29px;

  a {
    text-decoration: none;
    color: hsl(210, 8%, 35%);
    border-radius: 1000px;
    font-size: 1.2em;
    padding: 6px 12px 6px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background-color: #f48225;
    border-radius: 1000px;
    height: 29px;
    padding: 6px 12px 6px 12px;
    color: white;
    font-weight: 600;
    &:hover {
      background-color: #af6122;
    }
  }
  &:hover {
    background-color: #e3e6e8;
  }
`;

const MyPage_menu = () => {
  const [activeMenu, setActiveMenu] = useState("Profile");

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  return (
    <React.Fragment>
      <Container>
        <Content>
          <MyPageMenuUl>
            <MyPageMenuLi>
              <Link
                to="/mypage/profile"
                className={activeMenu === "Profile" ? "active" : ""}
                onClick={() => handleClick("")}
              >
                Profile
              </Link>
            </MyPageMenuLi>

            <MyPageMenuLi>
              <Link
                to="/mypage/activity"
                className={activeMenu === "Activity" ? "active" : ""}
                onClick={() => handleClick("")}
              >
                Activity
              </Link>
            </MyPageMenuLi>
            <MyPageMenuLi>
              <Link
                to="/mypage/save"
                className={activeMenu === "Saves" ? "active" : ""}
                onClick={() => handleClick("")}
              >
                Saves
              </Link>
            </MyPageMenuLi>
            <MyPageMenuLi>
              <Link
                to="/mypage/setting"
                className={
                  activeMenu === "Activity" ||
                  activeMenu === "useredit" ||
                  activeMenu === "userdelete"
                    ? "active"
                    : ""
                }
                onClick={() => handleClick("")}
              >
                Settings
              </Link>
            </MyPageMenuLi>
          </MyPageMenuUl>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default MyPage_menu;
