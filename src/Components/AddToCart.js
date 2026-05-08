import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/Cart_Silce";

function AddToCart() {
  let cartItems = useSelector((item) => item.cart.data);
  const dispatch = useDispatch();

  return (
    <div className="p-5 ">
      {/* CLEAR BUTTON */}
      {cartItems.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className="mb-5 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Bukit
        </button>
      )}

      {/* EMPTY STATE */}
      {cartItems.length === 0 ? (
        <h1 className="text-xl font-bold">Cart is Empty</h1>
      ) : (
        <div className="flex flex-wrap gap-5">
          {cartItems.map((item, index) => (
            <div key={index} className="w-72 bg-white p-4 rounded-xl shadow-md">
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 rounded-lg object-cover"
              />

              {/* CONTENT */}
              <h2 className="font-bold text-lg mt-2">{item.name}</h2>

              <p className="text-sm">{item.ingredients}</p>

              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-bold">
                  {item.caloriesPerServing}
                </span>

                <span>⭐ {item.rating}</span>
              </div>

              {/* REMOVE BUTTON */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="mt-3 w-full bg-orange-500 text-white py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddToCart;
///dispatch(removeCart(item.id))
