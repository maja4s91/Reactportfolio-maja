import { IonIcon } from "@ionic/react";
import data from "../data";

export default function SocialMediaIcons() {
  const { dataSocialIcons } = data;
  return (
    <ul className="profiles-list">
      {dataSocialIcons.map((d) => (
        <li className="li-logo" key={d.id}>
          <a href={d.link} className="profile-link" target="_blank">
            <IonIcon
              icon={d.icon}
              className="ion-icon"
              title={d.title}
            ></IonIcon>
          </a>
        </li>
      ))}
    </ul>
  );
}
