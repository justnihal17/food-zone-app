export const restaurant = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  //  console.log("fun : ", response);
  const Data = await response.json();
  //  console.log("fun Data : ", Data);
  return Data.recipes;
};
// //export const URL = "https://dummyjson.com/carts";
//  const respones= restaurant();
// //  console.log("respones",respones)
// export default respones
// // console.log("Restaurant : ", respones);
