import SkillsIcons from "../../components/SkillsIcons";
import { motion } from "framer-motion";
import "./skills.css";

const Skills = () => {
  return (
    <motion.section
      className="section-skills"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2
        className="heading-primary justify-start 
      "
      >
        Skills
      </h2>
      <SkillsIcons />
    </motion.section>
  );
};

export default Skills;
