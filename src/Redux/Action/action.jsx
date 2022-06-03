import { saveData } from "../../utils/localStorage";

// action type
export const ADD_Button = "ADD_Button";
export const SEARCH_WORD = "SEARCH_WORD";
export const CARD_CLICKED = "CARD_CLICKED";
export const CARD = "CARD";
export const WORD_LIST = "WORD_LIST";

// action creator
// function which create action object

export const addButton = (payload) => {
  return {
    type: ADD_Button,
    payload,
  };
};
export const CarD = (payload) => {
  return {
    type: CARD,
    payload,
  };
};
export const cardClicked = (payload) => {
  return {
    type: CARD_CLICKED,
    payload,
  };
};

export const searchWord = (payload) => {
  return {
    type: SEARCH_WORD,
    payload,
  };
};
export const wordList = (payload) => {
  return {
    type: WORD_LIST,
    payload,
  };
};
export const NewWord = (payload) => (dispatch) => {
  fetch(`https://vocab-roado-backend.herokuapp.com/${payload}`, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.id,data.results);
      dispatch(WordList(data));
    });
};
export const WordList = (payload) => (dispatch) => {
  fetch(`https://vocab-roado-backend.herokuapp.com/vocab`, {
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
  fetch(`https://vocab-roado-backend.herokuapp.com/vocab`)
    .then((res) => res.json())
    .then((res) => {
      saveData("wordList", res);
      dispatch(wordList(res));
      // console.log("17", res);
    })
    .catch((err) => console.log(err));
};
