import React,{useEffect} from "react";
import "../css/Skills.css";
import html from "../Images/html5.svg";
import css from "../Images/css3.svg";
import js from "../Images/js.svg";
import react from "../Images/react.svg";
import node from "../Images/node-js.svg";
import database from "../Images/database-solid (1).svg";
import php from "../Images/php.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  let skillData = [
    {
      img: html,
      data: "HTML",
    },
    {
      img: css,
      data: "CSS",
    },
    {
      img: js,
      data: "Java Script",
    },
    {
      img: react,
      data: "React",
    },
    {
      img: node,
      data: "Node.js",
    },
    {
      img: php,
      data: "PHP",
    },
    {
      img: database,
      data: "MySql",
    },
  ];
  return (
    <div className="main-wrapper" data-aos='fade-up'>
      <div className="skill-wrapper">
      <div className="wrapper">
        {skillData.map((user) => {
          return (
            <div className="skill-content">
              <img src={user.img} alt="img" />
              <h1>{user.data}</h1>
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        {skillData.map((user) => {
          return (
            <div className="skill-content">
              <img src={user.img} alt="img" />
              <h1>{user.data}</h1>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};
