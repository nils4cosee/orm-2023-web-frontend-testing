import { renderComponent } from "../test-utils/renderComponent";
import Counter from "./Counter.vue";
import { describe, expect, it } from "vitest";
import { ref } from "vue";
import { waitFor } from "@testing-library/vue";

function renderCounter({ label = "Label:", model = ref(0) } = {}) {
  const renderResult = renderComponent(Counter, {
    label,
    modelValue: model,
    "onUpdate:modelValue": (v: number) => {
      model.value = v;
      renderResult.rerender({ modelValue: model.value }).catch(console.error);
    },
  });
  return renderResult;
}
describe("Counter", () => {
  it("renders a button", () => {
    const { screen } = renderCounter({ label: "Counter: " });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders a label into the button", () => {
    const { screen } = renderCounter({ label: "Counter: " });
    expect(screen.getByRole("button")).toHaveTextContent(/Counter/);
  });

  it("renders the counter value", () => {
    const { screen } = renderCounter({ label: "Counter: ", model: ref(0) });
    expect(screen.getByRole("button")).toHaveTextContent(/Counter: 0/);
  });

  it("renders different values", () => {
    const { screen } = renderCounter({ label: "Hits: ", model: ref(5) });
    expect(screen.getByRole("button")).toHaveTextContent(/Hits: 5/);
  });

  it("clicking the button increases the value", async () => {
    const count = ref(5);
    const { screen, user } = renderCounter({
      label: "Counter: ",
      model: count,
    });
    const button = screen.getByText("Counter", { exact: false });
    await user.click(button);
    await waitFor(() => {
      expect(count.value).toBe(6);
      expect(screen.getByRole("button")).toHaveTextContent(/Counter: 6/);
    });
  });
});
