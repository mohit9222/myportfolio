import React, { useEffect } from 'react';
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return (

<section className="page-section" id="skill">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 data-aos="fade-right" className="section-heading text-uppercase ts">Technology Stack</h2>
            <h3 className="section-subheading text-muted">__________________________</h3>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-3x">
            <i class="far fa-file-code fa-inverse"></i>
            </span>
            
            <h4 className="service-heading">Front End Technologies</h4>
            <div data-aos="fade-right">
            <div className="row" style={{paddingTop: '2rem'}}>
                <div className="col-md-4">
                    <i className="fab fa-html5 fa-3x fa-inverse"></i>
                </div>
                <div className="col-md-4">
                    <i className="fab fa-css3-alt fa-3x fa-inverse"></i>
                </div>
                <div className="col-md-4">
                    <i className="fab fa-js fa-3x fa-inverse"></i>
                </div>
            </div>
            <div className="row" style={{paddingTop: '2rem'}}>
                <div className="col-md-4">
                    <i className="fab fa-less fa-3x fa-inverse"></i>
                </div>
                <div className="col-md-4">
                    <i className="fab fa-sass fa-3x fa-inverse"></i>
                </div>
                <div className="col-md-4">
                    <i className="fab fa-react fa-3x fa-inverse"></i>
                </div>
            </div>            
            </div>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-3x">
              <i className="fa fa-code fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Other Tools/Technologies</h4>
            <div data-aos="fade-right">
            <div className="row" style={{paddingTop: '2rem'}}>
                <div className="col-md-5">
                <img src={require('../assets/img/rest.png')} alt="sql-server" style={{height: '3rem'}} />
                </div>
                <div className="col-md-3">
                <img src={require('../assets/img/docker.png')} alt="sql-server" style={{height: '3rem'}} />
                </div>
                <div className="col-md-4">
                <img src={require('../assets/img/git.png')} alt="sql-server" style={{height: '3rem'}} />
                </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-3x">
              <i className="fa fa-database fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Database</h4> 
            <div data-aos="fade-right">          
            <div className="row" style={{paddingTop: '2rem'}}>
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                    <img src={require('../assets/img/sql-server.png')} alt="sql-server" style={{height: '5rem'}} />
                </div>
                <div className="col-md-4">
                     <img src={require('../assets/img/my-sql.png')} alt="my-sql" style={{height: '5rem'}} />
                </div>
                <div className="col-md-2">
                </div>
            </div>
            </div> 
            </div>
        </div>

        
      </div>
    </section>

    )
}

export default Skill