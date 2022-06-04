import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addButton, NewWord } from "../../Redux/Action/action";

const PopUpModal = styled.div`
  // border: 2px solid black;
  color: black;
  box-shadow: 0px 10px 29px rgba(0, 0, 0, 0.35);
  background: white;
  position: relative;
  margin-top: 20vh;
  padding: 2%;
  width: 40vh;
  // border-radius: 13%;
  height: 25vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  p {
    // border: 2px solid;
    width: 100%;
    text-align: left;
    margin-top: auto;
    color:rgba(98, 36, 73, 255);
    font-size: smaller;
  }
  form {
    width: 100%;
    // border: 2px solid;
  }
  input {
    padding: 1% 2%;
    margin-top: 4%;
    width: 95%;
    border: none;
    border-bottom: 2px solid;
    color: rgba(98, 36, 73, 255);
    // border-bottom-color
    // height: 6%;
    // margin-top: auto;
    // margin-bottom: auto;
    &:focus {
      // width: 15vh;
      outline: none;
    }
  }
  .title {
    margin-right: auto;
    // padding: 0% 6%;
  }
  @media only screen and (max-width: 768px) {
  }
`;
const Wrapper = styled.div`
  // border: 2px solid black;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  top: 0;
  left: 0;
  z-index: 100;
  @media only screen and (max-width: 768px) {
  }
`;
const ButtonWrapper = styled.div`
  // border: 2px solid black;
  margin-top: 17%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  // border: none;
  // background: transparent;
  .button {
    padding: 3% 5%;
    button {
      color: rgba(98, 36, 73, 255);
      cursor: pointer;
      border: none;
      background: transparent;
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;

export const AddWord = () => {
  const [newWord, setNewWord] = useState("");
  const dispatch = useDispatch();
  //   const addword = useSelector((state) => state.addword);
  function onClick() {
    dispatch(addButton(false));
  }
  function handleChange(event) {
    setNewWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(NewWord(newWord)); // dispatch to trigger fetch data
    dispatch(addButton(false));
  }
  return (
    <Wrapper>
      <PopUpModal>
        <h2 className="title">Add To Dictionary</h2>
        <p>New Word</p>
        <form onSubmit={handleSubmit}>
          <br />
          <input
            type="text"
            name="Write Word"
            value={newWord}
            onChange={handleChange}
          />
          <ButtonWrapper>
            <div className="button">
              <button onClick={onClick}>CANCEL</button>
            </div>
            <div className="button">
              <button type="submit">ADD</button>
            </div>
          </ButtonWrapper>
        </form>
      </PopUpModal>
    </Wrapper>
  );
};
