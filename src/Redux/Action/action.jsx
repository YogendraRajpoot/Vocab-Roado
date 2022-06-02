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
