import data from "../data";
import AboutIcons from "../components/AboutIcons";
import DownloadCv from "../components/DownloadCv";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="section-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <h2 className="heading-primary">About</h2>
      <picture className="about-img">
        <source srcSet="./imgs/Maja-About.webp" type="image/webp" />
        <source srcSet="./imgs/Maja-About.png" type="image/png" />
        <img
          src="./imgs/Maja-About.png"
          alt="Maja's image"
          className="about-img"
        />
      </picture>

      <div className="about-text">
        <div className="text-icon">
          <p className="aboutme-text ">{data.about}</p>
          <AboutIcons />
        </div>
        <DownloadCv className={"about-cta"} />
      </div>
    </motion.section>
  );
};

export default About;
