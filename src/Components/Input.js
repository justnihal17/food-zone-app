import React from "react";

function Input({ username, setusername }) {
  return (
    <>
      <input value={username} onChange={(e) => setusername(e.target.value)} />
    </>
  );
}

export default Input;
