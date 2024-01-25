import SkillsIcons from "../components/SkillsIcons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex-center">
      <motion.section
        className="section-skills"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="heading-primary">Skills</h2>
        <SkillsIcons />
      </motion.section>
    </div>
  );
};

export default Skills;
