import Ticket from "./Ticket";

function Column({ title, status, tickets }) {
  const filteredTickets = tickets.filter(
    (ticket) => ticket.status === status
  );

  return (
    <div className="column">
      <h2>{title}</h2>

      {filteredTickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;