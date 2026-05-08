import Header from "./Components/Header";
import "./app.css";
import { lazy, Suspense, useState } from "react";
import Cart from "./Components/Cart";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contect from "./Components/Contect";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Product from "./Components/Product";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Components/UserContext";
import Input from "./Components/Input";
import AddToCart from "./Components/AddToCart";
// import CartWithDifficulty from "./Components/CartWithDifficulty";
const Grocery = lazy(() => import("./Components/Grocery"));

let App = function () {
  const [username, setusername] = useState("Kunal");
  return (
    <>
      <UserContext.Provider value={{ name: username }}>
        <Header />
        <Input username={username} setusername={setusername} />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App value={{ name: "Nihal" }} />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Cart />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading.....🫸🫸🫸🫸🫸⏳⏳</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/About",
        element: (
          // <UserContext.Provider value={{ name: "Kunal" }}>
          <About />
          // </UserContext.Provider>
        ),
      },
      {
        path: "/Contact",
        element: <Contect name={"Aamir"} age={21} />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "restaurant/:id?",
        element: <Product />,
      },
      {
        path: "/Cart",
        element: <AddToCart />,
      },
    ],
  },
]);

export default App;
