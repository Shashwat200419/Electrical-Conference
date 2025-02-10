import React from "react";

import "../css/author.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
// import word from "../../assets/Response_Sheet.docx";

export const Author = () => {
  return (
    <div className="mainDiv">
      <p className="author" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Instructions for Preparing Manuscripts    </h1></p>
      <div className="data">
        <div className="data1">
        <h3>Instructions:</h3>
        <p>The authors should submit papers in one of the following tracks:</p>
        <ul>
          <li>Power Engineering</li>
          <li>Control and Automation</li>
          <li>Artificial Intelligence (AI)</li>
          {/* <li>Generative AI/ Computer Vision.</li> */}
          {/* <li>Edge AI/ Applications of AI in hardware.</li> */}
        </ul>
        <p>Papers in research areas not falling in the above tracks, but relevant to the conference scope shall submit their paper in General Track. </p>
        </div>
        <div className="data2">
          <h3>Preparing your Paper:</h3>
          <p>Authors must use the manuscript template specified here. The LaTeX and Word templates can be downloaded    from the following links :</p>
          <ul>
            <li><a href="https://drive.google.com/file/d/1tYPp2cGK2BS4f4fB8EqpTLRvzEqIXaxz/view">Word template</a></li>
            <li><a href="https://www.overleaf.com/latex/templates/springer-conference-proceedings-template-updated-2022-01-12/wcvbtmwtykqj">LaTeX template</a></li>
            {/* <li><a href="">Response Sheet template</a></li> */}
          </ul>
        </div>
        <div className="data3">
          <h3>Publication</h3>
          <span>All accepted papers will be published in Springer Book Series. (Scopus Indexed)</span>
          <span>Extended versions of select papers will be invited for submission in various journals. </span>
        </div>
      </div>
      <FooterSection/>
    </div>
  )
};
