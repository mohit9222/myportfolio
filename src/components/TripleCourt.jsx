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

export default function TripleCourt() {
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
                            className="img-fluids"
                            src={require('../assets/img/TC_3.jpg')}
                            alt="portfolio_img"/>
                    </Button>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading head">TripleCourt Mobile App</div>
                    </div>
                </a>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h5">
                            <h5 className='text-algn'>TripleCourt Mobile App</h5>
                            <img
                                className="img-flu"
                                src={require('../assets/img/TC_4.jpg')}
                                alt="portfolio_img"/>
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                            mt: 2
                        }}>
                            <p>Triplecourt is to provide the users with an integrated version of all kinds
                                of fitness facilities in a single application. The application is designed to
                                provide a more user friendly application along with additional benefits where
                                the user need not download each fitness facility through a different
                                application.</p>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}