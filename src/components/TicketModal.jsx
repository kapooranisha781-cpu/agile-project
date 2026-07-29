function TicketModal({ ticket, onClose }) {
  if (!ticket) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Ticket</h2>

        <label>Title</label>
        <input
          type="text"
          defaultValue={ticket.title}
        />

        <label>Description</label>
        <textarea
          defaultValue={ticket.description}
        />

        <label>Priority</label>
        <select defaultValue={ticket.priority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Assignee</label>
        <input
          type="text"
          defaultValue={ticket.assignee}
        />

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TicketModal;