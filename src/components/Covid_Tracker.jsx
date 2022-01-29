import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../App.css'

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

export default function Covid_Tracker() {
    const [open,
        setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="portfolio-item">
            <div>
                <a className="portfolio-link">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <Button onClick={handleOpen}>
                        <img
                            className="img-fluid"
                            src={require('../assets/img/covid.jpg')}
                            alt="portfolio_img"/>
                    </Button>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading head">Covid-19 Tracker</div>
                    </div>
                </a>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <h2 className='text-algn'>Covid-19 Tracker</h2>
                            <img
                                className="img-fluid"
                                src={require('../assets/img/cvdtracker.JPG')}
                                alt="portfolio_img"/>
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                            mt: 2
                        }}>
                            <p>This is a live Covid-19 Dashboard which records and displays the critical
                                metrics of all the countries. It acts a one stop guide to analyse and interpret
                                the relevant metrics on a daily basis along with understanding and implementing
                                the preventive measures as directed by WHO.
                            </p>
                            <a
                                className="portfolio-link"
                                data-toggle="modal"
                                href="https://mohit9222.github.io/Covid-19/">
                                Covid-19 Website
                            </a>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}