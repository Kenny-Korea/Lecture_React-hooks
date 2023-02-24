import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer has started");
    }, 1000);

    // useEffect의 return문은 clean-up function
    return () => {
      clearInterval(timer);
      console.log("timer has terminated");
    };
  }, []);

  return (
    <>
      <div>timer has started</div>
    </>
  );
};

export default Timer;
