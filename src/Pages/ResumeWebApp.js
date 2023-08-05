import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/Resume.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Cube } from "../component/Cube";
import project1Img1 from "../Images/Hostinger1.png";
import project1Img2 from "../Images/hostinger2.png";
import project1Img3 from "../Images/hostinger3.png";
import project1Img4 from "../Images/hostinger4.png";
import project2Img1 from "../Images/fuelcab1.png";
import project2Img2 from "../Images/fuelcab2.png";
import project2Img3 from "../Images/fuelcab3.png";
import project2Img4 from "../Images/fuelcab4.png";
import { Link2 } from "lucide-react";

export const Resume = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  let imgSet1 = [
    {
      id: 0,
      src: project1Img1,
    },
    {
      id: 1,
      src: project1Img2,
    },
    {
      id: 2,
      src: project1Img3,
    },
    {
      id: 3,
      src: project1Img4,
    },
  ];
  let imgSet2 = [
    {
      id: 0,
      src: project2Img1,
    },
    {
      id: 1,
      src: project2Img2,
    },
    {
      id: 2,
      src: project2Img3,
    },
    {
      id: 3,
      src: project2Img4,
    },
  ];

  return (
    <div className="resume-wrapper">
      <motion.div className="resume-content">
        <motion.h1 className="education-heading" data-aos="fade-up">
          PROJECTS
        </motion.h1>
        <motion.div data-aos="zoom-in-right" className="education-card-first">
          <Cube imgset={imgSet1} />
        </motion.div>
        <div
          className="education-card-first-content"
          data-aos="fade-down-left"
          data-aos-offset="100"
        >
          <h1>Hostinger-ReDesign</h1>
          <ul>
            <li>Frontend Project</li>
            <li>Uses the React framework for the front-end</li>
            <li>Changes the UI and created the new logo</li>
          </ul>
          <div className="button-group">
            <div className="button-wrapper">
              <button className="button">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="button-link"
                  to="https://github.com/tusharranker1/Hostinger-ReDesign"
                >
                  GITHUB
                </Link>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="button-link"
                  to="https://tusharranker1.github.io/Hostinger-ReDesign/#/"
                >
                  <Link2 />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <motion.div data-aos="zoom-in" className="education-card-second">
          <Cube imgset={imgSet2} />
        </motion.div>
        <div
          className="education-card-second-content"
          data-aos="fade-down-right"
        >
          <h1>FuelCab-India</h1>
          <ul>
            <li>Full Stack Project</li>
            <li>
              Uses the React framework and contribute in making the dilevery
              tracking page
            </li>
            <li>Makes the component as in Figma Design</li>
          </ul>
          <div className="button-group">
            <div className="button-wrapper">
              <button className="button">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="button-link"
                  to="https://github.com/tusharranker1?achievement=pull-shark&tab=achievements"
                >
                  GITHUB
                </Link>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="button-link"
                  to="https://www.fuelcab.com/"
                >
                  <Link2 />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
