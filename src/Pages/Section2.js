import React, { useEffect } from "react";
import "../css/Section2.css";
import tictactoe from "../Images/tictactoe.png";
import boxOffice from "../Images/boxOffice.png";
import pricingPage from "../Images/pricingPage.png";
import loginPage from "../Images/loginPage.png";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Section2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  let projectContent = [
    {
      id: 0,
      img: tictactoe,
      projectHeading: "Tic Tac Toe",
      info: "Welcome to our Tic-Tac-Toe game built with React.js - a modern twist on the classic Xs and Os. Challenge friends or play against the computer in a seamless and intuitive gaming experience. Get ready for strategic fun and the thrill of victory!",
      link: "https://github.com/tusharranker1",
    },
    {
      id: 1,
      img: boxOffice,
      projectHeading: "Box Office",
      info: "Experience the magic of movies with our React.js-powered Box Office App! check show and stay updated with the latest releases. Lights, camera, action - it's time for entertainment like never before!",
      link: "https://github.com/tusharranker1",
    },
    {
      id: 2,
      img: pricingPage,
      projectHeading: "Pricing Page",
      info: "Welcome to our Pricing Page, where we believe in providing value that fits your needs! Discover the perfect plan tailored to your requirements and budget. Whether you're an individual, a small team, or a growing enterprise, we have flexible pricing options designed to cater to every customer.",
      link: "https://github.com/tusharranker1",
    },
    {
      id: 3,
      img: loginPage,
      projectHeading: "Login Page",
      info: "Welcome to our Login Page, your gateway to a personalized and secure experience! Whether you're an existing member or a new user eager to explore our product, this is where your journey begins.",
      link: "https://github.com/tusharranker1",
    },
  ];

  return (
    <div className="section2-wrapper">
      <h2 data-aos="fade-up">Personel Projects</h2>
      {projectContent.map((user) => {
        return (
          <>
            <div className="project-card">
              <img src={user.img} alt="img" data-aos="zoom-out" />
              <div className="project-content" data-aos="zoom-out">
                <h3>{user.projectHeading}</h3>
                <p>{user.info}</p>
                <Link className="project-repo-link" to={user.link}>
                  <Github />
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
