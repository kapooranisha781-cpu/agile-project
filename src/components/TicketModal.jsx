import { useEffect, useRef } from "react";
import { useUpdateTicket } from "../hooks/useUpdateTicket";

function TicketModal({ ticket, onClose }) {
  const inputRef = useRef(null);

  const { mutate } = useUpdateTicket();

  useEffect(() => {
    if (ticket) {
      inputRef.current.focus();
    }
  }, [ticket]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!ticket) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    mutate(
      {
        id: ticket.id,
        title: form.title.value,
        description: form.description.value,
        priority: form.priority.value,
        assignee: form.assignee.value,
        status: ticket.status,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Ticket</h2>

        <form onSubmit={handleSubmit}>
          <label>Title</label>

          <input
            ref={inputRef}
            name="title"
            defaultValue={ticket.title}
          />

          <label>Description</label>

          <textarea
            name="description"
            defaultValue={ticket.description}
          />

          <label>Priority</label>

          <select
            name="priority"
            defaultValue={ticket.priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <label>Assignee</label>

          <input
            name="assignee"
            defaultValue={ticket.assignee}
          />

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button type="submit">
              Save Changes
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TicketModal;