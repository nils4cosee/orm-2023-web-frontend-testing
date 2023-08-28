import { useStats } from "./useStats.ts";
import { expect, describe, it } from "vitest";
import { ref } from "vue";

describe("useStats", () => {
  it("computes the sum", () => {
    const result = useStats({ values: [ref(1), ref(2), ref(3)] });
    expect(result.sum.value).toEqual(6);
  });

  it("update sum when values change", () => {
    let summand1 = ref(1);
    let summand2 = ref(2);
    let summand3 = ref(3);
    const result = useStats({ values: [summand1, summand2, summand3] });
    summand1.value = 11
    summand2.value = 12
    summand3.value = 13

    expect(result.sum.value).toEqual(36);
  });
});
