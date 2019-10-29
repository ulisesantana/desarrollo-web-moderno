import React, { useState, useEffect } from "react";

export const MetaData = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    const t = setTimeout(setNum, 1000, num + 1);
    return () => {
      clearTimeout(t);
    };
  }, [num]);

  return <h2>{num}</h2>;
};
