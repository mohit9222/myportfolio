import React, { Component } from 'react';
import '../App.css'
import Portfolio from '../components/Portfolio'
import Header from  '../components/Header'
import About from '../components/About'
import Skill from './Skill';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
   
   
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#home" title="Home"><i className="fa fa-home"></i></a>
        <button onClick={this.toggleNavbar} className={`${classTwo}`} 
        type="button" data-toggle="collapse" data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto"> 
          <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skill">Skills</a>
            </li>                    
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>     
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    
    <Header />
    <About />
    <Skill />
    <Portfolio />

    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  
    
     
  
      </div>
    );
  }
}

  export default Navbar