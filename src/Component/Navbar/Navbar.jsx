import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

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
  float: right;
  margin-right: 5%;
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
  &:hover {
    // width: 15vh;
    // outline: none;
    background: #ff7979;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <Left>
        <h1>VOCAB</h1>
      </Left>
      <Right>
        <SearchBox>
          <AddIcon />
          <Button>Add Word</Button>
        </SearchBox>
        <SearchBox>
          <SearchIcon />
          <Input placeholder="Search..."></Input>
        </SearchBox>
      </Right>
    </Nav>
  );
};
