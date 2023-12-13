import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoSkype } from "ionicons/icons";
import { useSelector } from "react-redux";

const Home = () => {
  const { home } = useSelector((state) => state.home);

  return (
    <section className="section-home">
      <div className="home-text">
        {home.map((h) => (
          <div key={h.id}>
            <p className="hello">{h.hello}</p>
            <p className="intro">{h.introName}</p>
            <p className="position">{h.position}</p>
          </div>
        ))}

        <ul className="profiles-list">
          <li className="li-logo">
            <a
              href="https://www.linkedin.com/in/maja-17129-a24610176"
              className="profile-link"
              target="_blank"
            >
              <IonIcon
                icon={logoLinkedin}
                className="ion-icon"
                title="LinkedIn"
              ></IonIcon>
            </a>
          </li>
          <li className="li-logo">
            <a
              href="https://github.com/maja4s91"
              className="profile-link"
              target="_blank"
            >
              <IonIcon icon={logoGithub} className="ion-icon"></IonIcon>
            </a>
          </li>
          <li className="li-logo">
            <a
              href="https://join.skype.com/invite/EYCs3HXvOxL9"
              className="profile-link"
              target="_blank"
            >
              <IonIcon icon={logoSkype} className="ion-icon"></IonIcon>
            </a>
          </li>
        </ul>
        <Link to="/about" className="about-me">
          About me&nbsp;🠗
        </Link>
      </div>
      <picture className="home-img">
        <source srcSet="./Maja-Home.webp" type="image/webp" />
        <source srcSet="./Maja-Home.png" type="image/png" />
        <img className="home-img" src="./Maja-Home.png" alt="Maja's profile" />
      </picture>
    </section>
  );
};

export default Home;
