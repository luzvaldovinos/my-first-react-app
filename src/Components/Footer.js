import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
  return(
    <div className="footer-container">
      <ul>
        <li><FontAwesomeIcon icon="fab fa-linkedin-in" /></li>
        <li><FontAwesomeIcon icon="fa-brands fa-github" /></li>
      </ul>
    </div>
  )
}
export default Footer
