// src/__test__/header/index.spec.jsx
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../components/Header/AlertLogout", () => ({
  __esModule: true,
  default: ({ handleLogout }) => (
    <button onClick={handleLogout} data-testid="alert-logout">
      Logout Alert
    </button>
  ),
}));

describe("Header Component", () => {
  const mockStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  const mockNavigate = jest.fn();

  beforeEach(() => {
    global.Storage.prototype.getItem = mockStorage.getItem;
    global.Storage.prototype.setItem = mockStorage.setItem;
    global.Storage.prototype.removeItem = mockStorage.removeItem;
    global.Storage.prototype.clear = mockStorage.clear;

    mockStorage.getItem.mockClear();
    mockStorage.setItem.mockClear();
    mockStorage.removeItem.mockClear();
    mockStorage.clear.mockClear();
    mockNavigate.mockClear();
  });

  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it("should render header with logo and navigation", () => {
    mockStorage.getItem.mockReturnValue(null); // Not logged in
    renderHeader();

    expect(screen.getByText("DemoApp")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
  });

  it("should render login button when token is not present", () => {
    mockStorage.getItem.mockReturnValue(null); // Not logged in
    renderHeader();

    expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
    expect(screen.queryByTestId("alert-logout")).not.toBeInTheDocument();
  });

  it("should render logout alert when token is present", () => {
    mockStorage.getItem.mockReturnValue("fake-token"); // Logged in
    renderHeader();

    expect(screen.getByTestId("alert-logout")).toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });

  it("should handle logout correctly", async () => {
    mockStorage.getItem.mockReturnValue("fake-token"); // Initially logged in
    renderHeader();

    const logoutButton = screen.getByTestId("alert-logout");

    await act(async () => {
      fireEvent.click(logoutButton);
    });

    expect(mockStorage.removeItem).toHaveBeenCalledWith("token");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("should toggle mobile menu", () => {
    mockStorage.getItem.mockReturnValue(null);
    renderHeader();

    const menuButton = screen.getByRole("button", { name: /menu/i });

    expect(screen.queryByRole("navigation", {})).not.toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.getByRole("navigation", {})).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.queryByRole("navigation", {})).not.toBeInTheDocument();
  });

  it("should handle mobile logout correctly", async () => {
    mockStorage.getItem.mockReturnValue("fake-token"); // Logged in
    renderHeader();

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    const mobileLogoutButton = screen.getAllByText("Logout")[0];

    await act(async () => {
      fireEvent.click(mobileLogoutButton);
    });

    expect(mockStorage.removeItem).toHaveBeenCalledWith("token");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("should check auth status on mount", () => {
    mockStorage.getItem.mockReturnValue("fake-token");
    renderHeader();

    expect(mockStorage.getItem).toHaveBeenCalledWith("token");
    expect(screen.getByTestId("alert-logout")).toBeInTheDocument();
  });

  it("should have correct styling", () => {
    mockStorage.getItem.mockReturnValue(null);
    renderHeader();

    const header = screen.getByRole("banner");
    expect(header).toHaveClass(
      "px-4",
      "py-4",
      "bg-white",
      "border-b-4",
      "border-black",
      "dark:border-white"
    );
  });

  it("should have correct navigation links", () => {
    mockStorage.getItem.mockReturnValue(null);
    renderHeader();

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("User").closest("a")).toHaveAttribute(
      "href",
      "/user"
    );
    expect(screen.getAllByText("Login")[0].closest("a")).toHaveAttribute(
      "href",
      "/login"
    );
  });
});
