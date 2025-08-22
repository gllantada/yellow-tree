import React from "react";

export const ShowData = ({ data }) => {
  return (
    <div>
      {data.map((elm) => (
        <div>data: {elm}</div>
      ))}
    </div>
  );
};
