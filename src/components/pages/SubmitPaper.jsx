import React from "react";

import "../css/SubmitPaper.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import Brochure from "../../assets/Brochure PICS 2025.pdf";

export const SubmitPaper = () => {
  return (
    <div className="mainDiv">
      <p className="SubmitPaper" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Paper Submission</h1></p>
      <div className="PaperSubmitData">
        <div className="SubmitLink">
            <p className="link">
                <span>The link for the papers submission is  : <a href="https://cmt3.research.microsoft.com/PICS2025">https://cmt3.research.microsoft.com/PICS2025</a> </span>
            </p>
            <p className="downlink">
                <span>Download the <a href={Brochure} className="linkupdate">CALL FOR PAPERS</a></span>
            </p>
        </div>
        <div className="Description">
            <span>Paper Format and Length</span>
            <p className="para1">Springer format with maximum 10 pages (including references) during paper submission. To take care of reviewers' comments, one more page is allowed (without any charge) during revised/camera ready submission. Moreover, authors may purchase up to 2 extra pages. Extra page charges must be paid at the time of registration.</p>
            <p className="para2">Springer paper formatting instructions and templates for PICS-2025 are available here <a href="https://drive.google.com/file/d/1tYPp2cGK2BS4f4fB8EqpTLRvzEqIXaxz/view">Word template</a> and <a href="https://www.overleaf.com/latex/templates/springer-conference-proceedings-template-updated-2022-01-12/wcvbtmwtykqj">Latex</a> .</p>
            <p className="para3">Please submit your paper here: <a href="https://cmt3.research.microsoft.com">Microsoft CMT </a></p>
        </div>
      </div>
      <FooterSection/>
    </div>
  )
};
