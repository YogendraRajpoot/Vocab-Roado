import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addButton, searchWord } from "../../Redux/Action/action";
import { AddWord } from "../Home/AddWord";
// import data from "../../db.json";
const Nav = styled.nav`
  position: sticky;
  top: 0px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  // border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  color: white;
  background: #e74c3c;
  z-index: 100;
`;
const Left = styled.div`
  // border: 2px solid black;
  // margin-right: auto;
  // margin-left: auto;
  width: 50%;
  h1 {
    float: left;
    margin-left: 5%;
  }
`;
const Right = styled.div`
  // border: 2px solid black;
  // margin-right: auto;
  // margin-left: auto;
  width: 50%;
  margin-left: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const SearchBox = styled.div`
  cursor: pointer;
  border: 2px solid black;
  color: black;
  // width: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 8%;

  // margin-right: 4%;
  // margin-left: auto;
  &:hover {
    // width: 15vh;
    // outline: none;
    background: #ff7979;
  }
`;
const Input = styled.input`
  width: 12vh;
  height: 2vh;
  transition: width 1s;
  border: 0px solid white;
  background: transparent;
  cursor: pointer;
  ::placeholder {
    color: black;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: black;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: black;
  }
  &:focus {
    width: 15vh;
    outline: none;
  }
`;
const Button = styled.button`
  width: 12vh;
  height: 2vh;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  &:hover {
    // width: 15vh;
    // outline: none;
    background: #ff7979;
  }
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const [button, setButton] = useState(true);
  const [search, setSearch] = useState("");
  function onClick() {
    setButton(true);
    dispatch(addButton(button));
    console.log(button);
  }
  function onChange(event) {
    setSearch(event.target.value);
    dispatch(searchWord(search))
    console.log("119",search);
  }

  return (
    <>
      <Nav>
        <Left>
          <h1>VOCAB</h1>
        </Left>
        <Right>
          <SearchBox>
            <Button onClick={onClick}>
              <AddIcon />
              Add Word
            </Button>
          </SearchBox>
          <SearchBox>
            <SearchIcon />
            <Input placeholder="Search..." onChange={onChange} />
          </SearchBox>
        </Right>
      </Nav>
      {/* <div>{button && <AddWord />}</div>   */}
    </>
  );
};
