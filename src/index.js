import ReactDOM from "react-dom/client";
import { appRouter } from "./app";
import { RouterProvider } from "react-router-dom";
import UserContext from "./Components/UserContext";
import { Provider } from "react-redux";
import appStore from "./Redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={appStore}>
    <UserContext.Provider value={{ name: "nihal" }}>
      <RouterProvider router={appRouter} />
    </UserContext.Provider>
    ,
  </Provider>,
  // </StrictMode>
);
