import { renderComponent } from "../test-utils/renderComponent";
import Counter from "./Counter.vue";
import { describe, it, expect } from "vitest";
import { nextTick, reactive, ref } from "vue";
import { waitFor } from "@testing-library/vue";

function renderCounter({ label = "Label:", model = ref(0) } = {}) {
  let props = reactive({
    label,
    modelValue: model,
    "onUpdate:modelValue": (v: number) => {
      model.value = v;
      renderResult.rerender({ modelValue: model.value });
    },
  });
  const renderResult = renderComponent(Counter, props);
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
      label: "Hits: ",
      model: count,
    });
    await user.click(screen.getByText("Hits:", { exact: false }));
    await nextTick();
    await nextTick();
    expect(count.value).toBe(6);
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(/Hits: 6/);
    });
  });
});
