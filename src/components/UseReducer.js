import React, { useReducer, useState } from "react";

// reducer : state를 업데이트 하는 역할 (은행)
// dispatch : state 업데이트를 위한 요구
// action : 요구의 내용

const reducer = (state, action) => {
  console.log("dispatch 작동", state, action);
  // return 값이 변경될 state 값임
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdrawal":
      return state - action.payload;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [number, setNumber] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <hr />
      <h2>useReducer 은행에 오신 것을 환영합니다</h2>
      <p>잔고: {balance}원</p>
      <input
        type="number"
        value={number}
        // 단위를 지정하는 속성
        step="1000"
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdrawal", payload: number });
        }}
      >
        출금
      </button>
    </>
  );
};

export default UseReducer;
