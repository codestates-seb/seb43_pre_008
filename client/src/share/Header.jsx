import React, { useState } from 'react';
import styled from 'styled-components';

const Headerbar = styled.header`
    min-width: auto;
    box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
    width: 100%;
    z-index: 5050;
    background-color: hsl(210,8%,97.5%);
    height: 50px;
    display: flex;
    border-top: 3px solid rgb(244, 130, 37);;
    position: relative;
    align-items: center;
`
const TopbarContainer = styled.div`
    width: 115.2307692rem;;
    max-width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
`
const TopbarLogoImg = styled.img`
    width: 165px;
    height: 35px;
    margin-top: -4px;
    padding: 0px 8px;
    cursor: pointer;
`
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
`
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
    box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px ;
    &:hover {
        color: ${(props) => props.color};
        background-color: ${(props) => props.hover};;
    }
`

const TopbarInputForm = styled.form`
    width: 100%;
    max-width: 776.734px;
    padding: 0px 8px;
    position: relative;
    border: none;
`

const TopbarInput = styled.input`
    min-width: ${(props) => props.width};
    padding: 7.8px 9.1px 7.8px 32px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(186, 191, 196);
    &:focus {
        outline: none;
        box-shadow: rgb(107, 187, 247) 0px 0px 8px 1px;
    }
`
const TopbarInputSearch = styled.div`
    cursor: pointer;
    position: absolute;
    top: 6px;
    left: 15px;
    opacity: 0.5;
`

export default function Header() {


    const logoClickEvent = () => {
        console.log("홈으로 이동합니당.")
    }

    return (
        <Headerbar>
            <TopbarContainer>
                <TopbarLogoImg src='http://underdog15.s3-website.ap-northeast-2.amazonaws.com/static/media/HeaderLogo.4ed02aa320f335754b2f.JPG' alt="HeaderLogo"
                onClick={logoClickEvent} />
                <TopbarLeftBtn>About</TopbarLeftBtn>
                <TopbarLeftBtn>Products</TopbarLeftBtn>
                <TopbarLeftBtn>For Teams</TopbarLeftBtn>

                <TopbarInputForm>
                    <TopbarInputSearch>
                        <svg aria-hidden="true" class="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
                        </svg>
                    </TopbarInputSearch>
                    <TopbarInput width='100%' placeholder='Search...' />
                </TopbarInputForm>
                <TopbarRightBtn hover="rgb(189, 196, 201)" margin="10px" backgroundColor="rgb(225, 236, 244)" color="rgb(57, 115, 157)" width="57px" height="32px">Log in</TopbarRightBtn>
                <TopbarRightBtn hover="rgb(8, 127, 218)" margin="10px" backgroundColor="rgb(10, 149, 255)" color="rgb(255, 255, 255)" width="66px" height="32px">Sign up</TopbarRightBtn>
            </TopbarContainer>
        </Headerbar>
    )
}