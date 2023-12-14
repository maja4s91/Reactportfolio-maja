import { IonIcon } from "@ionic/react";
import dataSocialIcons from "../data/dataSocialIcons";

export default function SocialMediaIcons() {
  return (
    <ul className="profiles-list">
      {dataSocialIcons.map((d) => (
        <li className="li-logo" key={d.id}>
          <a href={d.link} className="profile-link" target="_blank">
            <IonIcon
              icon={d.icon}
              className="ion-icon"
              title="LinkedIn"
            ></IonIcon>
          </a>
        </li>
      ))}
    </ul>
  );
}
