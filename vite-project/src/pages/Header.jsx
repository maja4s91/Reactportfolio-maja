import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";

import { useState } from "react";
import DownloadCv from "../components/DownloadCv";
import ParticlesComponent from "../components/ParticleBackground/ParticlesComponent.jsx";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMobClick = () => {
    setIsActive(!isActive);
  };

  const handleMobileMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header className={isActive ? "header nav-open " : "header"}>
      <Link to="/" className="logo">
        Portfolio
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link" onClick={handleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={handleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link" onClick={handleMobileMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="nav-link"
              onClick={handleMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={handleMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <DownloadCv className={"nav-link nav-cta"} />
          </li>
        </ul>
      </nav>
      <button className="btn-mob-nav" onClick={handleMobClick}>
        {isActive ? (
          <IonIcon className="icon-mobile-nav" icon={closeOutline}></IonIcon>
        ) : (
          <IonIcon className="icon-mobile-nav" icon={menuOutline}></IonIcon>
        )}
      </button>
      <ParticlesComponent />
    </header>
  );
};

export default Header;
