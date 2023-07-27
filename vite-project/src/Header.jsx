import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Portfolio
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="./Maja's CV.pdf"
              className="nav-link nav-cta"
              download="Maja's CV"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn-mob-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>

        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
