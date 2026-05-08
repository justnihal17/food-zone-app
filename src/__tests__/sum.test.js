import { sum } from "../Components/Sum";

test("check to sum of two number", () => {
  const res = sum(10, 5);
  expect(res).toBe(15);
});
