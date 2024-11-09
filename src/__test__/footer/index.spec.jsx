/* eslint-disable no-undef */
import Footer from "@/components/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  it("should render footer component", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("should display correct copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      /© 2024 DemoApp. All rights reserved/i
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it("should have correct styling classes", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass("px-4", "py-4", "bg-white", "border-t-4");
  });
});
