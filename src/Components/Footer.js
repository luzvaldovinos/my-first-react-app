import React from "react"
import ReactDom from 'react-dom'
import GithubBrandIcon from "../images/github-brand-icon.svg"
import LinkedinBrandIcon from "../images/linkedin-brand-icon.svg"

function Footer() {
  return(
    <div className="footer-icons">
      <a href="https://github.com/luzvaldovinos">
        <img
          src={GithubBrandIcon}
          className="github-icon"
          style={{ height: 24 }}
        />
      </a>
      <a href="https://www.linkedin.com/in/luzvaldovinos/">
        <img
          src={LinkedinBrandIcon}
          className="linkedin-icon"
          style={{ height: 24 }}
        />
      </a>

    </div>
  )
}
export default Footer
