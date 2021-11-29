import React, { useState } from "react";
import TextForm from "./component/TextForm";

function App() {
  const [message, setMessage] = useState("");

  const childData = (data) => {
    setMessage(data);
  };

  return (
    <App className="App">
      <TextForm childData={childData} message={message} />
      <TextForm childData={childData} message={message} />
    </App>
  );
}

export default App;
