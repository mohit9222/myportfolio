import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../App.css'
import JR_APP from './JR_App';
import Covid_Tracker from './Covid_Tracker';
import TripleCourt from './TripleCourt';
import VAG from './VAG';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function Portfolio() {
    return (

        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" data-aos="fade-right">Portfolio</h2>
                    <h3 className="section-subheading text-muted">__________________________</h3>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <Covid_Tracker />
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <JR_APP />  
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <TripleCourt />  
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <VAG />
                    </div>
                </div>
            </div>
        </section>
    );
}