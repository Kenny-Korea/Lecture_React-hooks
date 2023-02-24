import React, { useRef, useState } from "react";

const Employee1 = () => {
  const [employee, setEmployee] = useState([
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
  ]);
  const nameRef = useRef();
  const ageRef = useRef();
  const deptNameRef = useRef();
  const deptManagerRef = useRef();
  const [showAll, setShowAll] = useState(true);

  // 각각 고유한 사번을 가질 수 있도록 id를 자동으로 생성해주는 idGenerator 변수 선언
  // id가 많아질 수록 map함수로 새로운 배열을 만들어 내는 작업을 계속 해야하므로 비효율적일 수 있기 때문에
  // sort메소드 등 더 효율적인 다른 방안을 찾아볼 수 있을 것 같음
  let idGenerator = employee.map((a, i) => {
    return a.id;
  });

  return (
    <>
      <p>useState, useRef</p>
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
          const newEmployee = {
            id: Math.max(...idGenerator) + 1,
            name: nameRef.current.value,
            age: ageRef.current.value,
            dept: {
              name: deptNameRef.current.value,
              manager: deptManagerRef.current.value,
            },
            isHere: true,
          };
          setEmployee([...employee, newEmployee]);
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
      <button
        onClick={() => {
          console.log(employee);
        }}
      >
        객체 출력하기
      </button>
      <hr />
      {showAll
        ? employee.map((a, i) => {
            return (
              <div
                key={a.id}
                style={{
                  backgroundColor: a.isHere ? "pink" : "lightgray",
                }}
                onClick={() => {
                  // 직접 속성값을 컨트롤하게 되면 메모리 주소가 그대로라 렌더링이 되지 않는 문제 확인
                  // a.isHere = !a.isHere;
                  // console.log(a.isHere);

                  return {
                    ...a,
                    isHere: !a.isHere,
                  };
                }}
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

export default Employee1;
