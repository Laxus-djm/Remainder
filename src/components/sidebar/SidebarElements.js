import styled from "styled-components";
import Button from "@mui/material/Button";
import Filebase from "react-file-base64";

export const SideBarContainer = styled.div`
  height: 100vh;
  background: #fff;
  width: 350px;
  position: relative;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
`;

export const SideBarWrapper = styled.div`
  height: 700px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  @media screen and (max-width: 650px) {
    position: static;
    transform: translateY(0);
    padding: 20px 10px;
  }
`;

export const SideBarForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;
export const Btn = styled(Button)`
  margin-bottom: 25px !important;
`;

export const FilebaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: #000;
  margin-bottom: 50px;
  &::after {
    content: ".";
    display: inline;
    color: #1896ff;
    font-size: 3rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 2rem;
    &::after {
      content: "";
    }
  }
`;
