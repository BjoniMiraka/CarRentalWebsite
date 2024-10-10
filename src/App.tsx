import "./App.css";
import { createBrowserRouter } from "react-router-dom";
// import { Home } from "./app/Home/Home";
import { routes } from "./routes";
import { AppLayout } from "./layout/AppLayout";
import { DefaultLayout } from "./layout/DefaultLayout";
import { HomePage } from "./app/Pages/HomePage";

export const app = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            element: <HomePage />,
            path: routes.home,
          },
          {
            element: <div>About</div>,
            path: routes.about,
          },
          {
            element: <div>Contact</div>,
            path: routes.contact,
          },
        ],
      },
    ],
  },
]);
