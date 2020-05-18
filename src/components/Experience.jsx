import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Experience() {
    return (
        <section className="page-section" id="experience">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 data-aos="fade-right" className="section-heading text-uppercase">Experience</h2>
            <h3 className="section-subheading text-muted"></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={require('../assets/img/exp.jpg')} alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2016 Jan - 2016 June</h4>
                    <h4 className="subheading">LogicAdd Pvt Ltd Internship</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2016 June - Present</h4>
                    <h4 className="subheading">Cerner Healthcare Solutions</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>My
                    <br/>Experience!</h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2016 June - Present</h4>
                    <h4 className="subheading">Cerner Healthcare Solutions</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
        </section>
    )
}

export default Experience