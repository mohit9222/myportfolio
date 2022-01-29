import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dummy_resume.pdf'

function Header() {
    return (
        <header className="masthead" id="home">
      <div className="container">
        <div className="intro-text">
          <div className="intro-heading">Hello, I'm <span className="highlight text-uppercase">Mohit</span>!</div>
          <div className="intro-lead-in text-uppercase dev">I'm a full-stack developer.</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger vmw" href="#portfolio">View my work</a>
            <div style={{paddingTop: '1rem'}}>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href={require('./Dummy_resume.pdf')} download title="Resume">
                  <i className="fa fa-file"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/mohit9222" title="GitHub" alt="github">
                <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/mohit-r-583127174/" title="LinkedIn" alt="linkedin">
                <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul> 
            </div>       
        </div>
      </div>
    </header>
    )
}

export default Header