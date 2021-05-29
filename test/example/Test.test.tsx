import React from "react";
import { render } from "@testing-library/react";
import Test from "./Test";

describe("App", () => {
  test("renders App component", () => {
    render(<Test />);
  });
});
