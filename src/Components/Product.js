import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import UserContext from "./UserContext";
// import { restaurant } from "../Api/Restaurant";
// import { CartHandler } from "./Cart";

// export default function Product() {
//   const[item, setItem] = useState({});
//   const [data, setdata] = useState([]);
//   let { id } = useParams();
//   useEffect(() => {
//     restaurant().then((data) => {
//       setdata(data);
//         let item = data.find((item) => item.id == id);
//         setItem(item);
//     });
//       console.log(data);
//       console.log(item);

//   }, []);

//   return(
//     <>
//     <div className="cartGrid">
//           <CartHandler data={item}/>;
//       </div>
//     </>
//   )
// }
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [display, setdisplay] = useState(true);
   const Username = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        const foundProduct = data.recipes.find((d) => d.id === Number(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 flex flex-col items-center">
      {/* Card */}
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 transition duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        {/* Image */}
        <div className="h-80 md:h-full overflow-hidden group relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
        </div>

        {/* Details */}
        <div className="p-8 pl-10 flex flex-col gap-6">
          {" "}
          {/* 👈 left padding added */}
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {/* {product.name} */}{Username.name}
          </h1>
          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full shadow-sm hover:scale-105 transition">
              ⭐ {product.rating}
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full shadow-sm hover:scale-105 transition">
              🍽 {product.servings} servings
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full shadow-sm hover:scale-105 transition">
              ⏱ {product.cookTimeMinutes} min
            </span>
            <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full shadow-sm hover:scale-105 transition">
              {product.difficulty}
            </span>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 px-3 py-1 text-xs rounded-full shadow-sm hover:scale-110 hover:shadow-md transition duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* Ingredients */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-inner border border-gray-100">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
              🧾 Ingredients
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-3">
              {" "}
              {/* 👈 extra left spacing */}
              {product.ingredients.map((item, index) => (
                <li
                  key={index}
                  className="hover:translate-x-2 transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-4 mt-2">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
              ❤️ Favorite
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-900 text-white font-semibold shadow-md hover:bg-black hover:scale-105 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-6xl w-full mt-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 pl-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          👨‍🍳 Instructions
        </h3>

        <ol className="space-y-4">
          {product.instructions.map((step, index) => (
            <li
              key={index}
              className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl shadow-sm hover:bg-gray-100 transition"
            >
              {/* Step Number */}
              <button
                onClick={() => setdisplay(!display)}
                className="min-w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-bold"
              >
                {index + 1}
              </button>

              {/* Step Text */}
              <p
                className={`${display ? "hidden" : "block"} text-gray-700 leading-relaxed`}
              >
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Product;
