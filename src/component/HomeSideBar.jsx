import React, { useState } from "react";
import "../css/HomeSideBar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Braces } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

export const HomeSideBar = () => {
  const [active1, setaActive1] = useState(false);
  const [active2, setaActive2] = useState(false);
  const [active3, setaActive3] = useState(false);
  const [active4, setaActive4] = useState(false);
  const [active5, setaActive5] = useState(false);

  // const[width,getWidth] = useState(window.innerWidth);

  // const getWidthSize=()=>{
  //   getWidth(window.innerWidth);
  // }

  // useEffect(()=>{
  //   window.addEventListener('resize',getWidthSize);
  //   return()=>{
  //     window.removeEventListener('resize',getWidthSize);
  //   }
  // },[width])
  // console.log(width);
  return (
    <motion.div className="side-bar-wrapper">
      <div className="side-content">
        <motion.div
          className="side-bar-component"
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          exit={{ opacity: 0, transform: "translateX(20px)" }}
          transition={{ duration: 1, delay: 0 }}
        >
          <Link
            onMouseOver={() => setaActive1(true)}
            onMouseOut={() => {
              setaActive1(false);
            }}
            to="https://www.linkedin.com/in/tushar2024kumar/"
            className={active1 ? "component-link-active" : "component-link"}
          >
            <Linkedin />
          </Link>
        </motion.div>
        <motion.div
          className="side-bar-component"
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          exit={{ opacity: 0, transform: "translateX(20px)" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link
            onMouseOver={() => setaActive2(true)}
            onMouseOut={() => {
              setaActive2(false);
            }}
            to="https://github.com/tusharranker1"
            className={active2 ? "component-link-active" : "component-link"}
          >
            <Github />
          </Link>
        </motion.div>
        <motion.div
          className="side-bar-component"
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          exit={{ opacity: 0, transform: "translateX(20px)" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            onMouseOver={() => setaActive3(true)}
            onMouseOut={() => {
              setaActive3(false);
            }}
            to="https://auth.geeksforgeeks.org/user/tusharkumar04032002"
            className={active3 ? "component-link-active" : "component-link"}
          >
            <Braces />
          </Link>
        </motion.div>
        <motion.div
          className="side-bar-component"
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          exit={{ opacity: 0, transform: "translateX(20px)" }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            onMouseOver={() => setaActive4(true)}
            onMouseOut={() => {
              setaActive4(false);
            }}
            to="https://www.instagram.com/i.tushar20/"
            className={active4 ? "component-link-active" : "component-link"}
          >
            <Instagram />
          </Link>
        </motion.div>
        <motion.div
          className="side-bar-component"
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          exit={{ opacity: 0, transform: "translateX(20px)" }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link
            onMouseOver={() => setaActive5(true)}
            onMouseOut={() => {
              setaActive5(false);
            }}
            to="#"
            className={active5 ? "component-link-active" : "component-link"}
          >
            <Facebook />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
