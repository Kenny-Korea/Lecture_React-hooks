import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  // 변수 관리
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  console.log(renderCount);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수: " + renderCount.current);
  });
  // let renderCount = 0;
  // useEffect(() => {
  //   renderCount = renderCount + 1;
  //   console.log("렌더링 수: " + renderCount);
  //   console.log("count state값: " + count);
  // });

  // 돔 요소 접근
  const inputRef = useRef("");
  const divRef = useRef("");
  console.log(inputRef.current);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const loginSuccess = () => {
    alert(`환영합니다 ${inputRef.current.value}님`);
    // 로그인 성공하고도 한번 다시 focus
    inputRef.current.focus();
  };

  useEffect(() => {
    divRef.current.textContent = count;
  }, [count]);

  return (
    <>
      {/* 변수 관리 */}

      <div>
        <p>렌더링 횟수를 나타내는 renderCount</p>
        <p>1. useRef를 이용할 경우, 계속 값이 저장됨</p>
        <p>2. 변수로 선언할 경우, 렌더링 될 때마다 값이 초기화 됨</p>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          올려
        </button>
      </div>
      <hr />
      {/* 돔 요소 접근 */}
      <p>
        설명: useRef는 DOM 요소에 접근할 수 있기 때문에 초기에 input에 focus를
        주는 기능 구현
      </p>
      <div>
        <input ref={inputRef} type="text" placeholder="username" />
        <button onClick={loginSuccess}>login</button>
      </div>
      <hr />
      <div ref={divRef}></div>
    </>
  );
};

export default UseRef;
