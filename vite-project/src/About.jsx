import { IonIcon } from "@ionic/react";
import {
  codeOutline,
  chatbubblesOutline,
  shareSocialOutline,
  cameraOutline,
} from "ionicons/icons";
import { useSelector } from "react-redux";

const About = () => {
  const { about } = useSelector((state) => state.about);
  return (
    <section className="section-about">
      <h2 className="heading-primary">About</h2>
      <picture className="about-img">
        <source srcSet="./Maja-About.webp" type="image/webp" />
        <source srcSet="./Maja-About.png" type="image/png" />
        <img src="./Maja-About.png" alt="Maja's image" className="about-img" />
      </picture>

      <div className="about-text">
        <div className="text-icon">
          {about.map((a) => (
            <p className="aboutme-text " key={a.id}>
              {a.about}
            </p>
          ))}

          <ul className="aboutme-icons">
            <li className="aboutme-icon">
              <IonIcon
                className="ion-icon about-ion-icon"
                icon={codeOutline}
              ></IonIcon>
              <h3 className="heading-tertiary">Code</h3>
              <p className="icon-text">Love coding and learning</p>
            </li>
            <li className="aboutme-icon">
              <IonIcon
                className="ion-icon about-ion-icon"
                icon={chatbubblesOutline}
              ></IonIcon>
              <h3 className="heading-tertiary">Teamwork</h3>
              <p className="icon-text">Love working in teams</p>
            </li>
            <li className="aboutme-icon">
              <IonIcon
                className="ion-icon about-ion-icon"
                icon={shareSocialOutline}
              ></IonIcon>
              <h3 className="heading-tertiary">Share</h3>
              <p className="icon-text">Love sharing my knowladge</p>
            </li>
            <li className="aboutme-icon">
              <IonIcon
                className="ion-icon about-ion-icon"
                icon={cameraOutline}
              ></IonIcon>
              <h3 className="heading-tertiary">Photo</h3>
              <p className="icon-text">Love taking photos</p>
            </li>
          </ul>
        </div>
        <a className="about-cta" href="./Maja's CV.pdf" download="Maja's CV">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
