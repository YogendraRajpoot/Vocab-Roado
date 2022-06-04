import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addButton, searchWord } from "../../Redux/Action/action";
import CloseIcon from "@mui/icons-material/Close";
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
  @media only screen and (max-width: 800px) {
    position: sticky;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
    color: white;
    background: rgba(98, 36, 73, 255);
    z-index: 0;
    padding: 0%;
    // top: 1%;
    // width: 80%;
    // border: 2px solid black;
    // border-radius: 50px;
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
  width: 80%;
  height: 90%;
  h1 {
    font-weight: 500;
    float: left;
    padding: 2vh 0vh 0vh 3vh;
  }
  .leftInput {
    width: 100%;
    height: 90%;
    padding: 0% 0% 0% 3vh;
    border: 0px solid white;
    background: transparent;
    cursor: pointer;
    ::placeholder {
      color: grey;
      font-size: medium;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: white;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: white;
    }
    &:focus {
       outline: none;
    }
  }
  @media only screen and (max-width: 800px) {
    // border: 2px solid black;
    // margin-right: auto;
    // margin-left: auto;
    width: 80%;
    height: 90%;
    h1 {
      font-weight: 500;
      float: left;
      padding: 3%;
    }
    .leftInput {
      width: 100%;
      height: 90%;
      padding: 1%;
      border: 0px solid white;
      background: transparent;
      cursor: pointer;
    }
  }
`;

const Right = styled.div`
  // border: 2px solid black;
  // margin-right: auto;
  // margin-left: auto;
  // margin-left: 45%;
  width: 20%;
  height: 90%;
  .searchIcon {
    cursor: pointer;
    height: 50%;
    width: 35%;
    padding: 2vh 0vh 0vh 0vh;
    float: right;
  }
  .closeIcon {
    cursor: pointer;
    height: 35%;
    width: 35%;
    padding: 2vh 0vh 0vh 0vh;
    float: right;
  }
  @media only screen and (max-width: 800px) {
    // border: 2px solid black;
    // margin-right: auto;
    // margin-left: auto;
    // margin-left: 45%;
    width: 20%;
    height: 90%;
    .searchIcon {
      cursor: pointer;
      height: 50%;
      width: 50%;
      padding: 10%;
      float: right;
    }
    .closeIcon {
      cursor: pointer;
      height: 35%;
      width: 35%;
      padding: 2vh 0vh;
      float: right;
    }
  }
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
  @media only screen and (max-width: 800px) {
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
  }
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchButton, setSearchButton] = useState(false);

  function onClick() {
    dispatch(addButton(true));
  }
  function onChange(event) {
    setSearch(event.target.value);
    dispatch(searchWord(search));
    console.log("119", search);
  }
  function searchButtonClick() {
    setSearchButton(!searchButton);
    console.log(searchButton);
    // document.getElementById("inputText").focus();
  }

  return (
    <>
      <Nav>
        {searchButton ? (
          <>
            <Left>
              <h1>Vocab</h1>
            </Left>
            <Right>
              <SearchIcon className="searchIcon" onClick={searchButtonClick} />
            </Right>
          </>
        ) : (
          <>
            <Left>
              <input
                className="leftInput"
                autoFocus
                placeholder="Search"
                id="inputText"
                onChange={onChange}
              />
            </Left>
            <Right>
              <CloseIcon className="closeIcon" onClick={searchButtonClick} />
            </Right>
          </>
        )}
      </Nav>
      <SearchBox1>
        <AddIcon onClick={onClick} className="addicon" />
      </SearchBox1>
    </>
  );
};
