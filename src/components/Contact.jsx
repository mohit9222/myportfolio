import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com'

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

      emailjs.sendForm('service_83zwo5f', 'template_g9epebl', e.target, 'user_SdsTTHJe2zqcSM66Z3EOd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div data-aos="fade-right" className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact</h2>
            <h3 className="section-subheading text-muted">__________________________</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={sendEmail} id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="full-name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" name="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                    <p className="help-block text-danger"></p>
                </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" as="textarea"rows="3" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" 
                  type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }

//export default Contact