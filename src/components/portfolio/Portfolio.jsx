import "./portfolio.css";
import imgz1 from "../../assets/Screenshot (221).png";
import imgz2 from "../../assets/Screenshot (222).png";
import imgz3 from "../../assets/Screenshot (223).png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Food Meals Website with React.js",
      img: imgz1,
      description:
        "This food meals web app, powered by React JS, is a simple yet powerful tool for placing orders. It offers a range of functionalities that streamline the ordering process. Users can easily specify the quantity of desired recipes and instantly receive the total cost for both the recipes and the entire order. To achieve this, I implemented Redux, a state management library, which efficiently handles the application's functionalities. Furthermore, I ensured a visually appealing design to enhance the user experience, making the ordering process seamless and enjoyable.",
      technologies: "Html | CSS | Javascript | Redux | React Js",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Restaurant Website with React.js",
      img: imgz2,
      description:
        "Restaurant web app that I built using React.js, leveraging the power of Context API and incorporating a range of custom functions specifically designed for restaurant applications. Explore the seamless user experience, intuitive design, and efficient functionality that make this web app a standout choice for any restaurant business. Discover how I combined my technical expertise with a passion for creating innovative solutions. Get ready to embark on a delectable journey through the world of my restaurant web app.",
      technologies: "React | Redux",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "E-Commerce Website with React.js | Redux ",
      img: imgz3,
      description:
        "The e-commerce web app I developed with React, React Router, and Redux provides a seamless online shopping experience. Using React's dynamic capabilities, users can effortlessly browse products, add items to their cart, and complete secure transactions. React Router ensures smooth navigation between pages without reloading, while Redux efficiently manages the app's state for features like shopping cart,  and order tracking. The web app features a visually appealing design to enhance user engagement.",
      technologies: "React | Redux ",
      link: "#",
      github: "https://github.com/ZakariaRHL/e-commerce",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className="img-project" />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
