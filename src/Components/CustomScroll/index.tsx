import "../../index.css";
import { motion, useScroll } from "framer-motion";

export default function CustomScroll() {
  const { scrollYProgress } = useScroll();

  return (
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}/>
  );
}