import React, {useEffect} from 'react';
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (

        <section className="page-section" id="about">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 data-aos="fade-right" className="section-heading text-uppercase a" id="abt">About</h2>
                        <h3 className="section-subheading text-muted">__________________________</h3>
                    </div>
                </div>

                <div className="row">
                   <div className="col-lg-1"></div>
                     <div className="col-lg-10" data-aos="fade-left">
                        <div className="jumbotron">
                            <h1 className="display-4 text_colo">Everything you need to know about
                            <a style={{color: "#ffc60a"}}> ME!</a>
                            </h1>
                            <p className="lead text_colo" align="justify">I am a “Forever student” fueled by
                                my passion for understanding the nuances of the Tech World. My hunger for
                                knowledge and my determination to turn information into action has contributed
                                to my most recent successes. I strongly believe mindfulness while working is key
                                to success.
                                <br/>
                            </p>
                            <hr className="my-4"></hr>
                            <p className="text_colo" align="justify">As a creative person, I like doing
                                things with my hands. I thoroughly enjoy painting as a hobby, I also enjoy
                                teaching art to my little students who help keep the child in me alive. I have
                                been a seasoned soccer player since the age of 12. I am certain of the fact that
                                this sport has helped me learn various aspects like patience, importance of
                                planning, teamwork and it has taught me how critical it is to deliver results
                                well within the timelines.
                            </p>
                            <a className="btn btn-primary btn-lg text_colo" href="#skill" role="button">View my Skills</a>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
        </section>

    )
}

export default About