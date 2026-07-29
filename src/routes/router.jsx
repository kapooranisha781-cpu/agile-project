import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NewTicket, { createTicketAction } from "../pages/NewTicket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/new",
    element: <NewTicket />,
    action: createTicketAction,
  },
]);