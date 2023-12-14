import { IonIcon } from "@ionic/react";
import dataAboutIcons from "./dataAboutIcons";

export default function AboutIcons() {
  return (
    <ul className="aboutme-icons">
      {dataAboutIcons.map((d) => (
        <li className="aboutme-icon" key={d.id}>
          <IonIcon className="ion-icon about-ion-icon" icon={d.icon}></IonIcon>
          <h3 className="heading-tertiary">{d.title}</h3>
          <p className="icon-text">{d.text}</p>
        </li>
      ))}
    </ul>
  );
}
