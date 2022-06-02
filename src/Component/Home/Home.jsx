import React from "react";
import styled from "styled-components";

const Container = styled.div`
  // margin-top: 2%;
  background: #efefef;
  min-height: 191vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  position: sticky;
  top: 10vh;
  background: #efefef;
  // height: 6vh;
  width: 100%;
  border: 2px solid black;
  h1{
    padding:1%;
  }
`;

export const Home = () => {
  return (
    <Container>
      <Header>
        <h1>List Of Word</h1>
      </Header>
    </Container>
  );
};
