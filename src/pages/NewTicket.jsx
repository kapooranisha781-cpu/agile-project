import { Form, redirect, Link } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { createTicket } from "../api/ticketsApi";
import "../styles/NewTicket.css";

export async function createTicketAction({ request }) {
  const formData = await request.formData();

  const ticket = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    assignee: formData.get("assignee"),
    status: formData.get("status"),
    createdAt: new Date().toISOString(),
  };

  await createTicket(ticket);

  return redirect("/");
}

function NewTicket() {
  return (
    <main className="new-ticket-page">

      <div className="page-header">
        <h1>Create New Ticket</h1>
        <p>Fill in the details below to create a new issue.</p>
      </div>

      <div className="form-card">

        <Form method="post" className="ticket-form">

          {/* Title */}
          <div className="form-group full-width">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter ticket title"
              required
            />
          </div>

          {/* Description */}
          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Describe the issue..."
              required
            />
          </div>

          {/* Priority & Status */}
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select id="priority" name="priority">
                <option value="High">🔴 High</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Low">🟢 Low</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status">
                <option value="todo">📋 To Do</option>
                <option value="progress">🚀 In Progress</option>
                <option value="done">✅ Done</option>
              </select>
            </div>

          </div>

          {/* Assignee */}
          <div className="form-group full-width">
            <label htmlFor="assignee">Assignee</label>
            <input
              id="assignee"
              type="text"
              name="assignee"
              placeholder="Enter assignee name"
              required
            />
          </div>

          {/* Buttons */}
          <div className="form-buttons">

            <Link to="/" className="back-btn">
              <FiArrowLeft />
              Back
            </Link>

            <button type="submit" className="submit-btn">
              <FiPlus />
              Create Ticket
            </button>

          </div>

        </Form>

      </div>

    </main>
  );
}

export default NewTicket;