import React from "react";
import { motion } from "framer-motion";

const AnimatedCircles = () => {
  const circleVariants = {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      scale: [1, 1.5, 1],
      x: [0, 50, -50, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        // repeatType: "mirror", // Correcting repeatType to match expected type
      },
    },
    hover: {
      scale: 1.8,
      rotateZ: 180,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="circle-container">
        <motion.div
          className="circle circle1"
          variants={circleVariants}
          initial="animate"
          animate="animate"
          whileHover="hover" // Applying hover effect
        />
        <motion.div
          className="circle circle2"
          variants={circleVariants}
          initial="animate"
          animate="animate"
          whileHover="hover"
        />
        <motion.div
          className="circle circle3"
          variants={circleVariants}
          initial="animate"
          animate="animate"
          whileHover="hover"
        />
      </div>
    </>
  );
};

export default AnimatedCircles;
