import api from "./api";

// Get All Tickets
export async function getTickets() {
  const { data } = await api.get("/tickets");
  return data;
}

// Create Ticket
export async function createTicket(ticket) {
  const { data } = await api.post("/tickets", ticket);
  return data;
}

// Update Ticket
export async function updateTicket(ticket) {
  const { data } = await api.patch(
    `/tickets/${ticket.id}`,
    ticket
  );

  return data;
}

// Delete Ticket
export async function deleteTicket(id) {
  await api.delete(`/tickets/${id}`);
}