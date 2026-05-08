import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Cart from "../Components/Cart";
import data from "../mockData/cartMock.json";
import { Provider } from "react-redux";
import appStore from "../Redux/store";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import { original } from "@reduxjs/toolkit";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

//   expect(searchbtn).toBeInTheDocument();

test("check Cart in header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <Cart />
      </BrowserRouter>
    </Provider>,
  );
  const check = screen.getByText("CART 0");
  expect(check).toBeInTheDocument();
});

it("should filter cards based on search input", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>,
  );

  const cards = await screen.findAllByRole("button", { name: /add to cart/i });
  fireEvent.click(cards[0]); 
//   expect(cards.length).toBe(1)

  // const add = screen.findAllByAltText()
});
