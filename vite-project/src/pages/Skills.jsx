import SkillsIcons from "../components/SkillsIcons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      className="section-skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <h2 className="heading-primary">Skills</h2>
      <SkillsIcons />
    </motion.section>
  );
};

export default Skills;
