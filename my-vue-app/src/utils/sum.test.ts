import { describe, it, expect } from "vitest";
import { sum } from "./sum.ts";

describe("sum", () => {
  it("no args add up to zero", () => {
    expect(sum([])).toBe(0);
  });
  it("one args adds up to itself", () => {
    expect(sum([5])).toBe(5);
  });
  it("sums two values", () => {
    expect(sum([5, 6])).toBe(11);
  });
  it("sums five values", () => {
    expect(sum([5, 6,1,2,3])).toBe(17);
  });
});
