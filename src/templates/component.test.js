import React from "react";
import { render } from "@testing-library/react";
import COMPONENT_NAME from "./COMPONENT_NAME";

it("has a COMPONENT_NAME component", () => {
  const { getByText } = render(<COMPONENT_NAME />);
  expect(getByText("COMPONENT_NAME")).toBeInTheDocument();
});
