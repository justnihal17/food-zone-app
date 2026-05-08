import { render, screen } from "@testing-library/react";
import Contect from "../Components/Contect";
import "@testing-library/jest-dom";

describe("Input Box Test", () => {
  test("contect Component test", () => {
    render(<Contect />);
    const check = screen.getByPlaceholderText("Name");
    expect(check).toBeInTheDocument();
  });
  describe("test input not value", () => {
    it("contect Component test and it components check", () => {
      render(<Contect />);
      const check = screen.getAllByRole("textbox");
      expect(check.length).not.toBe(3);
    });
  });
});
describe("Button Test", () => {
  test("contect Component test", () => {
    render(<Contect />);
    const check = screen.getByText("Add");
    expect(check).toBeInTheDocument();
  });
  test("contect Component test", () => {
    render(<Contect />);
    const check = screen.getByRole("button");
    expect(check).toBeInTheDocument();
  });
});
