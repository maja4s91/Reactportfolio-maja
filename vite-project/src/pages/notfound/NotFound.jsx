import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./notfound.css";

export default function NotFound() {
  return (
    <motion.section
      className="not-found"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="not-foundtext">The page couldn't be found</p>
      <Link to={"/"} className="not-foundbtn">
        Back to home page
      </Link>
    </motion.section>
  );
}
