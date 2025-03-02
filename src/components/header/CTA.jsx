import React from "react";
import CV from "../../assets/CV_zakaria_rahali_update.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
