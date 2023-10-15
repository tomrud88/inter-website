import { render,fireEvent, queryAllByTestId } from "@testing-library/react";
import Team from "./Team";

describe("Team component", () => {
  test("clicking on the typography should open the menu", () => {
    const { getByTestId,queryByTestId } = render(<Team />);
    const typography = getByTestId("team-typography");
    expect(queryByTestId("team-popper")).toBeNull();
    fireEvent.click(typography);
    expect(queryByTestId("team-popper")).not.toBeNull();
  });
    
    test("clicking on each menu item should close the menu", () => {
      const { getByTestId, queryByTestId, queryAllByTestId } = render(<Team />);
        const typography = getByTestId("team-typography");
      expect(queryByTestId("team-popper")).toBeNull();
      fireEvent.click(typography);
      expect(queryByTestId("team-popper")).not.toBeNull();
      
      const items = queryAllByTestId('team-menu-item'); 
      
      items.forEach((item) => {
        fireEvent.click(item);
        expect(queryByTestId("team-popper")).toBeNull();
      })
       
    });

  
});
