import React, { useEffect, useMemo, useState } from "react";

const UseMemoTest2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = { country: isKorea ? "한국" : "인도네시아" };
  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "인도네시아" };
  }, [isKorea]);

  // useMemo 사용 이전에는 dependency에 상관 없이 계속 useEffect를 호출함
  // number를 변경해도 useEffect가 호출되는데, number state가 변경되면서
  // 새로운 주소값의 location이 메모리에 할당되기 때문에 location도 변경되는 것으로 보면서
  // useEffect가 호출되는 것임
  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <>
      <hr />
      <p>설명: dependency가 primitive type이면 서로 간섭 없이 잘 동작</p>
      <p>
        but!!! dependency가 object type이면 dependency를 무시하고 두 state가
        변경될 때마다 계속 useEffect 호출
      </p>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          // console.log(number);
        }}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
          // console.log(isKorea);
        }}
      >
        비행기 타자
      </button>
    </>
  );
};

export default UseMemoTest2;
