import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <span className="nav-title">JIA Flare Project</span>
        </a>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#team" className="nav-link">Task Force</a>
          <a href="#meeting" className="nav-link">Meeting</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="https://flare-scorer.onrender.com" target="_blank" rel="noopener noreferrer" className="nav-btn btn btn-primary">
            Scoring System
          </a>
        </div>
      </div>
    </nav>
  );
}
