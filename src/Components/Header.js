import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

function Header() {
  const [login, setLogin] = useState("LOGIN");
  const [increment, setIncrement] = useState(1);
  const status = useOnline();
  const Cart = useSelector((items) => items.cart.item);
  function BtnChange() {
    setLogin(login === "LOGIN" ? "LOGOUT" : "LOGIN");
  }

  return (
    <header className="bg-[#fff] shadow-md sticky top-0 z-1000">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-[80px]">
        {/* Logo */}
        <div className="flex items-center  w-[120px] justify-end">
          <img
            className="h-[60px] w-[60px]  p-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG0--KhNLvMiu5w2AVCswt5I4BND9jEqDAg&s"
            alt="logo"
          />
        </div>

        {/* Navbar */}
        <ul className="flex items-center gap-7 text-[15px] font-semibold text-black">
          <li className="hover:text-[#2C2C2C] transition">
            <Link to="/">Status {status ? "🟢" : "🔴"}</Link>
          </li>

          <li className="hover:text-[#2C2C2C] transition">
            <Link to="/">HOME</Link>
          </li>

          <li className="hover:text-[#2C2C2C] transition">
            <Link to="/Grocery">GROCERY</Link>
          </li>

          <li className="hover:text-[#2C2C2C] transition">
            <Link to="/About">ABOUT</Link>
          </li>

          <li className="hover:text-[#2C2C2C] transition">
            <Link to="/Contact">CONTACT</Link>
          </li>

          <li className="hover:text-[#2C2C2C] transition">
            <Link to="/Cart">CART{" " + Cart}</Link>
          </li>

          <li
            onClick={BtnChange}
            className="cursor-pointer bg-white text-[#2C2C2C] px-4 py-1 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
          >
            <Link to="/Login">{login}</Link>
          </li>

          <li
            className="cursor-pointer hover:text-[#2C2C2C] transition"
            onClick={() => setIncrement(increment < 30 ? increment + 1 : 30)}
          >
            <Link to={`/restaurant/${increment}`}>Product++</Link>
          </li>

          <li
            className="cursor-pointer hover:text-[#2C2C2C] transition"
            onClick={() => setIncrement(increment > 1 ? increment - 1 : 1)}
          >
            <Link to={`/restaurant/${increment}`}>Product--</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
