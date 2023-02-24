import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Page = () => {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);
  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <h1>Hello, Mr. Kim</h1>
        <div>
          <p>blah</p>
          <p>blah</p>
          <p>blah</p>
          <p>blah</p>
        </div>
      </div>
    </>
  );
};

export default Page;
