export const restaurant = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const Data = await response.json();
  return Data.recipes;
};
