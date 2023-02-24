import React, { useEffect, useMemo, useState } from "react";

const hardCalculation = (number) => {
  for (let i = 0; i < 1999999999; i++) {} // 오래 걸리는 작업
  console.log("hard calculation");
  return number + 10000;
};
const easyCalculation = (number) => {
  console.log("easy calculation");
  return number + 1;
};

const UseMemoTest1 = () => {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  // hardNum, easyNum state가 변경될 때마다 UseMemoTest1() 함수가 실행되면서
  // 상단의 hardCalculation, easyCalculation 함수를 호출함

  // let hardSum = hardCalculation(hardNum);
  let hardSum = useMemo(() => {
    return hardCalculation(hardNum);
  }, [hardNum]);
  let easySum = easyCalculation(easyNum);

  return (
    <>
      <hr />
      <p>
        설명: useMemo를 사용할 경우, 오래 hardNum state가 변경될 때만
        hardCalculation이 실행됨
      </p>
      <p>
        다만, 1초 이상 걸리는 작업이 실제로 많이 없기 떄문에 자주 쓸 일은 없음
      </p>
      <div>
        <p>어려운 계산</p>
        <input
          type="number"
          value={hardNum}
          onChange={(e) => {
            setHardNum(parseInt(e.target.value));
          }}
        />
        <span> + 10000 = {hardSum} </span>
      </div>
      <hr />
      {/* <p>설명: 쉬운 계산</p> */}
      <div>
        <p>쉬운 계산</p>
        <input
          type="number"
          value={easyNum}
          onChange={(e) => {
            setEasyNum(parseInt(e.target.value));
          }}
        />
        <span> + 1 = {easySum} </span>
      </div>
      <hr />
    </>
  );
};

export default UseMemoTest1;
