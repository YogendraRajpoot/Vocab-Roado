import { saveData } from "../../utils/localStorage";

// action type
export const ADD_Button = "ADD_Button";
export const SEARCH_WORD = "SEARCH_WORD";

// action creator
// function which create action object

export const addButton = (payload) => {
  return {
    type: ADD_Button,
    payload,
  };
};

export const searchWord = (payload) => {
  return {
    type: SEARCH_WORD,
    payload,
  };
};
export const NewWord = (payload) => (dispatch) => {
  fetch(`http://localhost:9001/${payload}`, { method: "GET", mode: "cors" })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.id,data.results);
      dispatch(WordList(data));
    });
};
export const WordList = (payload) => (dispatch) => {
  fetch(`http://localhost:9001/vocab`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log("30", res);
      dispatch(GetWordList());      
    })
    .catch((err) => console.log(err));
};
export const GetWordList = (payload) => (dispatch) => {
  fetch(`http://localhost:9001/vocab`)
    .then((res) => res.json())
    .then((res) => {
      saveData("wordList", res)
      // console.log("17", res);      
    })
    .catch((err) => console.log(err));
};
