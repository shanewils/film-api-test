import React from "react";
import { render } from "@testing-library/react";
import Result from "./Result";

describe("Result tests", () => {
  it("should render", () => {
    expect(render(<Result />)).toBeTruthy();
  });
});
