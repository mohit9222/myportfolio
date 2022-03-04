import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mohit.pdf'

function Header() {
    return (
        <header className="masthead" id="home">
            <div className="row">
                <div className='col-md-6'>
                    <div className="intro-text">
                        <div className="intro-heading fde">I'M MOHIT</div>
                        <div className="intro-lead-in text-uppercase rd">Front-End Developer
                        </div>
                        <div className="intro-lead-in text-uppercase dev">I AM MADE</div>
                        <div className="intro-lead-in text-lowercase of">
                            <span>of</span>
                        </div>
                        <div className="intro-lead-in text-uppercase content" id="ide">
                            <h2>IDEAS</h2>
                            <h2>IDEAS</h2>
                        </div>
                        <div className='but'>
                            <a
                                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger vmw"
                                href="#portfolio">SEE FOR YOURSELF</a>
                        </div>
                        <div
                            style={{
                            paddingTop: '1rem'
                        }}>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href={require('./Mohit.pdf')} download title="Resume">
                                        <i className="fa fa-file"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://github.com/mohit9222" title="GitHub" alt="github">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.linkedin.com/in/mohit-r-583127174/"
                                        title="LinkedIn"
                                        alt="linkedin">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img
                        src={require('../assets/img/yimage2.png')}
                        className="hed_img"
                        alt="sql-server"/>
                </div>
            </div>
        </header>
    )
}

export default Header