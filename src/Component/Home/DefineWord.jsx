import { color } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { addButton, cardClicked, NewWord } from "../../Redux/Action/action";

const PopUpModal = styled.div`
  // border: 2px solid black;
  box-shadow: 0px 10px 29px rgba(0, 0, 0, 0.35);
  background: white;
  position: relative;
  margin-top: 20vh;
  padding: 93px 50px;
  width: 60vh;
  // overflow: scroll;
  border-radius: 13%;
  height: 40vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  // border: 2px solid black;
  .buttonDiv {
    position: static;
    z-index: 1;
    /* width: 5vh; */
    /* height: 4vh; */
    /* border: 2px solid; */
    margin-top: -51vh;
    margin-left: 52vh;
  }

  @media only screen and (max-width: 800px) {
    // border:2px solid black;
    background: white;
    position: relative;
    height: 100%;
    margin-top: 0vh;
    padding: 0px;
    width: 100%;
    border-radius: 0%;
    .buttonDiv {
      position: fixed;
      top: 2vh;
      background: white;
      right: 6%;
      z-index: 1;
      // width: 47%,
      // height: 8%,
    }
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
  z-index: 60;
`;
const ButtonWrapper = styled.div`
  // margin-top: 2vh;
  position: fixed;
  width: 60vh;
  height: 47vh;
  // width: 100%;
  // height: 100%;
  // border: 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0%;
  @media only screen and (max-width: 800px) {
    margin-top: 2vh;
    position: fixed;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
  }
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
  overflow: scroll;
  /* padding: 2% 2%; */
  width: 90%;
  height: 100%;
  // border: 2px solid;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  .header {
    font-weight: 1000;
    fontsize: larger;
    padding: 1vh 0vh;
    position: fixed;
    top: 22vh;
    border-bottom: 1px solid grey;
    width: 54.5vh;
  }
  @media only screen and (max-width: 800px) {
    cursor: pointer;
    margin-top: 11vh;
    overflow: scroll;
    width: 90%;
    height: 86%;
    // border: 2px solid;
    /* text-align: left; */
    margin-left: auto;
    margin-right: auto;
    font-size: 124%;

    .header {
      top: 6vh;
      width: 90%;
    }
  }
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
        <div className="buttonDiv">
          <button
            style={{
              cursor: "pointer",
              // marginTop: "2%",
              // float: "right",
              padding: "4%",
              border: "0",
              background: "white",
              color: "grey",
            }}
            onClick={onClick}
          >
            <CloseIcon />
          </button>
        </div>
        <ButtonWrapper>
          <div style={{ height: "96%" }}>
            <Card key={d.id}>
              <h2 className="header">{d.id.toUpperCase()}</h2>
              <div>
                {d.results[0].lexicalEntries.map((i) => {
                  return (
                    <div key={i.id} style={{ padding: "1% 0%" }}>
                      <div
                        style={{
                          // padding: "1% 0%",
                          // position: "fixed",
                          fontStyle: "italic",
                          color: "gray",
                          top: "25vh",
                          left: "45vh",
                        }}
                      >
                        {i.lexicalCategory.text.toLowerCase()}
                      </div>
                      {i.entries[0].etymologies && (
                        <div style={{ padding: "1% 0%", color: "gray" }}>
                          Origin : {i.entries[0].etymologies}
                        </div>
                      )}
                      <div
                        style={{ padding: "1% 0%", borderBottom: "1px solid" }}
                      >
                        {i.entries[0].senses.map((j) => {
                          // if (j.examples!== undefined) {
                          //   console.log("98", j.examples[0].text);
                          // }
                          return (
                            <div key={j.id}>
                              <div
                                style={{ padding: "1% 0%", fontWeight: "600" }}
                              >
                                {j.definitions[0]}
                              </div>
                              {j.examples && (
                                <li
                                  style={{
                                    padding: "1% 0%",
                                    padding: "1% 0%",
                                    // border: "2px solid",
                                    width: "92%",
                                    marginLeft: "auto",
                                    fontWeight: "600",
                                    fontSize: "medium",
                                  }}
                                >
                                  {j.examples[0].text}
                                </li>
                              )}

                              {j.subsenses &&
                                j.subsenses.map((k) => {
                                  return (
                                    <div>
                                      <div
                                        style={{
                                          fontWeight: "600",
                                          padding: "1% 0%",
                                        }}
                                      >
                                        {k.definitions[0]}
                                      </div>
                                      {k.examples && (
                                        <li
                                          style={{
                                            padding: "1% 0%",
                                            padding: "1% 0%",
                                            // border: "2px solid",
                                            width: "92%",
                                            marginLeft: "auto",
                                            fontWeight: "600",
                                            fontSize: "medium",
                                          }}
                                        >
                                          {k.examples[0].text}
                                        </li>
                                      )}
                                    </div>
                                  );
                                })}
                            </div>
                          );
                        })}
                      </div>
                      {/* <hr /> */}
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
