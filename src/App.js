import { useState } from "react";
import "./styles.css";

import dummyData from "../db";

export default function App() {
  const healthStatus = () => {
    setTimeout(() => {
      const result = Math.round(Math.random());
      if (result === 1) {
        alert("Yay! Service is healthy :)");
      } else {
        alert("Service health is poor :(");
      }
    }, 1500);
  };

  const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyData);

  const inputOnChange = (event) => {
    event.preventDefault();

    const tempDataArr = [];

    setSearch(event.target.value);

    for (let i = 0; i < dummyData.length; i++) {
      if (dummyData[i].email.indexOf(event.target.value) !== -1) {
        tempDataArr.push({
          id: dummyData[i].id,
          title: dummyData[i].title,
          firstName: dummyData[i].firstName,
          lastName: dummyData[i].lastName,
          email: dummyData[i].email
        });
      }
    }

    setData(tempDataArr);
  };

  return (
    <div className="App">
      <h1>Health Checker</h1>
      <input
        id="search-box"
        onChange={inputOnChange}
        value={search}
        placeholder="Seach by Email..."
      ></input>
      <ol>
        {data.map((el, idx) => {
          return (
            <li key={idx}>
              <b>{el.id}</b>: {el.email}
              <button onClick={healthStatus}>Check Health</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
