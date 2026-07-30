import Ticket from "./Ticket";

function Column({
  title,
  status,
  tickets,
  onSelect,
}) {
  const filteredTickets = tickets.filter(
    (ticket) => ticket.status === status
  );

  return (
    <div className="column">
      <h2>
        {title} ({filteredTickets.length})
      </h2>

      {filteredTickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Column;