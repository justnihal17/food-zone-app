import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import appStore from "../Redux/store";

// const mockStore = configureStore({
//   reducer: () => ({
//     cart: {
//       item: 0,
//     },
//   }),
// });

test("check ABOUT link in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const check = screen.getByRole("link", { name: /about/i });
  expect(check).toBeInTheDocument();
});

test("check Login link in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const check = screen.getByRole("link", { name: /login/i });
  expect(check).toBeInTheDocument();
});


test("check Cart in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
  const check = screen.getByText("CART 0");
  expect(check).toBeInTheDocument();
});


test("check Cart in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
  const check = screen.getByText(/CART/);
  expect(check).toBeInTheDocument();
});
test("check Cart in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
  const check = screen.getByText(/CART/);
  expect(check).toBeInTheDocument();
});





test("check LOGIN in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
  const check = screen.getByText("LOGIN");
  

  expect(check).toBeInTheDocument();
});


