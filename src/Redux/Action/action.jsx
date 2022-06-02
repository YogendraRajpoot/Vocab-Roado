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
  let key = "98679027a5e0ba9b046410e0ef8f93a8";
  let id = "a3963750";
  // let header = ;
  let endpoint = "entries";
  let language_code = "en-gb";
  fetch(
    `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${payload}`,
    {
      method: "get",
      // mode: "no-cors",
      headers: {
        "Content-type": "application/json",
        "app_id": id,
        "app_key": key,
      },
    }
  )
    // Handle success
    .then((response) => response.json()) // convert to json
    .then((res) => console.log("43", res)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors
};

// `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${payload}`,
//     {
//       method: "get",
//       // mode: "no-cors",
//       headers: {
//         // "Content-type": "application/json",
//         app_id: id,
//         app_key: key,
//       },
//     }
