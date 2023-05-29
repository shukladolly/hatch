import React from "react";
import { render } from "@testing-library/react";
import OrgChart from "./OrgChart";

describe("OrgCharts", () => {
  test('should render the text "Hello, World!"', () => {
    const { getByText } = render(<OrgChart />);

    // Check if the text is present
    const textElement = getByText("Welcome to the department discovery");
    expect(textElement).toBeInTheDocument();
  });

  test("Kindly select your role", () => {
    const { queryByText } = render(<OrgChart />);
    const textElement = queryByText("Kindly select your role");
    expect(textElement).toBeInTheDocument();
  });
});
