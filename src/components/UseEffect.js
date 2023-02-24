import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const UseEffect = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <p>설명: 아래 버튼을 누르면 Timer 컴포넌트를 불러 옴</p>
      <p>clean-up 함수도 적용</p>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        toggle timer
      </button>
    </>
  );
};

export default UseEffect;
