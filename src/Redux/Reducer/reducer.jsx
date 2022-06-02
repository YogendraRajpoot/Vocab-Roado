import { ADD_Button } from "../Action/action";

export const reducer = (store, action) => {
  switch (action.type) {
     case ADD_Button:
        return{
          ...store,
          addword:action.payload
        }

    default:
      return store;
  }
};
