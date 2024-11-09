import DetailUserPage from "@/pages/DetailUserPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import UserListPage from "@/pages/UserListPage";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <UserListPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-detail/:id",
    element: (
      <ProtectedRoute>
        <DetailUserPage />
      </ProtectedRoute>
    ),
  },
];
