import { IonIcon } from "@ionic/react";
import {
  codeOutline,
  chatbubblesOutline,
  shareSocialOutline,
  cameraOutline,
} from "ionicons/icons";

const About = () => {
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
          <p className="aboutme-text">
            I’m a Junior React Developer, who has successfully completed several
            courses in Web Development and have a strong background in the IT
            industry. I'm currently engaged in an internship at the IT company
            "Ogitive", where I'm presented with a remarkable opportunity to
            enhance my skill set and contribute meaningfully to the
            organization. My primary responsibilities involve collaborating on
            the development of responsive websites and engaging in direct
            communication with clients to fulfill their project requirements.
            I’ve previously worked as a Technical Recruiter and HR Manager in
            two different IT companies. I'm skilled in React, JavaScript, HTML
            and CSS. So far, I’ve developed several projects on my own, and it
            has been more than a thrilling journey for me. I'm passionate about
            Web Development, highly organized and possess excellent
            communication skills.
          </p>
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
