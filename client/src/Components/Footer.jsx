import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className= "row">
          <div className="col">
            <h6>OL' BETSY INC.</h6>
            <ul className="list-unstyled">
              <li>780-555-5432</li>
              <li>Vancouver, Canada</li>
              <li>123 Street West East</li>
            </ul>
          </div>
          <div className="col">
            <h6>STUFF</h6>
            <ul className="list-unstyled">
              <li>This stuff</li>
              <li>That stuff</li>
              <li>Other stuff</li>
            </ul>
          </div>
          <div className="col">
            <h6>HERE'S MORE STUFF</h6>
            <ul className="list-unstyled">
              <li>Test 123</li>
              <li>What else</li>
              <li>Betsy ya ya ya</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} OL' BETSY INC. | All rights reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
