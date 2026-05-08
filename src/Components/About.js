import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
// import Contect from "./Contect";

function About() {
  const [count, setCount] = useState(0);
  const Username = useContext(UserContext);
  // const Username="USer"
  // console.log( "name",Username);
  
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        marginTop: "30px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      { <h1>Name : {Username.name}</h1> }
      <h2>Age : 22</h2>
      <h1>CountAbout : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* <Contect name={"Aamir"} age={21} /> */}
    </div>
  );
}

export default About;
