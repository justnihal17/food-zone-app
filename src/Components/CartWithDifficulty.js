import React from "react";
import style from "../Components/CartWithDifficulty.module.css";
const CartWithDifficulty = (Card) => {
  const CartWithLabel = (props) => {
    return (
      <div className={style.Cards}>
        <label className={style.lbl}>{props?.data?.difficulty}</label>
      
          <Card {...props} />
        
      </div>
    );
  };
  return CartWithLabel;
};

export default CartWithDifficulty;
