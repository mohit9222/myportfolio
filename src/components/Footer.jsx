import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mohit.pdf'

function Footer() {
    return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href={require('./Mohit.pdf')} download title="Resume">
                  <i className="fa fa-file"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/mohit9222" alt="github" title="GitHub">
                <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/mohit-r-583127174/" alt="linkedin" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer