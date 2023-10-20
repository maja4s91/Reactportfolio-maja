import { IonIcon } from "@ionic/react";
import {
  pinOutline,
  mailOutline,
  callOutline,
  logoLinkedin,
  logoGithub,
  logoSkype,
} from "ionicons/icons";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="section-contact">
      <h2 className="heading-primary">Contact</h2>
      <div className="form-box">
        <address className="contacts-box">
          <p className="contact-intro">Let's talk about everything!</p>

          <div className="contact">
            <p className="contact-locat">
              <IonIcon icon={pinOutline} className="contact-icon" />
              Belgrade, 11000
            </p>
            <p className="contact-email">
              <IonIcon icon={mailOutline} className="contact-icon"></IonIcon>
              maja17129@gmail.com
            </p>
            {/* <p className="contact-mob">
          <IonIcon icon={callOutline} className="contact-icon"></IonIcon>
          
        </p>  */}
            <ul className="profiles-list contact-li">
              <li className="li-logo">
                <a
                  className="profile-link"
                  href="https://www.linkedin.com/in/maja-17129-a24610176"
                  target="_blank"
                >
                  <IonIcon icon={logoLinkedin} className="ion-icon"></IonIcon>
                </a>
              </li>
              <li className="li-logo">
                <a
                  className="profile-link"
                  href="https://github.com/maja4s91"
                  target="_blank"
                >
                  <IonIcon icon={logoGithub} className="ion-icon"></IonIcon>
                </a>
              </li>
              <li className="li-logo">
                <a
                  className="profile-link"
                  href="https://join.skype.com/invite/EYCs3HXvOxL9"
                  target="_blank"
                >
                  <IonIcon icon={logoSkype} className="ion-icon"></IonIcon>
                </a>
              </li>
            </ul>
          </div>
        </address>
        <Form />

        {/* <form className="form contact-form">
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email*"
              required
            />
          </label>
          <label htmlFor="name">
            <input type="text" name="name" id="name" placeholder="Subject" />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Message*"
              rows="3"
              required
            ></textarea>
          </label>
          <button className="btn-contact">Send message</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
