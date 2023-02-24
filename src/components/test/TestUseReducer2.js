import React, { useReducer, useRef, useState } from "react";

const addEmployee = "ADD_EMPLOYEE";

const reducer = (state, action) => {
  console.log(action);
  let idGenerator = action.map((a, i) => {
    return a.id;
  });
  switch (action.type) {
    case addEmployee:
      const newEmployee = {
        id: Math.max(...idGenerator) + 1,
        // name: nameRef.current.value,
        // age: ageRef.current.value,
        // dept: {
        //   name: deptNameRef.current.value,
        //   manager: deptManagerRef.current.value,
        // },
        isHere: true,
      };
      return {};

    default:
      return null;
  }
};

const Employee = () => {
  const initialState = [
    {
      id: 1,
      name: "a",
      age: "b",
      dept: {
        name: "c",
        manager: "d",
      },
      isHere: false,
    },
  ];

  const nameRef = useRef();
  const ageRef = useRef();
  const deptNameRef = useRef();
  const deptManagerRef = useRef();
  const [showAll, setShowAll] = useState(true);

  // useReducer 함수 선언
  const [employee, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>직원 인사 기록부</h2>
      <p>추가하기</p>
      <input
        type="text"
        // value={employee.name}
        ref={nameRef}
        placeholder="이름"
      />
      <input
        type="text"
        // value={employee.age}
        ref={ageRef}
        placeholder="나이"
      />
      <input
        type="text"
        // value={employee.dept.name}
        ref={deptNameRef}
        placeholder="부서명"
      />
      <input
        type="text"
        // value={employee.dept.manager}
        ref={deptManagerRef}
        placeholder="팀장명"
      />
      <button
        onClick={() => {
          dispatch({ type: addEmployee, payload: employee });
          nameRef.current.value = "";
          ageRef.current.value = "";
          deptNameRef.current.value = "";
          deptManagerRef.current.value = "";
        }}
      >
        추가
      </button>
      <hr />
      <p>부서원 리스트</p>
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        퇴사 직원 숨기기
      </button>
      {showAll
        ? employee.map((a, i) => {
            return (
              <div
                key={a.id}
                style={{ backgroundColor: "pink", borderRadius: "3px" }}
                // onClick={() => {
                //   employee.filter((a) => {
                //     return a.id === employee.id
                //   })
                // }}
              >
                <p>사번: {a.id}</p>
                <p>이름: {a.name}</p>
                <p>나이: {a.age}</p>
                <ul>
                  <li>부서명: {a.dept.name}</li>
                  <li>팀장명: {a.dept.manager}</li>
                </ul>
                <p>재직 상태: {a.isHere === true ? "재직중" : "퇴사"}</p>
              </div>
            );
          })
        : employee
            .filter((a) => {
              return a.isHere === true;
            })
            .map((a, i) => {
              return (
                <div
                  key={a.id}
                  style={{ backgroundColor: "pink", borderRadius: "3px" }}
                >
                  <p>사번: {a.id}</p>
                  <p>이름: {a.name}</p>
                  <p>나이: {a.age}</p>
                  <ul>
                    <li>부서명: {a.dept.name}</li>
                    <li>팀장명: {a.dept.manager}</li>
                  </ul>
                  <p>재직 상태: 퇴사</p>
                </div>
              );
            })}
    </>
  );
};

export default Employee;
