import { ADD_Button, SEARCH_WORD } from "../Action/action";

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_Button:
      return {
        ...store,
        addword: action.payload,
      };
    case SEARCH_WORD:
      return {
        ...store,
        searchword: action.payload,
      };

    default:
      return store;
  }
};
