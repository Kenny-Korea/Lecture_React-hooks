import React, { useEffect, useReducer, useRef, useState } from "react";
import Students from "./Students";

// 1번째 인자 state: initialState
// 2번째 인자 action: dispatch 함수로부터 전달받은 객체 값
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter((a) => a.id !== action.payload.id),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((a) => {
          if (a.id === action.payload.id) {
            return { ...a, isHere: !a.isHere };
          }
          return a;
        }),
      };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const UseReducer2 = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [studentsInfo]);

  return (
    <>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        ref={inputRef}
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
          setName("");
        }}
      >
        추가
      </button>
      <hr />
      {studentsInfo.students.map((a, i) => {
        return (
          // 아래와 같이 하나의 컴포넌트에 key값을 unique하게 줘서 iterable한 method(map 함수)를 사용할 수 있음
          <Students
            key={a.id}
            name={a.name}
            dispatch={dispatch}
            id={a.id}
            isHere={a.isHere}
          />
        );
      })}
      <hr />
      <button
        onClick={() => {
          console.log();
        }}
      >
        학생 정보 확인
      </button>
    </>
  );
};

export default UseReducer2;
