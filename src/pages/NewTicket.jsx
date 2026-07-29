import { Form, redirect } from "react-router-dom";
import { createTicket } from "../api/ticketsApi";

export async function createTicketAction({ request }) {
  const formData = await request.formData();

  const ticket = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    assignee: formData.get("assignee"),
    status: formData.get("status"),
  };

  await createTicket(ticket);

  return redirect("/");
}

function NewTicket() {
  return (
    <div className="new-ticket-page">
      <h1>Create New Ticket</h1>

      <Form method="post" className="ticket-form">
        <input
          type="text"
          name="title"
          placeholder="Ticket Title"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          required
        />

        <select name="priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          type="text"
          name="assignee"
          placeholder="Assignee"
          required
        />

        <select name="status">
          <option value="todo">To Do</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <button type="submit">Create Ticket</button>
      </Form>
    </div>
  );
}

export default NewTicket;