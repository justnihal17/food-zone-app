import React from "react";
import { useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <h1> {error.status+" "} {error.statusText}</h1>
    </div>
  );
}
