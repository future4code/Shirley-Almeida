import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 8;
  left: 8;
  background-color: chartreuse;
  z-index: 2;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  > button {
    border: none;
    background: none;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  height: 24.03px;
  width: 184.74px;
  padding-left: 10px;
`;