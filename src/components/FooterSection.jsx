import React from 'react'
import "../components/css/FooterSection.css"

const FooterSection = () => {
  return (

      <div className='footer'>
        <div className='footerleft'>
            {/* <p className='footerleftpone'>This site is created, maintained, and managed by <span>Conference Catalysts,<br/>  LLC</span> .</p> */}
            <p className='footerleftpone'>This site is created, maintained, and managed by the Organizing Committee of PICS-2025, Department of Electrical Engineering, National Instituteof Technology Hamirpur.</p>
            <p className='footerleftptwo'>For assistance, <span>Contact :</span> Dr. Katam Nishanth ( Email: katam@nith.ac.in, Phone: 9441843624), <br /><span className='contactspan'>Dr. Pankaj K. Mishra ( Email: pmishra@nith.ac.in, Phone: 9101514943)</span></p>
        </div>
        <div className='footerright'>
            <p className='footerrightp'>© Copyright 2025 NITHamirpur - All rights reserved. Use of this website signifies your agreement to our Terms and Conditions. <br />
            <br />The <a href="https://cmt3.research.microsoft.com">Microsoft CMT service</a> was used for
managing the peer-reviewing process for this conference. This service was provided for free
by Microsoft and they bore all expenses, including costs for Azure cloud services as well as
for software development and support.

</p>
        </div>
      </div>
  )
}

export default FooterSection
