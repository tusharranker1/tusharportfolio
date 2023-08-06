import React from "react";
import { SideNavBar } from "./SideNavBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/navBar.css";
import pdf from '../pdf/CV_2023033117220381.pdf'

export const NavBar = ({ navClass }) => {
  return (
    <motion.div className={navClass? "nav-wrapper-active":"nav-wrapper-unactive"}>
      {!navClass ? (
        <>
          <motion.div
            className="nav-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              <span>T</span>ushar
            </h1>
          </motion.div>
          <motion.div
            className="nav-content"
            initial={{ opacity: 0, transform: "translateY(-50px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-50px)" }}
            transition={{ duration: 1 }}
          >
            <ul>
              <li>
                <Link className="nav-content-link" to="/tusharportfolio/">
                  Home
                </Link>
              </li>
              <li>
                <a className="nav-content-link" href={pdf} target="__blank" >
                  Resume
                </a>
              </li>
              <li>
                <Link className="nav-content-link" to="/tusharportfolio/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </>
      ) : (
        <SideNavBar />
      )}
    </motion.div>
  );
};
