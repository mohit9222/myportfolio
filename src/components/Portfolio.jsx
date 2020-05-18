import React, { Component } from 'react'


class Portfolio extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" data-aos="fade-right">Portfolio</h2>
                    <h3 className="section-subheading text-muted">__________________________</h3>
                </div>
                <div className="row" data-aos="fade-up">
                <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="https://mohit9222.github.io/Covid-19/"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" onClick={this.handleOpenModal2}></i></div>
                                </div>
                                <img className="img-fluid" src={require('../assets/img/covid.jpg')} alt="portfolio_img"/>
                                </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading head">Covid-19 Tracker</div>
                                <div className="portfolio-caption-subheading text-muted">React JS, Chart JS</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={require('../assets/img/tut.png')} alt="portfolio_img"/>
                                </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading head">Tutorials for Beginners</div>
                                <div className="portfolio-caption-subheading text-muted">React JS, GSAP</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={require('../assets/img/TC_4.jpg')} alt="portfolio_img"/>
                                </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading head">Triple Court</div>
                                <div className="portfolio-caption-subheading text-muted">Apache Cordova</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio