import React from "react";

export const Form = ({ handleFetchData }) => {
  const inputRef = React.useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value } = inputRef.current;
    await fetch(`http://localhost:3030/data?data=${value}`, {
      method: "POST",

      headers: {
        ContentType: "application/json",
      },
    });
    handleFetchData();
  };
  return (
    <div style={{ background: "grey" }}>
      <form>
        <input ref={inputRef} type="text"></input>
        <button type="submit" onClick={handleSubmit}>
          save
        </button>
      </form>
    </div>
  );
};
