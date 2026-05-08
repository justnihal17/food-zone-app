import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Cart from "../Components/Cart";
import data from "../mockData/cartMock.json";
import { Provider } from "react-redux";
import appStore from "../Redux/store";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { original } from "@reduxjs/toolkit";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

it("should render body", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>,
  );

  const searchbtn = await screen.findByRole("button", {
    name: /search/i,
  });

  expect(searchbtn).toBeInTheDocument();
});

it("should filter cards based on search input", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>,
  );

  const cards = await screen.findAllByRole("button", {
    name: /add to cart/i,
  });

  expect(cards.length).toBeGreaterThan(0);

  const input = screen.getByPlaceholderText("Search items...");
  fireEvent.change(input, { target: { value: "biryani" } });

  fireEvent.click(screen.getByTestId("search"));

  await waitFor(() => {
    expect(
      screen.getAllByRole("button", {
        name: /add to cart/i,
      }),
    ).toHaveLength(1);
  });
});




it("should filter top rated on button clicked", async () => {
    render(<Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>,
  )
  const topRatedButton = screen.getByRole("button", {
    name: /top rated food/i,
  });
  fireEvent.click(topRatedButton);
  const cartIem = screen.getAllByTestId("foodCard");
  expect(cartIem.length).toBe(1);

  
}); 






