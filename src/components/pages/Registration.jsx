import React from "react";

import "../css/Registration.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

import a from "../../assets/Registration Steps_PICS 2025__.pdf";

export const Registration = () => {
  return (
    <div className="mainDiv">
      <p className="Registration" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Registration</h1></p>
      <div className="Register_data">
        {/* <span>Registration Link - <span> Available soon...</span></span> */}
        <div className="instruction">
          <h4>Instructions:</h4>
          <ul>
            <li>Registration fees is to be paid at the following link: <a href="https://www.onlinesbi.sbi/sbicollect/">https://www.onlinesbi.sbi/sbicollect/</a>.</li>
            <li>Refer to the steps for payment as given <a href={a}>here.</a></li>
            {/* <li>Please enter your paper ID in remarks column while making the payment.</li> */}
            <li>•	After payment, please fill out the Google Form with your details to complete the registration process. The deadline is June 15, 2025. Registration Google Form: <a href=" https://tinyurl.com/32fmfmus"> https://tinyurl.com/32fmfmus</a>.</li>
            {/* <li>After payment, please fill out the Google Form with your details to complete the registration process. The deadline is June 15,  2025.</li> */}
            {/* <li>For student registrations, please upload valid proof and SBI Collect receipt together as a single PDF in the Google Form</li> */}
            {/* <li>Authors from outside India may use the following details for registration:</li> */}
            <li>The registration categories and the corresponding charges are shown in the table below:</li>
            {/* <div>
              <span>Bank Name: State Bank of India</span>
              <span>Account Number: 11159548375</span>
              <span>IFSC:  SBIN0010367</span>
              <span>MICR Code:  177 002 003</span>
              <span>SWIFT Code:  SBININBB277</span>
            </div> */}
            {/* <li>The registration categories and the corresponding charges are shown in the table below:</li> */}
          </ul>
        </div>
        <p>Registration Fee <span>(non-refundable)</span>:</p>
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
            <li>All registration fees are non-refundable.</li>
            <li>Registration amount includes 1 Conference Kit, Conference Dinner and Networking Opportunities during the conference.</li>
            <li>In case of students, valid proof is needed at the time of registration. Registration is to be done through SBI Collect.</li>
            <li>Authors from outside India (only) may use the following details for registration:</li>
            {/* <li>Registration amount includes 1 Conference Kit, Conference Dinner and Networking Opportunities during the conference</li> */}
            {/* <li>In case of students, valid proof is needed at the time of registration.</li> */}
            {/* <li>All heads are non-refundable.</li> */}
            {/* <li>Registration is to be done through SBI Collect</li> */}
            <div>
              <span>Bank Name: State Bank of India</span>
              <span>Account Number: 11159548375</span>
              <span>IFSC:  SBIN0010367</span>
              <span>MICR Code:  177 002 003</span>
              <span>SWIFT Code:  SBININBB277</span>
            </div>
          </ul>
        </div>
      </div>
      <FooterSection/>
    </div>
  )
};
