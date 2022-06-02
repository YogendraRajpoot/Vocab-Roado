import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addButton } from "../../Redux/Action/action";
const axios = require("axios").default;
var cors = require("cors");

const PopUpModal = styled.div`
  // border: 2px solid black;
  box-shadow: 0px 10px 29px rgba(0, 0, 0, 0.35);
  background: white;
  position: relative;
  margin-top: 20vh;
  padding: 2%;
  width: 30%;
  border-radius: 13%;
  height: 40vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  input {
    padding: 1% 2%;
    margin-top: 4%;
    // width: 19%;
    // height: 6%;
    // margin-top: auto;
    // margin-bottom: auto;
  }
`;
const Wrapper = styled.div`
  // border: 2px solid black;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(200, 200, 200);
  top: 0;
  left: 0;
  z-index: 50;
`;
const ButtonWrapper = styled.div`
  // border: 2px solid black;

  margin-top: 17%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 4%;
  button {
    padding: 3% 5%;
  }
  input {
    padding: 3% 5%;
  }
`;

export const AddWord = () => {
  let key = "98679027a5e0ba9b046410e0ef8f93a8";
  let id = "a3963750";
  let endpoint = "entries";
  let language_code = "en-gb";
  const [newWord, setNewWord] = useState("");
  const dispatch = useDispatch();

  //   const addword = useSelector((state) => state.addword);
  function onClick() {
    dispatch(addButton(false));
  }
  function handleChange(event) {
    setNewWord(event.target.value);
    // let newword = setNewWord(event.target.value);
    // axios({
    //   method: "get",
    //   url: `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${newword}`,
    //   mode: "no-cors",
    //   headers: { app_key: key, app_id: id },
    // }).then(function (res) {
    //   console.log(res.data);
    // });
    // .then(function (response) {
    //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    // });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // GET Request.
    fetch(
      `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${newWord}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "app_key": key,
          "app_id": id,
        },
      }
    )
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((json) => console.log(json)) //print data to console
      .catch((err) => console.log("Request Failed", err)); // Catch errors

    // axios({
    // method: "get",
    //   url: `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${newWord}`,
    // mode: "no-cors",
    //   mode: "cors",
    //   headers: {  "app_key": key, "app_id": id },
    // }).then(function (res) {
    //   console.log(res.data);
    // });
  }
  return (
    <Wrapper>
      <PopUpModal>
        <h2>Add Word To Vocab</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Write Word"
            value={newWord}
            onChange={handleChange}
          />
          <ButtonWrapper>
            <div>
              <button onClick={onClick}>Cancle</button>
            </div>
            <div style={{ height: "95%", marginTop: "-1%" }}>
              <input type="submit" />
            </div>
          </ButtonWrapper>
        </form>
      </PopUpModal>
    </Wrapper>
  );
};
