import { render, fireEvent } from "@testing-library/react";
import ForFans from "./ForFans";

describe("ForFans component", () => {
  test("clicking on the typography should open the menu", () => {
    const { getByTestId, queryByTestId } = render(<ForFans />);
    const typography = getByTestId("forfans-typography");
    expect(queryByTestId("forfans-popper")).toBeNull();
    fireEvent.click(typography);
    expect(queryByTestId("forfans-popper")).not.toBeNull();
  });

  test("clicking on each menu item should close the menu", () => {
    const { getByTestId, queryByTestId, queryAllByTestId } = render(<ForFans />);
    const typography = getByTestId("forfans-typography");
    expect(queryByTestId("forfans-popper")).toBeNull();
    fireEvent.click(typography);
    expect(queryByTestId("forfans-popper")).not.toBeNull();

    const items = queryAllByTestId("forfans-menu-item");

    items.forEach((item) => {
      fireEvent.click(item);
      expect(queryByTestId("forfans-popper")).toBeNull();
    });
  });
});
