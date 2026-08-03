import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🐞 Issue Tracker
      </div>

      <nav className="nav-links">
        <Link to="/">Board</Link>
        <Link to="/new">Create Ticket</Link>
      </nav>

      <div className="profile">
        <div className="avatar">A</div>
      </div>
    </header>
  );
}

export default Header;