import React, { useCallback } from "react";
import { useUpdateTicket } from "../hooks/useUpdateTicket";

function Ticket({ ticket, onSelect }) {
  const { mutate } = useUpdateTicket();

  const moveForward = useCallback(() => {
    const nextStatus = {
      todo: "progress",
      progress: "done",
    };

    mutate({
      ...ticket,
      status: nextStatus[ticket.status],
    });
  }, [ticket, mutate]);

  const moveBackward = useCallback(() => {
    const previousStatus = {
      progress: "todo",
      done: "progress",
    };

    mutate({
      ...ticket,
      status: previousStatus[ticket.status],
    });
  }, [ticket, mutate]);

  return (
    <div className="ticket" onClick={() => onSelect(ticket)}>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>{ticket.priority}</p>
      <p>{ticket.assignee}</p>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: "flex", gap: "10px" }}
      >
        {ticket.status !== "todo" && (
          <button onClick={moveBackward}>←</button>
        )}

        {ticket.status !== "done" && (
          <button onClick={moveForward}>→</button>
        )}
      </div>
    </div>
  );
}

export default React.memo(Ticket);