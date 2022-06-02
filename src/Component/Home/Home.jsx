import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddWord } from "./AddWord";

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
  h1 {
    padding: 1%;
  }
`;
const PopUpModal = styled.div`
  // border: 2px solid black;
  // position: relative;
  // margin-top: 11vh;
  // width: 50%;
  // height: 36vh;
  // margin-left: auto;
  // margin-right: auto;
`;

export const Home = () => {
  const addword = useSelector((state) => state.addword);
  console.log(addword);
  return (
    <Container>
      <Header>
        <h1>List Of Word</h1>
      </Header>
      {/* <AddWord /> */}
      <PopUpModal>{addword && <AddWord />}</PopUpModal>
    </Container>
  );
};
