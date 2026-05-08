import React, { useEffect, useState } from "react";

function useRecipes() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const Data = await response.json();
      setdata(Data.recipes);
    };
    fetchData();
  }, []);
  return data;
}

export default useRecipes;
