import data from "../data";
import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";

const Projects = () => {
  const { dataProjects } = data;
  return (
    <motion.section
      className="section-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <h2 className="heading-primary">Projects</h2>
      {dataProjects.map((d) => (
        <figure className="project" key={d.id}>
          <picture className="project-img">
            <source srcSet={d.sourceWebP} type="image/webp" />
            <source srcSet={d.sourcePng} type="image/png" />
            <img src={d.sourceWebP} alt={d.title} className="project-img" />
          </picture>
          <div className="text-box">
            <h3 className="heading-tertiary">{d.title}</h3>
            <p className="aboutme-text project-text">{d.text}</p>
            <ul className="profiles-list ">
              <li className="li-logo" key={d.id}>
                <a href={d.link} className="profile-link " target="_blank">
                  <IonIcon
                    icon={d.icon}
                    className="ion-icon"
                    title={d.titleIcon}
                  ></IonIcon>
                </a>
              </li>
            </ul>
          </div>
        </figure>
      ))}

      <a
        className="about-cta projects-view"
        href="https://github.com/maja4s91"
        target="_blank"
      >
        View all projects&nbsp;&nbsp;➔
      </a>
    </motion.section>
  );
};

export default Projects;
