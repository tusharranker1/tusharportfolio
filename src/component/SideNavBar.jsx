import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Store } from "lucide-react";
import { User } from "lucide-react";
import pdf from '../pdf/CV_2023033117220381.pdf'

export const SideNavBar = () => {
  return (
    <motion.div className="sideNav-wrapper">
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateX(-50px) ",
        }}
        animate={{
          opacity: 1,
          transform: "translateX(0px) scale(1)",
        }}
        exit={{ opacity: 0, transform: "translateX(-50px)" }}
        transition={{ duration: 0.5 }}
      >
        <Link style={{color:'red'}} to='/'><Home /></Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,transform:'scale(2)'
        }}
        animate={{
          opacity: 1,transform:'scale(1)'
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <a style={{color:'red'}} href={pdf} target="__blank"><Store style={{ margin: "0px 30px" }} /></a>
        
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateX(50px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateX(0px) ",
        }}
        exit={{ opacity: 0, transform: "translateX(50px)" }}
        transition={{ duration: 0.5 }}
      >
      <Link style={{color:'red'}} to='/contact'><User /></Link>
        
      </motion.div>
    </motion.div>
  );
};
