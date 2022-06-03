import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AddWord } from "./AddWord";
import data from "../../db.json";
import { GetWordList } from "../../Redux/Action/action";
import { loadData } from "../../utils/localStorage";

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
  margin-top: 2%;
  position: relative;
  height: 80vh;
  overflow: scroll;
  background: #efefef;
`;
const Card = styled.div`
  // border: 2px solid black;
  margin-top: 1%;
  width: 100%;
  text-align: left;
  height: auto;
  // margin-left: auto;
  // margin-right: auto;
`;
export const Home = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.searchword);
  const addword = useSelector((state) => state.addword);
  useEffect(() => {
    dispatch(GetWordList());
  }, []);

  let data = loadData("wordList");
  console.log("65", data);
  // console.log(addword);
  return (
    <Container>
      <Header>
        <h1>List Of Word</h1>
      </Header>
      <PopUpModal>{addword && <AddWord />}</PopUpModal>
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
            return (
              <Card key={d.id}>
                <br />
                <div style={{ fontWeight: "1000", fontSize: "larger" }}>
                  {d.id.toUpperCase()}
                </div>
                <div>
                  {d.results[0].lexicalEntries.map((i) => {
                    return (
                      <div key={i.id}>
                        <div>
                          ({i.lexicalCategory.text}) {i.entries[0].etymologies}
                        </div>
                        <div>
                          {i.entries[0].senses.map((j) => {
                            // if (j.examples!== undefined) {
                            //   console.log("98", j.examples[0].text);
                            // }
                            return (
                              <div key={j.id}>
                                <div>{j.definitions[0]}</div>
                                {j.examples && <div>{j.examples[0].text}</div>}
                                {/* <div>{j.examples[0]}</div> */}
                                {j.subsenses &&
                                  j.subsenses.map((k) => {
                                    return (
                                      <div>
                                        <div>{k.definitions[0]}</div>
                                        {k.examples && (
                                          <div>{k.examples[0].text}</div>
                                        )}
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />
                <br />
                <hr />
              </Card>
            );
          })}
      </Div>
    </Container>
  );
};
