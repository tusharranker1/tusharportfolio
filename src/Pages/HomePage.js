import React, { useState, useEffect, Suspense } from "react";
import { NavBar } from "../component/NavBar";
import { HomeSideBar } from "../component/HomeSideBar";
import "../css/homePage.css";
import Loader from "../component/Loader";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Mouse } from "lucide-react";
import { Resume } from "./ResumeWebApp";
import { Section2 } from "./Section2";
import { Experience } from "./Experience";
import { Skills } from "../component/Skills";

export const HomePage = () => {
  // scroll - framer motion
  const [navClass, setNavClass] = useState(false);
  // loader component
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // scroll y axis information
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (latest >= 250) {
      setNavClass(true);
    } else {
      setNavClass(false);
    }
  });

  // width calculator
  const [width, getWidth] = useState(window.innerWidth);

  const getWidthSize = () => {
    getWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidthSize);
    return () => {
      window.removeEventListener("resize", getWidthSize);
    };
  }, [width]);
  // state change for the mobileApp
  
  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <div className="home-wrapper"></div>
          <div className="home-wrapper-main" data-aos="fade-up">
            <motion.div
              class="home-content-wrapper"
              style={navClass ? { opacity: 0 } : { opacity: 1 }}
            >
              <motion.div className="home-content">
                <motion.h3
                  initial={{
                    opacity: 1,
                    transform: "translateY(50px) scale(4)",
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translateX(0px) scale(1.3)",
                    color: "rgba(249, 249, 249, 0.621)",
                  }}
                  exit={{ opacity: 0, transform: "translateY(50px) scale(1)" }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Hello
                </motion.h3>
                <motion.h1
                  initial={{ opacity: 0, transform: "scale(0)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0, transform: "scale(0)" }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  I'm Tushar - <span>React Developer</span>
                </motion.h1>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, color: "rgba(249, 249, 249, 0.621)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  & this is my resume
                </motion.h4>
                <motion.div
                  className="scroll-div"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, color: "rgba(249, 249, 249, 0.621)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  <Mouse className="mouse" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <NavBar navClass={navClass} />
          <HomeSideBar />
          <Resume />
          <Section2 />
          <Experience />
          <Skills />
        </Suspense>
      )}
    </>
  );
};
