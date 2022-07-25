import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 44px;
  line-height: 58px;
`;

export const Text = styled.p`
  font-weight: 400;
  margin: 0;
  font-size: 20px;
  line-height: 29px;
  color: #8c8c8c;
`;

export const AppWrap = styled.section`
  position: sticky;
  top: 30px;
  width: 446px;
  height: 530px;
  margin-top: 30px;
  margin-left: 147px;
`;

export const ContentWrap = styled.div`
  margin-top: 80px;
`;

export const NavTitle = styled.h3`
  margin-top: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 190px;
  background-color: ${({ value }) => {
    switch (value) {
      case "vote":
        return "#B4B7FF";
      case "breed":
        return "#97EAB9";
      case "search":
        return "#FFD280";
      default:
    }
  }};
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    ${ImageBox} {
      border-color: rgba(255, 255, 255);
    }
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 138px;
  height: 36px;
  color: #ff868e;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    background-color: #fbe0dc;
  }

  &:active {
    background-color: #ff868e;
    color: #fff;
    ${ImageBox} {
      border-color: #fbe0dc;
    }
  }
`;
