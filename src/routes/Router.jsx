import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { LayoutProvider } from "../providers";
import { config_routes } from "./routes.config.jsx";

export default function Router() {
  return (
    <Routes>
      {config_routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<LayoutProvider>{element}</LayoutProvider>}
        />
      ))}
    </Routes>
  );
}
