import { BrowserRouter, Route } from "react-router-dom";
import { SignIn } from "./modules/pages/SignIn";
import { SignUp } from "./modules/pages/SignUp";
import { Routes } from "react-router";

export const routes = [
  { path: "/auth/signIn", element: <SignIn /> },
  { path: "/auth/signUp", element: <SignUp /> },
  { path: "/play/battles", element: <></> },
  { path: "/play/garage", element: <></> },
  { path: "/play/battle/:battleId", element: <></> },
];

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((data) => (
        <Route key={data.path} index {...data} />
      ))}
    </Routes>
  </BrowserRouter>
);
