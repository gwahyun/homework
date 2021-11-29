import React, { useState } from "react";
const TextForm = ({ childData, message }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    childData(text);
    document.getElementById("textContainer").innerHTML = "";
  };
  return (
    <>
      <div id="textContainer">{message}</div>
      <form onSubmit={onSubmit}>
        <input type="text" name="textForm" onChange={onChange} />
        <button type="submit">제출하기</button>
      </form>
    </>
  );
};

export default TextForm;
