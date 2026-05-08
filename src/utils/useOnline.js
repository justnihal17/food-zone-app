import React, { useEffect, useState } from "react";

function useOnline() {
  const [status, setstatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setstatus(true);
    });
    window.addEventListener("offline", () => {
      setstatus(false);
    });
  });
  return status;
}

export default useOnline;
