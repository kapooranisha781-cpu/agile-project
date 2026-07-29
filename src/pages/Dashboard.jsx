import { Link } from "react-router-dom";
import Board from "../components/Board";
import { useTickets } from "../hooks/useTickets";

function Dashboard() {
  const { data, isLoading, error } = useTickets();

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Something went wrong!</h2>;

  return (
    <div>
      <h1>Agile Issue Tracker</h1>

      <Link to="/new">
        <button>Create New Ticket</button>
      </Link>

      <Board tickets={data} />
    </div>
  );
}

export default Dashboard;