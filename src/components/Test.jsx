import React, { Component } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%',
  }
};

ReactModal.setAppElement('#root');

class Test extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      showModal2: false
    };
    
    this.handleOpenModal   = this.handleOpenModal.bind(this);
    this.handleOpenModal2  = this.handleOpenModal2.bind(this);
    this.handleCloseModal  = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.afterOpenModal    = this.afterOpenModal.bind(this);
    this.afterOpenModal2   = this.afterOpenModal2.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
  
  afterOpenModal2() {
    this.subtitle.style.color = 'slateblue';
  }


  render() {
    return (
      <div id='ui-cookie-support-notification' role='alertdialog'>
        <section className='ui-cookie-support-message-wrap'>
          <div onClick={this.handleOpenModal} className='ui-cookie-support-half ui-cookie-support-message'>
          <ReactModal
            isOpen={this.state.showModal}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
          >
          <h4 ref={subtitle => this.subtitle = subtitle}>This is the cookie acceptence policy</h4>
          <div>Thank you for the acceptence of our cookie policy.</div>
          <hr />
          <button onClick={this.handleCloseModal}>close</button>
        </ReactModal>

          </div>
            <button 
              className ='ui-cookie-support-dismiss-button ui-cookie-support-dismiss-link ui-warn-flag-close-btn ui-top-notification-close-btn'
              onClick={this.handleOpenModal2}
             >
            OK
          </button>
            <ReactModal
              isOpen={this.state.showModal2}
              onAfterOpen={this.afterOpenModal2}
              onRequestClose={this.handleCloseModal2}
              style={customStyles}
            >
            <h4 ref={subtitle => this.subtitle = subtitle}>This is the cookie acceptence policy</h4>
            <div>Thank you for the acceptence of our cookie policy.</div>
            <hr />
            <button onClick={this.handleCloseModal2}>close</button>
          </ReactModal>
        </section>
      </div>
    );
  }
}

export default Test