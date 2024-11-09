/* eslint-disable no-undef */
import Button from "@/components/ui/button";
import { render } from "@testing-library/react";

describe("Button Component", () => {
  it("render button component", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
