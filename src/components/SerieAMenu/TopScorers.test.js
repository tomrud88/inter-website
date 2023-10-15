import { render } from "@testing-library/react";
import TopScorers from "./TopScorers";

describe("TopScorers component", () => {
  test("renders topscorers if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ name: 'Lautaro', team: 'Inter' }],
    });
      render(<TopScorers />);  
  });
});
