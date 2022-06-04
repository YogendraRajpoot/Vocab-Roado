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
  top: 1%;
  border-radius: 50px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  color: white;
  background: rgba(98, 36, 73, 255);
  z-index: 0;
  padding: 0%;
  @media only screen and (max-width: 768px) {
    border: none;
    width: 100%;
    border-radius: 0px;
    top: 0;
  }
`;
const Left = styled.div`
  // border: 2px solid black;
  // margin-right: auto;
  // margin-left: auto;
  width: 50%;
  h1 {
    float: left;
    margin-left: 8%;
    font-weight:500;
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
const SearchBox1 = styled.div`
  cursor: pointer;

  // border: 2px solid black;
  // border-radius: 50px;
  // position: fixed;
  // bottom: 6%;
  // width: 10vh;
  // height: 10vh;
  // color: white;
  .addicon {
    position: fixed;
    bottom: 6%;
    color: white;
    width: 4vh;
    padding: 3vh;
    height: 4vh;
    border: 2px solid black;
    background: rgba(98, 36, 73, 255);
    border-radius: 50px;
    z-index: 60;
    right: 10vh;
  }
  // &:hover {
  //   // width: 15vh;
  //   // outline: none;
  //   background: #ff7979;
  // }
  @media only screen and (max-width: 800px) {
    // display: none;
    // border: none;
    // opacity: 0;
  }
`;
const SearchBox2 = styled.div`
  cursor: pointer;
  // border: 2px solid black;
  color: white;
  // width: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 15px;

  // margin-right: 4%;
  // margin-left: auto;
  // &:hover {
  //   // width: 15vh;
  //   // outline: none;
  //   background: #ff7979;
  // }
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
  // width: 12vh;
  height: 2vh;
  background: transparent;
  border: none;
  cursor: pointer;
  // display: flex;
  // flex-direction: row;
  align-items: center;
  // justify-content: center;
  // flex-wrap: nowrap;

  // &:hover {
  //   // width: 15vh;
  //   // outline: none;
  //   background: #ff7979;
  // }
  // @media only screen and (max-width: 800px) {
  //   display: none;
  //   border: none;
  //   opacity: 0;
  // }
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  function onClick() {
    dispatch(addButton(true));
  }
  function onChange(event) {
    setSearch(event.target.value);
    dispatch(searchWord(search));
    console.log("119", search);
  }

  return (
    <>
      <Nav>
        <Left>
          <h1>Vocab</h1>
        </Left>
        <Right>
          <SearchBox2>
            <Input placeholder="" onChange={onChange} />
            <SearchIcon />
          </SearchBox2>
        </Right>
      </Nav>
      <SearchBox1>
        {/* <Button onClick={onClick}>
            </Button> */}
        <AddIcon onClick={onClick} className="addicon" />
        {/* <p>Add Word</p> */}
      </SearchBox1>
    </>
  );
};
