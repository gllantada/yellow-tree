import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { ShowData } from "./components/ShowData";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const handleFetchData = () => {
    fetch("http://localhost:3030/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div className="App">
      <Form handleFetchData={handleFetchData}></Form>
      <ShowData data={data} />
    </div>
  );
}

export default App;
