import { HomePage, MasterPricePage, NotFoundPage } from "../pages";

export const config_routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/master-price",
    element: <MasterPricePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
