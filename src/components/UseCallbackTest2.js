import React, { useCallback, useEffect, useState } from "react";

const UseCallbackTest2 = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // createBoxStyle을 useCallback 으로 감싸주지 않으면
  // 다크모드 toggle이 될 때에도 계속 렌더링 되어 함수가 호출됨

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <>
      <hr />
      <div style={{ backgroundColor: isDark ? "black" : "white" }}>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Dark Mode?
        </button>
        <hr />
        <input
          type="number"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
            console.log(size);
          }}
        />
        <Box createBoxStyle={createBoxStyle} />
      </div>
    </>
  );
};

export default UseCallbackTest2;

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    console.log("changing box size");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);
  return (
    <>
      <div style={style}></div>
    </>
  );
};
