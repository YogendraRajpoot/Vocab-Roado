// action type
export const ADD_Button = "ADD_Button";



// action creator
// function which create action object

export const addButton = (payload) => {
  return {
    type: ADD_Button,
    payload,
  };
};
