import React from "react";
import { render } from "@testing-library/react";
import Results from "./Results";

describe("Results tests", () => {
  it("should render", () => {
    expect(render(<Results />)).toBeTruthy();
  });
});
