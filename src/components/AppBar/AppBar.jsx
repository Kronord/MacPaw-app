import React from "react";
import { Outlet } from "react-router";
import logo from "../../Images/Logo.png";
import breed from "../../Images/pet-breeds.png";
import vote from "../../Images/vote-table.png";
import searchImg from "../../Images/images-search.png";
import { GlobalWrapper, ContentWrap, NavWrap, NavTitle, NavBox, ImageBox, Link, AppWrap, Title, Text } from "./AppBar.styled";

const AppBar = () => {
  return (
    <GlobalWrapper>
        <AppWrap>
      <img src={logo} alt="logo" />
      <ContentWrap>
        <Title>Hi Intern&#x21;</Title>
        <Text>Welcome to MI 2022 Front-end test</Text>
          <NavTitle>Lets start using The Cat API</NavTitle>
        <NavWrap>
          <NavBox>
            <ImageBox value="vote">
            <img src={vote} alt="vote" />
            </ImageBox>
            <Link to="/">Voting</Link>
          </NavBox>
          <NavBox>
            <ImageBox value="breed">
            <img src={breed} alt="breed" />
            </ImageBox>
            <Link to="/">Breeds</Link>
          </NavBox>
          <NavBox>
            <ImageBox value="search">
            <img src={searchImg} alt="searchImg" />
            </ImageBox>
            <Link to="/">Gallery</Link>
          </NavBox>
        </NavWrap>
      </ContentWrap>
        </AppWrap>
        <Outlet />
    </GlobalWrapper>
  );
};

export default AppBar;
