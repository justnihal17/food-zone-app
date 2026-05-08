import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Components/Cart";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import appStore from "../Redux/store";

jest.mock("../utils/useRecipes", () => ({
  __esModule: true,
  default: jest.fn(),
}));

import useRecipes from "../utils/useRecipes";
import { useEffect } from "react";

const mockData = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    instructions: ["Bake it"],
    image: "test.jpg",
    rating: 4.5,
  },
];

beforeEach(() => {
  useRecipes.mockReturnValue(mockData);
});

test("renders cart items from mocked useRecipes", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>
  );

  const item = await screen.findByText(/classic margherita pizza/i);
  expect(item).toBeInTheDocument(); 

});
    



