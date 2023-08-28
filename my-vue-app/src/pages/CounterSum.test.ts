import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils/renderComponent.ts";
import CounterSum from "./CounterSum.vue";
import { debug } from "vitest-preview";
import { screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

type UserEvent = ReturnType<typeof userEvent.setup>;

describe("CounterSum", () => {
  it("shows the counter", () => {
    const { screen } = renderComponent(CounterSum, {});
    debug();
    expect(screen.getByText(/One/)).toHaveTextContent("One 0");
  });

  it("updates the counter on click", async () => {
    const { screen, user } = renderComponent(CounterSum, {});
    await incrementCounter(user, "One");
    expect(screen.getByText(/One/)).toHaveTextContent("One 1");
  });

  it("updates the sum on click", async () => {
    const { screen, user } = renderComponent(CounterSum, {});
    await incrementCounter(user, "One");
    await incrementCounter(user, "Two");
    expect(screen.getByText("Sum:", { exact: false })).toHaveTextContent(
      "Sum: 2",
    );
  });
});

async function incrementCounter(user: UserEvent, label: string) {
  const button = screen.getByText(label, { exact: false });
  await user.click(button);
}
