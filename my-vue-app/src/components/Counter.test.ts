import { renderComponent } from "../test-utils/renderComponent";
import Counter from "./Counter.vue";
import {describe, expect, it, vi} from "vitest";
import {defineComponent, ref, watchSyncEffect} from "vue";
import { waitFor } from "@testing-library/vue";

const CounterTest = defineComponent({
  name: "CounterTest",
  components: { Counter },
  props: {
    label: {
      type: String,
    },
    initialValue: {
      type: Number,
      required: true
    },
    onUpdate: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const modelValue = ref<number>(props.initialValue);
    watchSyncEffect(() => {
      props.onUpdate(modelValue)
    })
    return { modelValue };
  },
  template: `
      <Counter :label="label" v-model="modelValue" @update:modelValue="$emit('update', $event)"/>
  `,
});

function renderCounter({ label = "Label:", initialValue = 0, onUpdate = (_value: number) => {} }) {
  return renderComponent(CounterTest, {
    label, initialValue, onUpdate
  });
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
    const { screen } = renderCounter({ label: "Counter: " });
    expect(screen.getByRole("button")).toHaveTextContent(/Counter: 0/);
  });

  it("renders different values", () => {
    const { screen } = renderCounter({ label: "Hits: ", initialValue: 5 });
    expect(screen.getByRole("button")).toHaveTextContent(/Hits: 5/);
  });

  it("clicking the button increases the value", async () => {
    const onUpdate = vi.fn()
    const { screen, user } = renderCounter({
      label: "Counter: ",
      initialValue: 5,
      onUpdate
    });
    const button = screen.getByText("Counter", { exact: false });
    await user.click(button);
    await waitFor(() => {
      expect(onUpdate).toHaveBeenCalledWith(6)
      expect(screen.getByRole("button")).toHaveTextContent(/Counter: 6/);
    });
  });
});
