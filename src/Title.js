import React from "react";
import { useState } from "react";
import useTitle from "./useTitle";

const Title = () => {
  const [num, setNum] = useState(0);
  useTitle(num);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Sayı - {num}</button>
    </div>
  );
};

export default Title;
