import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AddWord } from "./AddWord";
import {
  CarD,
  cardClicked,
  GetWordList,
  IsLoading,
  wordList,
} from "../../Redux/Action/action";
import { loadData, saveData } from "../../utils/localStorage";
import { DefineWord } from "./DefineWord";
import zIndex from "@mui/material/styles/zIndex";

const Container = styled.div`
  // margin-top: 2%;
  // background: #efefef;
  // background: lightcoral;
  // background: rgba(200, 200, 200);
  min-height: 91vh;
  width: 100%;
  // width: 80%;
  // margin-left: auto;
  // margin-right: auto;
`;
const Header = styled.div`
  position: sticky;
  top: 10vh;
  box-shadow: 0px 10px 29px rgb(0 0 0 / 35%);
  border-radius: 50px 50px;
  background: #efefef;
  height: 8vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  @media only screen and (max-width: 768px) {
    border: none;
    width: 100%;
    height: 10vh;
    border-radius: 10px;
    top: 0;
    z-index: 50;
    margin-top: -1%;
  }
  h1 {
    // padding: 1%;
    padding: 3vh 2vh;
    float: left;
    font-size: large;
    font-weight: 500;
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
  margin-top: 0%;
  position: relative;
  height: 80vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  background: #efefef;
  @media only screen and (max-width: 768px) {
    border: none;
    width: 100%;
    border-radius: 0px;
    top: 0;
    min-height: 85vh;
    z-index: 50;
    margin-top: -5%;
  }
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
    dispatch(IsLoading(true));
    return fetch("https://vocab-roado-backend.herokuapp.com/vocab")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => setIsError(true))
      .finally(() => {
        setIsLoading(false);
        dispatch(IsLoading(false));
      });
  }

  return isLoading ? (
    <div
      style={{ marginTop: "1%", width: "100%", height: "90vh", zIndex: "100" }}
    >
      <img
        // src="https://loading.io/assets/img/p/landing/bar.svg"
        src="https://cdn.dribbble.com/users/436306/screenshots/6026974/foodline.gif"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          height: "50vw",
          marginTop: "0%",
          scrollBehavior: "unset",
        }}
      />
    </div>
  ) : isError ? (
    <div style={{ marginTop: "10%", width: "100%", height: "90vh" }}>
      <img
        // src="https://loading.io/assets/img/p/landing/bar.svg"
        src="https://cdn.dribbble.com/users/436306/screenshots/6026974/foodline.gif"
        style={{
          marginLeft: "30vh",
          // marginRight: "auto",
          width: "80%",
          height: "50vw",
          marginTop: "0%",
          scrollBehavior: "unset",
        }}
      />
      Something Went Wrong.. Check Your Internet Connection,,,
    </div>
  ) : (
    <Container>
      <Header>
        <h1>Words List</h1>
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
            // console.log("107", d);
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
