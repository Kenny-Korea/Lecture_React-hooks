import React, { useState } from "react";
import UseMemoTest1 from "./UseMemoTest1";
import UseMemoTest2 from "./UseMemoTest2";

const UseMemo = () => {
  const [tabContent, setTabContent] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setTabContent(1);
        }}
      >
        Test1
      </button>
      <button
        onClick={() => {
          setTabContent(2);
        }}
      >
        Test2
      </button>
      <div
        style={{
          backgroundColor: "lightgray",
          width: "800px",
          height: "500px",
        }}
      >
        {
          [<div>아무것도 없습니다.</div>, <UseMemoTest1 />, <UseMemoTest2 />][
            tabContent
          ]
        }
      </div>
    </>
  );
};

export default UseMemo;
