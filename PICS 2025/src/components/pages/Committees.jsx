import React from "react";

import "../css/committees.css";
import Card from "../Card";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";


export const Committees = () => {
  return (
    <div className="mainDiv">
      <p className="committees" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}> <h1>Committees</h1></p>
      <div className="cardMain">
        <h1 className="Honda">Advisory Committee</h1>
        <div className="advisory_names">
          <span>Prof. Ramesh Bansal, University of Sharjah</span>
          <span>Prof. N. P. Padhy, Director, MNIT Jaipur</span>
          <span>Prof. H. O. Gupta, IIT Roorkee</span>
          <span>Prof. Praveen Kumar, IIT Guwahati</span>
          <span>Prof. Deepak M. Fulwani, IIT Jodhpur</span>
          <span>Prof. Rajesh Kumar, MNIT Jaipur</span>
          <span>Prof. Bharat Singh Rajpurohit, IIT Jodhpur</span>
          <span>Prof. Ujjwal Kumar Kalla, NIT Delhi</span>
          <span>Prof. Madhusudan Singh Yadav, DTU, Delhi</span>
          <span>Dr. Neeraj Gupta, Sr. Scientist, Global Elect. Ltd., USA</span>
          <span>Prof. Rohit Bhakar, MNIT Jaipur</span>
          <span>Prof. K. S. Nagla, B. R Ambedkar NIT Jalandhar</span>
          <span>Prof. Akhil Rajan Garg, M. B. M. University Jodhpur</span>
          <span>Prof. Pragati Kumar, Vice-Chancellor, SMVDU Jammu</span>
          <span>Prof. Shailendra Jain, MNIT Jaipur</span>
          <span>Prof. Akshay Rathore, SIT Singapore</span>
          <span>Dr. Baseem Khan, Hawassa University, Ethiopia</span>
          <span>Prof. Sanjeevikumar Padmanaban, University of South-Eastern Norway</span>
        </div>
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <h1 className="honda2">Organising Committee</h1>
        <div className="organising_names">
          <div className="name_box">
            <h3>Patron</h3>
            <div className="names">
              <span>Prof. H M Suryavanshi</span>
              <span>Chairman, BOG cum Director</span>
              <span>NIT Hamirpur (NITH)</span>
              <span></span>
            </div>
          </div>
          <div className="name_box">
            <h3>Co-Patron</h3>
            <div className="names">
              <span>Dr. Bharat Bhusan Sharma,</span>
              <span>HOD, EED, NITH</span>
              <span></span>
            </div>
          </div>
          <div className="name_box">
            <h3>Organizing Chairman</h3>
            <div className="names">
              <span>Dr. Ram Niwash Mahia</span>
              <span>Asst. Prof., EED, NITH</span>
              <span></span>
            </div>
          </div>
          <div className="name_box">
            <h3>General Chair</h3>
            <div className="names">
              <span>Dr. Bharat Bhusan Sharma,</span>
              <span>HOD, EED, NITH</span>
              <span>Dr. O. P. Rahi,</span>
              <span>Assoc. Prof., EED, NITH</span>
            </div>
          </div>
          <div className="name_box">
            <h3>Organizing Secretaries</h3>
            <div className="names">
              <span>Dr. Katam Nishanth,</span>
              <span>Asst. Prof., EED, NITH</span>
              <span>Dr. Pankaj K. Mishra,</span>
              <span>Asst. Prof., EED, NITH</span>
            </div>
          </div>
          <div className="name_box">
            <h3>Joint Secretaries</h3>
            <div className="names">
              <span>Dr. Vivek Sharma,</span>
              <span>Asst. Prof., EED, NITH</span>
              <span>Dr. Jiwanjot Singh</span>
              <span>Asst. Prof., EED, NITH</span>
            </div>
          </div>
          <div className="name_box">
            <h3>Treasurer</h3>
            <div className="names">
              <span>Dr. Sreeram TS</span>
              <span>Asst. Prof., EED, NITH</span>
              <span></span>
            </div>
          </div>
          <div className="name_box">
            <h3>Publicity Chair</h3>
            <div className="names">
              <span>Dr. Archna Santosh Nanoty,</span>
              <span>Registrar, NITH</span>
              <span>Dr. Ravinder Nath,</span>
              <span>Assoc. Prof., EED, NITH</span>
              <span>Dr. R. K. Jarial,</span>
              <span>Assoc. Prof., EED, NITH</span>
              <span>Dr. Amit Kaul,</span>
              <span>Assoc. Prof., EED, NITH</span>
              <span>Dr. Himesh Handa,</span>
              <span>Asst. Prof., EED, NITH</span>
              <span>Dr. Chandrasekaran S,</span>
              <span>Asst. Prof., EED, NITH</span>
              <span></span>
            </div>
          </div>
          <div className="name_box">
            <h3>Technical Chair</h3>
            <div className="names">
              <span>Prof. Y. R. Sood, EED, NITH</span>
              <span>Prof. Sushil Chauhan, EED, NITH</span>
              <span>Prof. R. N. Sharma, EED, NITH</span>
              <span>Prof. Ashwani Chandel, EED,NITH</span>
              <span>Dr. Veena Sharma,</span>
              <span>Assoc. Prof., EED, NITH</span>
            </div>
          </div>
          <div className="name_box">
            <h3>Publication Chair</h3>
            <div className="names">
              <span>Dr. Ram Niwash Mahia,</span>
              <span>Asst. Prof., EED, NITH</span>
              <span>Dr. Katam Nishanth,</span>
              <span>Asst. Prof., EED, NITH</span>
              <span>Dr. Pankaj K. Mishra</span>
              <span>Asst. Prof., EED, NITH</span>
              <span></span>
            </div>
          </div>
        </div>
      {/* <div className="Card2">
        
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      
      </div> */}
      {/* --------------------------------------------------------------------- */}
      {/* <div className="Card2">
        
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="John Doe" 
          position="Software Engineer" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        
        </div> */}
        {/* ---------------------------------------------------------------------- */}
        {/* <div className="Card2">
        
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="John Doe" 
          position="Software Engineer" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        
        </div> */}
      
      </div>
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      <FooterSection/>
    </div>
  )
};
