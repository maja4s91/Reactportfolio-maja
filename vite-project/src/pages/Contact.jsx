import { IonIcon } from "@ionic/react";
import { pinOutline, mailOutline, callOutline } from "ionicons/icons";
import Form from "../components/Form";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="section-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
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
            <SocialMediaIcons />
          </div>
        </address>
        <Form />
      </div>
    </motion.section>
  );
};

export default Contact;
