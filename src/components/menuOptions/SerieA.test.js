import { render, fireEvent } from "@testing-library/react";
import SerieA from "./SerieA";

describe("SerieA component", () => {
  test("clicking on the typography should open the menu", () => {
    const { getByTestId, queryByTestId } = render(<SerieA />);
    const typography = getByTestId("seriea-typography");
    expect(queryByTestId("team-popper")).toBeNull();
    fireEvent.click(typography);
    expect(queryByTestId("team-popper")).not.toBeNull();
  });

  test("clicking on each menu item should close the menu", () => {
    const { getByTestId, queryByTestId, queryAllByTestId } = render(<SerieA />);  
    const typography = getByTestId("seriea-typography");
    expect(queryByTestId("team-popper")).toBeNull();
    fireEvent.click(typography);
    expect(queryByTestId("team-popper")).not.toBeNull();

    const items = queryAllByTestId("seriea-menu-item");

    items.forEach((item) => {
      fireEvent.click(item);
      expect(queryByTestId("team-popper")).toBeNull();
    });
  });
});
