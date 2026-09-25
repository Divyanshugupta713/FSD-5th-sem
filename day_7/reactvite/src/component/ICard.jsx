import React from 'react'

function ICard() {
    let a=23;
  let name="Ram"
  return (
<div className="id-card">

      {/* Header */}
      <div className="id-header">
        <div className="college-logo">
          ABES
        </div>

        <div className="college-info">
          <h2>ABES ENGINEERING COLLEGE</h2>
          <p>Ghaziabad, Uttar Pradesh</p>
          <span>Affiliated to AKTU, Lucknow</span>
        </div>
      </div>

      {/* Title */}
      <div className="card-title">
        <h3>IDENTITY CARD</h3>
        <div className="title-line"></div>
      </div>

      {/* Student Section */}
      <div className="student-section">

        {/* Photo */}
        <div className="student-photo">
        <img
         src="./student.png"
          alt="Student"
         className="student-image"
          />
        </div>

        {/* Details */}
        <div className="student-details">

          <div className="detail-row">
            <span>Name</span>
            <strong>DIVYANSHU GUPTA</strong>
          </div>

          <div className="detail-row">
            <span>Roll No.</span>
            <strong>24XXXXXXX</strong>
          </div>

          <div className="detail-row">
            <span>Course</span>
            <strong>B.Tech CSE (AI & ML)</strong>
          </div>

          <div className="detail-row">
            <span>Year</span>
            <strong>2nd Year</strong>
          </div>

          <div className="detail-row">
            <span>Section</span>
            <strong>B</strong>
          </div>

        </div>
      </div>

      {/* Bottom Information */}
      <div className="card-bottom">

        <div>
          <span>Blood Group</span>
          <strong>O+</strong>
        </div>

        <div>
          <span>Valid Upto</span>
          <strong>2027</strong>
        </div>

      </div>

      {/* Footer */}
      <div className="id-footer">
        <span>www.abes.ac.in</span>
        <span>Student ID Card</span>
      </div>

    </div>
  )
}

export default ICard