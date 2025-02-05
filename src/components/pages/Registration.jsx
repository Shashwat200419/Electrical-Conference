import React from "react";

import "../css/Registration.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Registration = () => {
  return (
    <div className="mainDiv">
      <p className="Registration" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Registration</h1></p>
      <div className="Register_data">
        <span>Registration Link - <a href="/mm">xyxyxyxyx.com</a></span>
        <p>Registration Fee :</p>
        <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Participant from Industry</td>
            <td>₹8000</td>
            <td>$250</td>
          </tr>
          <tr>
            <td> Participant from Academia 
            (Faculty/ Pursuing PhD)/ R&D</td>
            <td>₹6000</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Students (UG/PG)</td>
            <td>₹3000</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Attendee/Listener</td>
            <td>₹1500</td>
            <td>$75</td>
          </tr>
          {/* <tr>
            <td>London</td>
            <td>Mumbai</td>
            <td>New York</td>
          </tr> */}
        </tbody>
      </table>
    </div>
      </div>
      <FooterSection/>
    </div>
  )
};
