import React, { useCallback, useEffect, useState } from "react";

const UseCallbackTest1 = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  // number state가 변화하여 렌더링 되면 someFunction이 호출되면서 초기화 됨
  // 함수도 객체이기 때문에 호출되면서 메모리값이 변경되고, someFunction이 바뀐 것으로 인지하여
  // useEffect 재호출됨

  // const someFunction = () => {
  //   console.log(`number : ${number}`);
  // };
  const someFunction = useCallback(() => {
    console.log(`number : ${number}`);
    return;
    // 아래 dependency에 number를 넣어주지 않으면, 처음에 memoize한 값을 그대로 출력함
    // 값을 업데이트 해주기 위해서 dependency에 number를 넣어줘야 함
  }, [number]);

  useEffect(() => {
    console.log("someFunction has been changed");
  }, [someFunction]);

  return (
    <>
      <hr />
      <div>
        <p>
          설명: someFunction 함수 자체는 변하고 있지 않기 때문에 useEffect가
          변하지 않아야 하지만
        </p>
        <p>
          실제로는 렌더링 되면서 객체인 함수가 새로운 메모리 주소를 할당받기
          때문에 someFunction이 변한 것으로 인식하여
        </p>
        <p>useEffect가 계속해서 호출되는 상황 발생</p>
        <p>
          useCallback 사용 후에는 number state가 변경되어도 useEffect 호출되지
          않음
        </p>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <button onClick={someFunction}>Call someFunction</button>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle.toString()}{" "}
      </button>
    </>
  );
};

export default UseCallbackTest1;
