import React from 'react'
import "../components/css/DateSection.css";
const DateSection = () => {
  return (
    <div className='datemain'>
      <p className='pone'>Mark Your Calendar</p>
      <p className='ptwo'>Important Dates</p>
      <div className='dateboxes'>
        <div className='datebox'>
            <p className='dateptwo'>Last Date of Paper Submission :</p>
            <p className='datepone'>01 April, 2025</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Acceptance Notification : </p>
            <p className='datepone'>07 May, 2025</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Camera Ready Paper Submission : </p>
            <p className='datepone'>13 June, 2025</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Last Date of Registration : </p>
            <p className='datepone'>01 July, 2025</p>
        </div>
      </div>
    </div>
  )
}

export default DateSection
