import { useRoutes } from "react-router-dom";
import AuthTabs from "./pages/auth-tabs/AuthTabs";
import ForgetPassword from "./pages/auth/forget-password/ForgetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UserManagement from "./pages/innerPage/UserManagement";
import Profile from "./pages/innerPage/Profile";
import AssignJob from "./pages/innerPage/AssignJob";
import Chart from "./pages/innerPage/Chart";

export const AppRoutes = () => {
  const elements = useRoutes([
    {
      path: "/nothing",
      element: <AuthTabs />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/chart",
      element: <Chart />,
    },
    {
      path: "/user-management",
      element: <UserManagement />,
    },
    {
      path: "/assign-job",
      element: <AssignJob />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return elements;
};

export const AuthRoute = () => {
  const element = useRoutes([
 
  ]);
  return element;
};
