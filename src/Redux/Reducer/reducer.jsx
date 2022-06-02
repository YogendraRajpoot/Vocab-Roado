import { ADD_Button, SEARCH_WORD } from "../Action/action";
const initState = {
  addword: false,
  searchword: "",
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_Button:
      return {
        ...state,
        addword: action.payload,
      };
    case SEARCH_WORD:
      return {
        ...state,
        searchword: action.payload,
      };

    default:
      return state;
  }
};
