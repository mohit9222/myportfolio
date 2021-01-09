import React, { useEffect } from 'react';
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return (

<section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 data-aos="fade-right" className="section-heading text-uppercase a" id="abt">About</h2>
            <h3 className="section-subheading text-muted">__________________________</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3" data-aos="fade-right">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={require('../assets/img/my_img.png')} alt="my_img" />
                  <h4>Mohit</h4>
                    <p className="text-muted">Full-Stack Web Developer</p>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin"></i></a>
            </div>
         </div>
         <div className="col-lg-9" data-aos="fade-left">
         <div className="jumbotron">
          <h1 className="display-4 text_colo">Hello, my name is <a style={{color: "yellow"}}>Mohit</a></h1>
         <p className="lead text_colo" align="justify">I am an experienced Full-stack Developer with over 
         4 years of experience in the IT Domain, worked on multiple releases.<br /> <br />
         After completing my Master’s in Computer Science, I chose to continue my passion and zeal 
         for development and thereby started working with a leading MNC. I would define myself as a fervent
         individual who strongly believes in the idea of “We are what we repeatedly do. Excellence, then, is 
         not an act, but a habit”.
         </p> 
        <hr className="my-4"></hr>
        <p className="text_colo" align="justify">Along with being a hardcore coder, I am also a seasoned 
        Football player. I am certain of the fact that this sport has helped me learn various aspects like 
        patience, importance of planning, teamwork and it has taught me how critical it is to deliver results 
        well within the timelines. Feel free to take a look at my latest projects on the Portfolio page.
        </p>
        <a className="btn btn-primary btn-lg text_colo" href="#skill" role="button">View my Skills</a>
          </div>
          </div>
        </div> 
    </div>
    </section>

    )
}

export default About