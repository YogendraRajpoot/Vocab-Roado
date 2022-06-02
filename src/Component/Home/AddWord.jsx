import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addButton } from "../../Redux/Action/action";

const PopUpModal = styled.div`
  border: 2px solid black;
  position: relative;
  margin-top: 11vh;
  width: 50%;
  height: 36vh;
  margin-left: auto;
  margin-right: auto;
`;

export const AddWord = () => {
  const dispatch = useDispatch();
//   const addword = useSelector((state) => state.addword);
  function onClick() {
    dispatch(addButton(false));
  }
  return (
    <PopUpModal>
      <h2>Add Word To Vocab</h2>
      <input placeholder="Write Word" />
      <button onClick={onClick}>Cancle</button>
      <button>Add</button>
    </PopUpModal>
  );
};
