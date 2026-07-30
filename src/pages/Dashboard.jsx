import { useState } from "react";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import TicketModal from "../components/TicketModal";
import { useTickets } from "../hooks/useTickets";

function Dashboard() {
  const { data, isLoading, error } = useTickets();

  const [selectedTicket, setSelectedTicket] = useState(null);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Something went wrong!</h2>;

  return (
    <div>
      <h1>Agile Issue Tracker</h1>

      <Link to="/new">
        <button>Create New Ticket</button>
      </Link>

      <Board
        tickets={data}
        onSelect={setSelectedTicket}
      />

      <TicketModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
      />
    </div>
  );
}

export default Dashboard;