import { IonIcon } from "@ionic/react";
import {
  logoReact,
  logoHtml5,
  logoCss3,
  logoJavascript,
  personOutline,
  chatbubblesOutline,
} from "ionicons/icons";

const Skills = () => {
  return (
    <section className="section-skills">
      <h2 className="heading-primary">Skills</h2>
      <ul className="skills-container">
        <li className="skills-list">
          <IonIcon
            className="ion-icon skills-ion-icon"
            icon={logoReact}
          ></IonIcon>
          <h3 className="heading-tertiary h-skills">React</h3>
        </li>
        <li className="skills-list">
          <IonIcon
            className="ion-icon skills-ion-icon"
            icon={logoHtml5}
          ></IonIcon>
          <h3 className="heading-tertiary h-skills">HTML</h3>
        </li>
        <li className="skills-list">
          <IonIcon
            className="ion-icon skills-ion-icon"
            icon={logoCss3}
          ></IonIcon>
          <h3 className="heading-tertiary h-skills">CSS</h3>
        </li>
        <li className="skills-list">
          <IonIcon
            className="ion-icon skills-ion-icon"
            icon={logoJavascript}
          ></IonIcon>
          <h3 className="heading-tertiary h-skills">JavaScript</h3>
        </li>

        <li className="skills-list">
          <IonIcon
            className="ion-icon skills-ion-icon"
            icon={personOutline}
          ></IonIcon>
          <h3 className="heading-tertiary h-skills">Creativity skills</h3>
        </li>
        <li className="skills-list">
          <IonIcon
            className="ion-icon skills-ion-icon"
            icon={chatbubblesOutline}
          ></IonIcon>
          <h3 className="heading-tertiary h-skills">Team player</h3>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
