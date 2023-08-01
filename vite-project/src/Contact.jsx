import { IonIcon } from "@ionic/react";
import {
  pinOutline,
  mailOutline,
  callOutline,
  logoLinkedin,
  logoGithub,
  logoSkype,
} from "ionicons/icons";

const Contact = () => {
  return (
    <section className="section-contact">
      <h2 className="heading-primary">Contact</h2>
      <form
        className="form-box"
        name="contacts"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contacts" />
        <address className="contacts-box">
          <p className="contact-intro">Let's talk about everything!</p>

          <div className="contact">
            <p className="contact-locat">
              <IonIcon icon={pinOutline} className="contact-icon" />
              Belgrade, 11000
            </p>
            <p className="contact-email">
              <IonIcon icon={mailOutline} className="contact-icon"></IonIcon>
              majastojanovic4@gmail.com
            </p>
            {/* <p className="contact-mob">
          <IonIcon icon={callOutline} className="contact-icon"></IonIcon>
          +381695666301
        </p>  */}
            <ul className="profiles-list contact-li">
              <li className="li-logo">
                <a
                  className="profile-link"
                  href="https://rs.linkedin.com/in/maja-stojanovic-a24610176"
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
                  href="https://join.skype.com/invite/inLQhtFlPSdH"
                  target="_blank"
                >
                  <IonIcon icon={logoSkype} className="ion-icon"></IonIcon>
                </a>
              </li>
            </ul>
          </div>
        </address>

        <div className="form contact-form">
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
        </div>
      </form>
    </section>
  );
};

export default Contact;
