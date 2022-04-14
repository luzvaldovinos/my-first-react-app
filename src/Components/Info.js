import React from "react"
import profilePic from "../images/profile-pic.jpeg"

function Info() {
  return(
    <div className="info-container">
      <img
        src={profilePic}
        alt="Luz"
        className="profile-pic"
        style={{ height: 317}}
      />
      <h1 className="info-h1">Luz Valdovinos</h1>
      <h3 className="info-h3">Frontend Developer</h3>
      <a className="portfolio-link" href="https://troopl.com/luzvaldovinos">Luz's Portfolio</a>
    </div>
  )
}

export default Info
