import { ADD_Button, CARD, CARD_CLICKED, SEARCH_WORD } from "../Action/action";
const initState = {
  addword: false,
  cardclicked:false,
  searchword: "",
  card:{}
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

    default:
      return state;
  }
};
