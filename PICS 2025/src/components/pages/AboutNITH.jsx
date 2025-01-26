import React from "react";

import "../css/aboutNITH.css"
import ImageSlider from "../ImageSlider";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const AboutNITH = () => {
  return (
    <div className="mainDivv">
      <p className="aboutNITH" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>About NIT-H</h1></p>
      <div className="dataHeaderr">
      <p className="NITH">National Institute of Technology, Hamirpur</p>
      {/* <img src="https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/221111023211_NIT_HAMIRPUR_CAMPUS.webp" alt="" className="campusPhoto" /> */}
      <img src="https://nith.ac.in/uploads/topics/nit-logo15954991401255.jpg" alt="nith_logo" className="nithLogo"/>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/en/b/b8/National_Institute_of_Technology%2C_Hamirpur_Logo.png" alt="" className="backlogo" />
      <div className="paras">
      <p className="para1">National Institute of Technology Hamirpur is one of the thirty-one NITs of the country, which came into existence on 7 <sup>th</sup> August 1986 as Regional Engineering College,
       a joint and cooperative enterprise of the Govt. of India and Govt. of Himachal Pradesh. At the time of inception, Institute had only two departments i.e, Civil and Electrical Engineering having an 
       intake of 30 students in each.</p>
       <p className="para2">On 26th June 2002, REC Hamirpur was awarded the status of Deemed University and upgraded to National Institute of Technology. NIT Hamirpur is an institute of National importance
         set up by an act of Parliament namely the National Institute of Technology Act 2007 which received the accent of the President of India on 5 <sup>th</sup> June, 2007. The provisions of Act came into force with effect from 15th August,
         2007 as per notification S.O. 1384 (E) dated 9 <sup>th</sup> August, 2007 of the Department of Higher Education, MHRD, New Delhi. As per provisions of the said Act, the Institute runs on non-profit basis.</p>
         <p className="para3">The goals of the Institute as embodied in logo are truly remarkable in their scope and vision. The Institute offers Bachelor, Master and Doctoral programmes in Engineering, Sciences,
           Architecture, Management and Humanities. The Institute spares no effort to foster the spirit of national integration among students, a close interaction with industry and laying strong emphasis on research.
            The institute has the flexibility to evolve and change in response to requirements of the Industry and happenings in technical world. Various programmes serve the purpose of building a comprehensive foundation
             of knowledge and of enhancing confidence, creativity and innovation in its students.</p>
      </div>
      <ImageSlider/> 
      <FooterSection/>      
    </div>
  )
};
