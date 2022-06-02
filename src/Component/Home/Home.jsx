import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddWord } from "./AddWord";
import data from "../../db.json";

const Container = styled.div`
  // margin-top: 2%;
  // background: #efefef;
  // background: lightcoral;
  // background: rgba(200, 200, 200);
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
  // position: fixed;
  // height: 100%;
  // width: 100%;
  // background: grey;
  // top: 0;
  // left: 0;
  // z-index: 50;
`;
const Div = styled.div`
  border: 2px solid black;
  margin-top: 2%;
  position: relative;
  height: 80vh;
  overflow: scroll;
  background: #efefef;
`;
const Card = styled.div`
  border: 2px solid black;
  margin-top: 1%;
  width: 50%;
  height: 10vh;
  margin-left: auto;
  margin-right: auto;
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
      <PopUpModal>{addword && <AddWord />}</PopUpModal>
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
            return <Card key={d.id}>{d.first_name}</Card>;
          })}
      </Div>
    </Container>
  );
};
