import React, { useCallback } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiFlag,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import useUpdateTicket from "../hooks/useUpdateTicket";
import useDeleteTicket from "../hooks/useDeleteTicket";

import "../styles/Ticket.css";
import "../styles/Button.css";

function Ticket({ ticket, onSelect }) {
  const { mutate } = useUpdateTicket();
  const { mutate: deleteTicket } = useDeleteTicket();

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

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ticket?"
    );

    if (confirmDelete) {
      deleteTicket(ticket.id);
    }
  };

  return (
    <article className="ticket">
      <h3>{ticket.title}</h3>

      <p className="ticket-description">
        {ticket.description}
      </p>

      <div className="ticket-meta">
        <span
          className={`priority ${ticket.priority?.toLowerCase()}`}
        >
          <FiFlag />
          {ticket.priority}
        </span>

        <span className="assignee">
          <FiUser />
          {ticket.assignee}
        </span>
      </div>

      <div
        className="ticket-actions"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Edit */}
        <button
          className="edit-btn"
          onClick={() => onSelect(ticket)}
        >
          <FiEdit />
          Edit
        </button>

        {/* Move Back */}
        {ticket.status !== "todo" && (
          <button
            className="move-btn"
            onClick={moveBackward}
            title="Move Back"
          >
            <FiArrowLeft />
          </button>
        )}

        {/* Move Forward */}
        {ticket.status !== "done" && (
          <button
            className="move-btn"
            onClick={moveForward}
            title="Move Forward"
          >
            <FiArrowRight />
          </button>
        )}

        {/* Delete */}
        <button
          className="delete-btn"
          onClick={handleDelete}
          title="Delete Ticket"
        >
          <FiTrash2 />
        </button>
      </div>
    </article>
  );
}

export default React.memo(Ticket);