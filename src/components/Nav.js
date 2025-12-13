import { useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import './nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">

      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/bookingPage" onClick={() => setIsOpen(false)}>Booking</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/order" onClick={() => setIsOpen(false)}>Order Online</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
