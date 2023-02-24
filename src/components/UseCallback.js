import React, { useCallback, useEffect, useState } from "react";
import UseCallbackTest1 from "./UseCallbackTest1";
import UseCallbackTest2 from "./UseCallbackTest2";

const UseCallback = () => {
  const [tabContent, setTabContent] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setTabContent(1);
        }}
      >
        test1
      </button>
      <button
        onClick={() => {
          setTabContent(2);
        }}
      >
        test2
      </button>
      {
        [
          <div>아무것도 없습네다.</div>,
          <UseCallbackTest1 />,
          <UseCallbackTest2 />,
        ][tabContent]
      }
    </>
  );
};

export default UseCallback;
