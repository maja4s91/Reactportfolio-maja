import { IonIcon } from "@ionic/react";
import {
  codeOutline,
  chatbubblesOutline,
  shareSocialOutline,
  cameraOutline,
} from "ionicons/icons";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);

  return (
    <section className="section-about" ref={aboutRef}>
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
            industry. I’ve previously worked as a Technical Recruiter and HR
            Manager in two different IT companies. Over the last year, I’ve been
            actively studying and learning Web Development by taking courses in
            React, JavaScript, HTML, and CSS. So far, I’ve developed several
            projects on my own, including this portfolio and it has been more
            than a thrilling journey for me. I'm passionate about Web
            Development, and I'm seeking opportunities to build up my career and
            gain more experience in this field. My enthusiasm for this field
            combined with my prior experience has enabled me to gain a unique
            skill set that can be effectively put into use while working as a
            Junior React Developer. I'm highly organized and possess excellent
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
