import { IonIcon } from "@ionic/react";
import data from "../data";

export default function SkillsIcons() {
  const { dataSkills } = data;
  return (
    <ul className="skills-container">
      {dataSkills.map((d) => (
        <li className="skills-list" key={d.id}>
          <IonIcon className="ion-icon skills-ion-icon" icon={d.icon}></IonIcon>
          <h3 className="heading-tertiary h-skills">{d.title}</h3>
        </li>
      ))}
    </ul>
  );
}
