import {
  ADD_Button,
  CARD,
  CARD_CLICKED,
  IS_LOADING,
  SEARCH_WORD,
  WORD_LIST,
} from "../Action/action";
const initState = {
  addword: false,
  cardclicked: false,
  searchword: "",
  card: {},
  wordlist: {},
  isloading: true,
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_Button:
      return {
        ...state,
        addword: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };
    case SEARCH_WORD:
      return {
        ...state,
        searchword: action.payload,
      };
    case CARD:
      return {
        ...state,
        card: action.payload,
      };
    case CARD_CLICKED:
      return {
        ...state,
        cardclicked: action.payload,
      };
    case WORD_LIST:
      return {
        ...state,
        wordlist: action.payload,
      };

    default:
      return state;
  }
};
