// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  a {
    text-decoration: none;

    border-radius: 1000px;
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
`;

const MyPageMenuLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1000px;
  height: 29px;
  padding: 6px 12px 6px 12px;
  font-size: 1.2em;
  color: hsl(210, 8%, 35%);
  &:hover {
    background-color: #e3e6e8;
  }
`;

const MyPage_menu = () => {
  let location = useLocation().pathname;
  location = location.slice(8);

  return (
    <React.Fragment>
      <Container>
        <Content>
          <MyPageMenuUl>
            <Link to="/mypage/profile">
              {location === "profile" ? (
                <MyPageMenuLi className="active">Profile</MyPageMenuLi>
              ) : (
                <MyPageMenuLi>Profile</MyPageMenuLi>
              )}
            </Link>
            <MyPageMenuLi>Activity</MyPageMenuLi>
            <MyPageMenuLi>Saves</MyPageMenuLi>
            <Link to="/mypage/setting">
              {location === "setting" ||
              location === "useredit" ||
              location === "userdelete" ? (
                <MyPageMenuLi className="active">Settings</MyPageMenuLi>
              ) : (
                <MyPageMenuLi>Settings</MyPageMenuLi>
              )}
            </Link>
          </MyPageMenuUl>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default MyPage_menu;
