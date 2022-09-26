import styled from "styled-components";


export const Container = styled.main`
/* overflow: hidden; */
 > .section-1 {
    width: 100%;
    background-color: green;
  };
`;

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 1000px) {
    height: 950px;
    flex-direction: row;
    justify-content:center;
    padding-top: 70px;
    /* padding-bottom: 100px; */
  }
`;