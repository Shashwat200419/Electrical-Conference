import React from "react";

import "../css/ConferenceVenue.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ConferenceVenue = () => {
  return (
    <div className="mainDiv">
      <p className="ConferenceVenue" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Conference Venue</h1></p>
      <div className="dataHeader">
        <p className="Venue">Department of Electrical Engineering, NIT Hamirpur-177005</p>
        <img src="https://5.imimg.com/data5/DM/AO/GLADMIN-15801981/electrical-engineering-department-500x500.jpg" alt="EE_department" />
        <p className="Department_Info">The Department of Electrical Engineering, established in the year 1986, is one of the oldest Departments of National Institute of Technology Hamirpur. 
          The Department has been imparting quality education at undergraduate and post-graduate level. The faculty members have been active in teaching and research
           activities. The course curriculum is being revised from time to time so as to keep students abreast with latest developments and emerging technologies.
            Various departmental laboratories have been strengthened and modernized by procuring state of art equipment. The department is also equipped with latest
             experimental and computational facilities for taking up R&D and consultancy activities in different areas of Electrical Engineering. Alumni of the department
              are well placed in various reputed government / non-government administrative, academic, research, engineering organizations in the country. Many of them are
               well settled in various reputed organization in abroad. Department produces not only knowledgeable, skilled, trained employable engineers but also a good
                citizen having concern with society, environment and ethical issues.</p>
      </div>
      <FooterSection/>
    </div>
  )
};
