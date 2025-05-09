"use client";
import { motion, useSpring } from "motion/react";

const DynamicRotation = () => {
  const rotation = useSpring(0);

  const rotateBox = () => {
    rotation.set(rotation.get() + 45);
  };

  return (
    <motion.div
      style={{ rotate: rotation }}
      className="w-32 h-32 bg-blue-500 rounded"
      onClick={rotateBox}
    >
      Click Me
    </motion.div>
  );
};

export default DynamicRotation;
