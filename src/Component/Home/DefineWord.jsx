import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addButton, cardClicked, NewWord } from "../../Redux/Action/action";

const PopUpModal = styled.div`
  // border: 2px solid black;
  box-shadow: 0px 10px 29px rgba(0, 0, 0, 0.35);
  background: white;
  position: relative;
  margin-top: 20vh;
  padding: 8%;
  width: 45%;
  overflow: scroll;
  border-radius: 13%;
  height: 40vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  input {
    padding: 1% 2%;
    margin-top: 4%;
    // width: 19%;
    // height: 6%;
    // margin-top: auto;
    // margin-bottom: auto;
  }
`;
const Wrapper = styled.div`
  // border: 2px solid black;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(200, 200, 200);
  top: 0;
  left: 0;
  z-index: 50;
`;
const ButtonWrapper = styled.div`
  // border: 2px solid black;
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 4%;
  button {
    padding: 3% 5%;
  }
  input {
    padding: 3% 5%;
  }
`;
const Card = styled.div`
  cursor: pointer;
  margin-top: 0%;
  padding: 2% 2%;
  width: 95%;
  height: 67vh;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
`;

export const DefineWord = () => {
  const d = useSelector((state) => state.card);
  console.log("72", d);
  const dispatch = useDispatch();
  function onClick() {
    dispatch(cardClicked(false));
  }

  return (
    <Wrapper>
      <PopUpModal>
        <div
          style={{
            position: "fixed",
            top: "20%",
            background: "white",
            width: "47%",
            height: "8%",
          }}
        >
          <button
            style={{
              marginTop: "2%",
              padding: "1vh 3vh",
            }}
            onClick={onClick}
          >
            Cancle
          </button>
        </div>
        <ButtonWrapper>
          <div>
            <Card key={d.id}>
              <div
                style={{
                  fontWeight: "1000",
                  fontSize: "larger",
                  padding: "1% 0%",
                }}
              >
                {d.id.toUpperCase()}
              </div>
              <div>
                {d.results[0].lexicalEntries.map((i) => {
                  return (
                    <div key={i.id} style={{ padding: "1% 0%" }}>
                      <div style={{ padding: "1% 0%" }}>
                        ({i.lexicalCategory.text}) {i.entries[0].etymologies}
                      </div>
                      <div style={{ padding: "1% 0%" }}>
                        {i.entries[0].senses.map((j) => {
                          // if (j.examples!== undefined) {
                          //   console.log("98", j.examples[0].text);
                          // }
                          return (
                            <div key={j.id}>
                              <div style={{ padding: "1% 0%" }}>
                                {j.definitions[0]}
                              </div>
                              {j.examples && (
                                <div style={{ padding: "1% 0%" }}>
                                  {j.examples[0].text}
                                </div>
                              )}
                              {/* <div>{j.examples[0]}</div> */}
                              {j.subsenses &&
                                j.subsenses.map((k) => {
                                  return (
                                    <div>
                                      <div style={{ padding: "1% 0%" }}>
                                        {k.definitions[0]}
                                      </div>
                                      {k.examples && (
                                        <div style={{ padding: "1% 0%" }}>
                                          {k.examples[0].text}
                                        </div>
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
            </Card>
          </div>
        </ButtonWrapper>
      </PopUpModal>
    </Wrapper>
  );
};
