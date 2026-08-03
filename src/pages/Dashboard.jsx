import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiClipboard,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import Board from "../components/Board";
import TicketModal from "../components/TicketModal";
import useTickets from "../hooks/useTickets";

import "../styles/Dashboard.css";

function Dashboard() {
  const {
    data: tickets = [],
    isLoading,
    error,
  } = useTickets();

  const [selectedTicket, setSelectedTicket] =
    useState(null);

  const stats = useMemo(() => {
    return {
      total: tickets.length,
      todo: tickets.filter(
        (t) => t.status === "todo"
      ).length,
      progress: tickets.filter(
        (t) => t.status === "progress"
      ).length,
      done: tickets.filter(
        (t) => t.status === "done"
      ).length,
    };
  }, [tickets]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h2>Loading tickets...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong!</h2>
      </div>
    );
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>🚀 Agile Issue Tracker</h1>
          <p>
            Manage your team's work efficiently.
          </p>
        </div>

        <Link to="/new" className="create-btn">
          <FiPlus />
          <span>New Ticket</span>
        </Link>
      </header>

      {/* Statistics */}
      <section className="dashboard-stats">
        <div className="stat-card total">
          <FiClipboard />
          <div>
            <h3>{stats.total}</h3>
            <p>Total Tickets</p>
          </div>
        </div>

        <div className="stat-card todo">
          <FiClipboard />
          <div>
            <h3>{stats.todo}</h3>
            <p>To Do</p>
          </div>
        </div>

        <div className="stat-card progress">
          <FiClock />
          <div>
            <h3>{stats.progress}</h3>
            <p>In Progress</p>
          </div>
        </div>

        <div className="stat-card done">
          <FiCheckCircle />
          <div>
            <h3>{stats.done}</h3>
            <p>Completed</p>
          </div>
        </div>
      </section>

      <Board
        tickets={tickets}
        onSelect={setSelectedTicket}
      />

      <TicketModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
      />
    </main>
  );
}

export default Dashboard;