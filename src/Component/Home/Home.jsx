import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AddWord } from "./AddWord";
import {
  CarD,
  cardClicked,
  GetWordList,
  wordList,
} from "../../Redux/Action/action";
import { loadData, saveData } from "../../utils/localStorage";
import { DefineWord } from "./DefineWord";

const Container = styled.div`
  // margin-top: 2%;
  // background: #efefef;
  // background: lightcoral;
  // background: rgba(200, 200, 200);
  min-height: 91vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  position: sticky;
  top: 10vh;
  box-shadow: 0px 10px 29px rgb(0 0 0 / 35%);
  border-radius: 50px 50px;
  background: #efefef;
  // height: 6vh;
  width: 100%;
  border: 2px solid black;
  h1 {
    padding: 1%;
  }
`;
const PopUpModal = styled.div`
  // border: 2px solid black;
  // position: fixed;
  // height: 100%;
  // width: 100%;
  // background: grey;
  // top: 0;
  // left: 0;
  // z-index: 50;
`;
const Div = styled.div`
  border: 2px solid black;
  box-shadow: 0px 10px 29px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  margin-top: 2%;
  position: relative;
  height: 80vh;
  overflow: scroll;
  background: #efefef;
`;
const Card = styled.div`
  cursor: pointer;
  // border: 2px solid black;
  // margin-top: 1%;
  padding: 1% 2%;
  width: 80%;
  text-align: left;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;
export const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.searchword);
  const addword = useSelector((state) => state.addword);
  const cardclicked = useSelector((state) => state.cardclicked);

  useEffect(() => {
    getdata();
  }, []);
  function getdata() {
    setIsLoading(true);
    return fetch("https://vocab-roado-backend.herokuapp.com/vocab")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  return isLoading ? (
    <div style={{ width: "100%" }}>
      <img
        src="https://cdn.dribbble.com/users/436306/screenshots/6026974/foodline.gif"
        style={{ marginLeft: "15%", width: "70%", height: "40vw" }}
      />
      {/* <img
        style={{ marginLeft:"35%" }}
        src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
      />
      <img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" style={{marginLeft:"35%"}}/> */}
    </div>
  ) : isError ? (
    <div>Something went wrong</div>
  ) : (
    <Container>
      <Header>
        <h1>List Of Word</h1>
      </Header>
      <br />
      <PopUpModal>{addword && <AddWord />}</PopUpModal>
      <PopUpModal>{cardclicked && <DefineWord />}</PopUpModal>
      <Div>
        {data
          .filter((d) => {
            if (searchItem === "") {
              return d;
            } else if (d.id.toLowerCase().includes(searchItem.toLowerCase())) {
              return d;
            }
          })
          .map((d) => {
            console.log("107", d);
            return (
              <Card
                key={d.id}
                onClick={() => {
                  dispatch(cardClicked(true));
                  dispatch(CarD(d));
                }}
              >
                <br />
                <div style={{ fontWeight: "1000", fontSize: "larger" }}>
                  {d.id.toUpperCase()}
                </div>
                <div>
                  {d.results[0].lexicalEntries.map((i) => {
                    return (
                      <div key={i.id}>
                        <div style={{ padding: "1% 0%" }}>
                          ({i.lexicalCategory.text}){" "}
                          {i.entries[0].senses[0].definitions[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />
                <hr />
              </Card>
            );
          })}
      </Div>
    </Container>
  );
};

// <div>
//                           {i.entries[0].senses.map((j) => {
//                             // if (j.examples!== undefined) {
//                             //   console.log("98", j.examples[0].text);
//                             // }
//                             return (
//                               <div key={j.id}>
//                                 <div>{j.definitions[0]}</div>
//                                 {j.examples && <div>{j.examples[0].text}</div>}
//                                 {/* <div>{j.examples[0]}</div> */}
//                                 {j.subsenses &&
//                                   j.subsenses.map((k) => {
//                                     return (
//                                       <div>
//                                         <div>{k.definitions[0]}</div>
//                                         {k.examples && (
//                                           <div>{k.examples[0].text}</div>
//                                         )}
//                                       </div>
//                                     );
//                                   })}
//                               </div>
//                             );
//                           })}
//                         </div>
