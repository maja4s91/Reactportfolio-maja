import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoSkype } from "ionicons/icons";

export default function SocialMediaIcons() {
  return (
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
  );
}
