import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoSkype } from "ionicons/icons";

const Home = () => {
  return (
    <section className="section-home">
      <div className="home-text">
        <div>
          <p className="hello">Hello,</p>
          <p className="intro">I'm Maja Djordjevic</p>
          <p className="position">Junior React Developer</p>
        </div>
        <ul className="profiles-list">
          <li className="li-logo">
            <a
              href="https://rs.linkedin.com/in/maja-stojanovic-a24610176"
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
              href="https://join.skype.com/invite/inLQhtFlPSdH"
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
