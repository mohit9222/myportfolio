import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dummy_resume.pdf'

function Footer() {
    return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy;</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href={require('./Dummy_resume.pdf')} download title="Resume">
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
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer