import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddWord } from "./AddWord";
import data from "../../db.json";

const Container = styled.div`
  // margin-top: 2%;
  background: #efefef;
  min-height: 91vh;
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
const Div = styled.div`
  border: 2px solid black;
  margin-top: 2%;
  position: relative;
  height: 80vh;
  // overflowx: "scroll";
  // overflowy: "hidden";
  overflow: hidden;
  scroll-behavior: smooth;
`;
export const Home = () => {
  const searchItem = useSelector((state) => state.searchword);
  const addword = useSelector((state) => state.addword);
  const name = data.name;
  console.log("108", name);
  console.log(addword);
  return (
    <Container>
      <Header>
        <h1>List Of Word</h1>
      </Header>
      <Div>
        {name
          .filter((d) => {
            if (searchItem === "") {
              return d;
            } else if (
              d.first_name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return d;
            }
          })
          .map((d) => {
            return <div key={d.id}>{d.first_name}</div>;
          })}
      </Div>
      {/* <AddWord /> */}
      <PopUpModal>{addword && <AddWord />}</PopUpModal>
    </Container>
  );
};
