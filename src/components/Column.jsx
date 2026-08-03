import { useMemo } from "react";
import Ticket from "./Ticket";
import "../styles/Column.css";

function Column({
  title,
  status,
  tickets = [],
  onSelect,
}) {
  const filteredTickets = useMemo(() => {
    return tickets.filter(
      (ticket) => ticket.status === status
    );
  }, [tickets, status]);

  return (
    <section className="column">
      <div className="column-header">
        <h2>{title}</h2>

        <span className="ticket-count">
          {filteredTickets.length}
        </span>
      </div>

      <div className="ticket-list">
        {filteredTickets.length === 0 ? (
          <p className="empty-column">
            No tickets
          </p>
        ) : (
          filteredTickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Column;