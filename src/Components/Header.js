import React from "react";
import style from "./Header.module.css";
function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG0--KhNLvMiu5w2AVCswt5I4BND9jEqDAg&s"
          alt=""
        />
        {/* <img src={Dosa} alt="" /> */}
      </div>
      <div className={style.list}>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
