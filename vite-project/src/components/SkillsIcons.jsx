import { IonIcon } from "@ionic/react";
import data from "../data";
import { motion } from "framer-motion";

export default function SkillsIcons() {
  const { dataSkills } = data;
  return (
    <ul className="skills-container">
      {dataSkills.map((d) => (
        <li className="skills-list" key={d.id}>
          {/* <IonIcon className="ion-icon skills-ion-icon" icon={d.icon}></IonIcon> */}
          <motion.img
            src={`../public/imgs-skills/${d.icon}`}
            className="img-skills"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></motion.img>
          <h3 className="heading-tertiary h-skills">{d.title}</h3>
        </li>
      ))}
    </ul>
  );
}
