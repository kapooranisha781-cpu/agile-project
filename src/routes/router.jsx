import {
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import NewTicket, {
  createTicketAction,
} from "../pages/NewTicket";

import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/new",
    element: <NewTicket />,
    action: createTicketAction,
  },
]);