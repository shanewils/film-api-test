import React from "react";
import { render } from "@testing-library/react";
import Popup from "./Popup";

describe("Popup tests", () => {
  it("should render", () => {
    expect(render(<Popup />)).toBeTruthy();
  });
});
