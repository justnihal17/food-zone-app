import { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import style from "../Components/Header.module.css";
import Shimmer from "../Components/Shimmer";
import useRecipes from "../utils/useRecipes";
import CartWithDifficulty from "./CartWithDifficulty";
import UserContext from "./UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addItem } from "../Redux/Cart_Silce";

function Cart() {
  const [data, setData] = useState([]);
  const [inpdata, setInpData] = useState("");
  const [final, setFinal] = useState([]);

  const Recipes = useRecipes();

  useEffect(() => {
    if (Recipes) {
      setData(Recipes);
      setFinal(Recipes);
    }
  }, [Recipes]);

  function inpfun(value) {
    setInpData(value);
  }

  // Search function fixed
  function search() {
    const filter = final.filter((card) =>
      card.name.toLowerCase().includes(inpdata.toLowerCase())
    );
    setData(filter);
  }

  // Top rated filter fixed
  function Topratedfood() {
    const filterproduct = final.filter((p) => p.rating >= 5);
    setData(filterproduct);
  }

  return (
    <>
      <div className={style.inp}>
        <input
          type="text"
          value={inpdata}
          onChange={(e) => inpfun(e.target.value)}
          placeholder="Search items..."
          data-testid="search-input"
        />

        <button onClick={search} data-testid="search">
          Search
        </button>

        <button
          onClick={Topratedfood} data-testid="foodCard"
          className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 active:scale-95 transition transform shadow-sm"
        >
          Top Rated Food
        </button>
      </div>

      <div className="cartGrid">
        {data.length === 0 ? (
          <Shimmer />
        ) : (
          data.map((prod) => (
            <CartWithDifficulties key={prod.id} data={prod} />
          ))
        )}
      </div>
    </>
  );
}

export default Cart;

// HOC wrapping
const CartWithDifficulties = CartWithDifficulty(CartHandler);

// Card Component
export function CartHandler({ data }) {
  const { image, name, instructions, rating } = data;

  const Username = useContext(UserContext);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.item);

  function add(itemdata) {
    dispatch(addCart(count + 1));
    dispatch(addItem(itemdata));
  }

  return (
    <div className={styles.card}>
      <div className={styles.Image_Container}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>

        <p className={styles.description}>{instructions}</p>
        <p className={styles.description}>{Username.name}</p>

        <div className={styles.bottom}>
          <span className={styles.rating}>{rating}</span>
        </div>

        <button className={styles.btn} onClick={() => add(data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}