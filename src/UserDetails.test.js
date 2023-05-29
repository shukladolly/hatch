import { render, screen, fireEvent } from "@testing-library/react";
import UserDetails from "./UserDetails";

const options = [
  {
    label: "New Products",
    value: "New Products",
    nodeDept: "Engineering",
  },
  {
    label: "Industrial Eng",
    value: "Industrial Eng",
    nodeDept: "Engineering",
  },
  {
    label: "Purchasing",
    value: "Purchasing",
    nodeDept: "Supply Chain Mgmt",
  },
  {
    label: "Planning",
    value: "Planning",
    nodeDept: "Supply Chain Mgmt",
  },
  {
    label: "Warehouse & Logistics",
    value: "Warehouse & Logistics",
    nodeDept: "Supply Chain Mgmt",
  },
  {
    label: "Customer Service",
    value: "Customer Service",
    nodeDept: "Supply Chain Mgmt",
  },
  {
    label: "Workshop1",
    value: "Workshop1",
    nodeDept: "Production",
  },
  {
    label: "Workshop2",
    value: "Workshop2",
    nodeDept: "Production",
  },
  {
    label: "Maintenance",
    value: "Maintenance",
    nodeDept: "Production",
  },
  {
    label: "Quality Control",
    value: "Quality Control",
    nodeDept: "Quality",
  },
  {
    label: "Calibration",
    value: "Calibration",
    nodeDept: "Quality",
  },
  {
    label: "Quality Engineering",
    value: "Quality Engineering",
    nodeDept: "Quality",
  },
];

describe("UserDetails", () => {
  test("Check if custom-select exists", () => {
    const { getByTestId } = render(<UserDetails />);

    // Get the element that displays the state value
    const stateElement = getByTestId("custom-select");

    // Assert that the state value exists
    expect(stateElement).toBeInTheDocument();
  });

  test("renders UserDetails component", () => {
    render(<UserDetails user={options} />);

    // Check if the custom-select container is rendered
    const selectContainer = screen.getByTestId("custom-select");
    expect(selectContainer).toBeInTheDocument();

    // Check if the Select component is rendered
    const selectComponent = screen.getByRole("combobox");
    expect(selectComponent).toBeInTheDocument();
  });
});
