import { BrowserRouter, Routes, Route } from "react-router-dom";

export const routes = [
  { path: "/auth/signIn", element: "" },
  { path: "/auth/signUp", element: "" },
  { path: "/play/battles", element: "" },
  { path: "/play/garage", element: "" },
  { path: "/play/battle/:battleId", element: "" },
];

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((data) => (
          <Route index {...data} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
