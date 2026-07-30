import api from "./api";

export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

export const createTicket = async (ticket) => {
  const response = await api.post("/tickets", ticket);
  return response.data;
};

// NEW
export const updateTicket = async (ticket) => {
  const response = await api.patch(`/tickets/${ticket.id}`, ticket);
  return response.data;
};