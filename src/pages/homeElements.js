import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 90%;
  margin: 0 auto;
  overflow-x: hidden;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

