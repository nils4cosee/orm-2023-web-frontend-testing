import {render, screen, within} from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

export function renderComponent<P>(component: any, props: P) {
    const {emitted, rerender} = render(component, { props: props as any });
    const user = userEvent.setup();
    return { screen, within, user, emitted, rerender };
}
