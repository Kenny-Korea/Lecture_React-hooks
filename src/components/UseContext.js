import React, { useEffect, useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./ThemeContext";

const UseContext = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    console.log("Rendered");
  }, [isDark]);

  return (
    <>
      {/* value를 소괄호에 넣었더니 에러가 남 --> 중괄호 객체 형태로 보내줘야 함 */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Toggle Dark Mode
      </button>
    </>
  );
};

export default UseContext;
