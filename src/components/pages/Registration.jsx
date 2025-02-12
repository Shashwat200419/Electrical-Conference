import React from "react";

import "../css/Registration.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Registration = () => {
  return (
    <div className="mainDiv">
      <p className="Registration" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Registration</h1></p>
      <div className="Register_data">
        <span>Registration Link - <span> Available soon...</span></span>
        <div className="instruction">
          <h4>Instruction</h4>
          <ul>
            <li>Registration fees is to be paid at the following link: <a href="https://www.onlinesbi.sbi/sbicollect/">https://www.onlinesbi.sbi/sbicollect/</a></li>
            <li>Please enter your paper ID in remarks column while making the payment.</li>
            <li>Refer to the steps for payment as given <a href="https://drive.google.com/file/d/1RYmzcRPCwgaFBxkU-3UFwm8go4IdGsZg/view">here</a></li>
          </ul>
        </div>
        <p>Registration Fee :</p>
        <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>National</th>
            <th>International</th>
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
            <td>$150</td>
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
    <div className="instruction">
          <h4>Note:</h4>
          <ul>
            <li>Registration amount includes 1 Conference Kit, Conference Dinner and Networking Opportunities during the conference</li>
            <li>In case of students, valid proof is needed at the time of registration.</li>
            <li>All heads are non-refundable.</li>
            <li>Registration is to be done through SBI Collect</li>
          </ul>
        </div>
      </div>
      <FooterSection/>
    </div>
  )
};
