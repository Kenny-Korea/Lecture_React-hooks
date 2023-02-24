import React, { useReducer } from "react";

const increaseBtn = "Increase";
const decreaseBtn = "Decrease";
const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case increaseBtn:
      // return state++; 으로 하니깐 안됨
      return state + 1;
    case decreaseBtn:
      // return state--;
      return action.payload.number - 1;
    default:
      // return state;
      return action.payload.number;
  }
};

const initialState = 0;
const TestUseReducer = () => {
  const [number, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>볼륨 조절 버튼</h2>
      <input type="number" value={number} />
      <button
        onClick={() => {
          dispatch({ type: increaseBtn, payload: { number } });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: decreaseBtn, payload: { number } });
        }}
      >
        -
      </button>
    </>
  );
};

export default TestUseReducer;
