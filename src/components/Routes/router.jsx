import { createBrowserRouter } from "react-router-dom";

import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Users from "../Users/Users";
import Main from "../Main/Main";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },
       {
        path: "signUp",
        element: <SignUp />
       },
       {
        path: "signIn",
        element: <SignIn />
       },
       {
        path: "users",
        element: <PrivateRoute><Users /></PrivateRoute>
       },
       {
        path: "dashboard",
        element: <PrivateRoute><Dashboard/> </PrivateRoute>
       }
      ]
    }
   
  ]);