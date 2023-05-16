import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/linkedin profile copy.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Zakaria Rahali" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience of my personal project</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>
          <p className="about-hovered">
            Hi there! My name is Zakaria Rahali, and I'm a self-taught React JS
            developer. I didn't learn this field in school , my background is
            actually in electricity. But when I started learning about
            development, I found myself incredibly excited and passionate about
            it. I knew that this was the career path I wanted to pursue. Since
            then, I've been working hard to improve my skills and build my
            portfolio. I've created more than 8 projects just to practice what
            I've learned, and I'm proud of the progress I've made. I believe
            that I'm ready to take on new challenges and contribute to the
            development community. As a self-learner, I know the importance of
            staying up-to-date with the latest technologies and trends. That's
            why I'm always looking for new opportunities to learn and grow. I'm
            excited to see where this journey takes me, and I'm grateful for the
            chance to share my work with you. Thank you for taking the time to
            visit my portfolio website. If you have any questions or would like
            to work together, please don't hesitate to reach out!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
