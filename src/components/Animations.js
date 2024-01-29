"use client";
import { motion } from "framer-motion";
import { Children } from "react";

export default function Animations() {
  return (
    <motion.div
      className="animate"
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }} >
      {Children}
    </motion.div>
  );
}
