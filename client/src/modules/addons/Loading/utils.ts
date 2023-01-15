import { motion } from "framer-motion";

export const images = [
  "url(./assets/loader/ls-0.jpg)",
  "url(./assets/loader/ls-1.jpg)",
  "url(./assets/loader/ls-2.jpg)",
];

export const bulletsAnimationProps = {
  as: motion.div,
  initial: {
    x: -400,
  },
  animate: {
    x: [-400, 900],
  },
  transition: { duration: 2, repeat: Infinity },
};
