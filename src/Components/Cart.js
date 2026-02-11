import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
// import Data from "../utils/Data";
import { restaurant } from "../Api/Restaurant";
function Cart() {
  // const [api, setapi] = useState([]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    restaurant().then((data) => {
      setdata(data);
      console.log("API DATA :", data);
    });
  }, []);
  console.log(data);
  function FilterData() {
    const Filters = data.filter((prod) => prod.rating >= 4.8);
    setdata(Filters);
  }

  return (
    <>
      <button onClick={FilterData}>Filter Data</button>
      <div className="cartGrid">
        {data.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          data.map((prod) => {
            return <CartHandler data={prod} key={prod.id} />;
          })
        )}
      </div>
    </>
  );
}

export default Cart;

export function CartHandler({ data }) {
  const { image, name, instructions, rating } = data;

  return (
    <div className={styles.card}>
      <div className={styles.Image_Container}>
        <img src={image} alt="Biryani" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>

        <p className={styles.description}>{instructions}</p>

        <div className={styles.bottom}>
          {/* <span className={styles.price}>{price}</span> */}
          <span className={styles.rating}>{rating}</span>
        </div>

        <button className={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
}
