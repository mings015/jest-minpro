/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import AlertLogout from "../../components/Header/AlertLogout";

jest.mock("@/components/ui/alert-dialog", () => ({
  AlertDialog: ({ children }) => (
    <div data-testid="alert-dialog">{children}</div>
  ),
  AlertDialogTrigger: ({ children }) => (
    <div data-testid="alert-trigger">{children}</div>
  ),
  AlertDialogContent: ({ children }) => (
    <div data-testid="alert-content">{children}</div>
  ),
  AlertDialogHeader: ({ children }) => (
    <div data-testid="alert-header">{children}</div>
  ),
  AlertDialogFooter: ({ children }) => (
    <div data-testid="alert-footer">{children}</div>
  ),
  AlertDialogTitle: ({ children }) => (
    <div data-testid="alert-title">{children}</div>
  ),
  AlertDialogDescription: ({ children }) => (
    <div data-testid="alert-description">{children}</div>
  ),
  AlertDialogAction: ({ onClick, children }) => (
    <button data-testid="alert-action" onClick={onClick}>
      {children}
    </button>
  ),
  AlertDialogCancel: ({ children }) => (
    <button data-testid="alert-cancel">{children}</button>
  ),
}));

// Mock Button component
jest.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick }) => (
    <button data-testid="button" onClick={onClick}>
      {children}
    </button>
  ),
}));

describe("AlertLogout Component", () => {
  const mockHandleLogout = jest.fn();

  beforeEach(() => {
    // Reset mock function before each test
    mockHandleLogout.mockClear();
  });

  it("should render all alert dialog components", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Verify all components are rendered
    expect(screen.getByTestId("alert-dialog")).toBeInTheDocument();
    expect(screen.getByTestId("alert-trigger")).toBeInTheDocument();
    expect(screen.getByTestId("alert-content")).toBeInTheDocument();
    expect(screen.getByTestId("alert-header")).toBeInTheDocument();
    expect(screen.getByTestId("alert-footer")).toBeInTheDocument();
  });

  it("should display correct text content", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Check for text content
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to log out of your account?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "You will be required to log in again to access certain features."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("should trigger handleLogout when logout action is clicked", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Find and click logout button
    const logoutButton = screen.getByTestId("alert-action");
    fireEvent.click(logoutButton);

    // Verify handleLogout was called
    expect(mockHandleLogout).toHaveBeenCalledTimes(1);
  });

  it("should render cancel button", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Verify cancel button exists
    const cancelButton = screen.getByTestId("alert-cancel");
    expect(cancelButton).toBeInTheDocument();
    expect(cancelButton).toHaveTextContent("Cancel");
  });

  it("should not call handleLogout when cancel is clicked", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Find and click cancel button
    const cancelButton = screen.getByTestId("alert-cancel");
    fireEvent.click(cancelButton);

    // Verify handleLogout was not called
    expect(mockHandleLogout).not.toHaveBeenCalled();
  });

  it("should render initial logout trigger button", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Check for the main logout button
    const triggerButton = screen.getByTestId("button");
    expect(triggerButton).toBeInTheDocument();
    expect(triggerButton).toHaveTextContent("Logout");
  });

  it("should have correct button hierarchy", () => {
    render(<AlertLogout handleLogout={mockHandleLogout} />);

    // Verify button structure
    const trigger = screen.getByTestId("alert-trigger");
    expect(trigger.querySelector('[data-testid="button"]')).toBeInTheDocument();
  });

  it("should pass handleLogout prop correctly", () => {
    const { rerender } = render(
      <AlertLogout handleLogout={mockHandleLogout} />
    );

    // Initial render check
    const logoutButton = screen.getByTestId("alert-action");
    fireEvent.click(logoutButton);
    expect(mockHandleLogout).toHaveBeenCalled();

    // New mock function for rerender
    const newMockHandleLogout = jest.fn();
    rerender(<AlertLogout handleLogout={newMockHandleLogout} />);

    // Check if new function is used
    fireEvent.click(logoutButton);
    expect(newMockHandleLogout).toHaveBeenCalled();
  });
});
