import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="Images/logo.svg" alt="Logo" />
      <nav>
        <Link className="btn-link" to="/schedule">
          <img className="schedule-icon" src="Images/schedule.png" alt="Schedule" />
          Schedule
        </Link>
        <Link className="btn-link" to="/leaderboard">
          <img className="leaderboard-icon" src="Images/leaderboard.png" alt="Leaderboard" />
          Leaderboard
        </Link>
      </nav>
    </div>
  );
}
