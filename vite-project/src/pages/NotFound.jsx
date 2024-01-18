import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <p className="not-foundtext">The page couldn't be found</p>
      <Link to={"/"} className="not-foundbtn">
        Back to home page
      </Link>
    </motion.section>
  );
}
