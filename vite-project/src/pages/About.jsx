import data from "../data";
import AboutIcons from "../components/AboutIcons";
import DownloadCv from "../components/DownloadCv";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container-width">
    <motion.section
      className="section-about"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="heading-primary">About</h2>
      <motion.picture
        className="about-img"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 80, 80, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <source srcSet="./imgs/Maja-About.webp" type="image/webp" />
        <source srcSet="./imgs/Maja-About.png" type="image/png" />
        <img
          src="./imgs/Maja-About.png"
          alt="Maja's image"
          className="about-img"
        />
      </motion.picture>

      <div className="about-text">
        <div className="text-icon">
          <p className="aboutme-text ">{data.about}</p>
          <AboutIcons />
        </div>
        <DownloadCv className={"about-cta"} />
      </div>
    </motion.section>
    </div>
  );
};

export default About;
