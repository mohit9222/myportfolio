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

export default function VAG() {
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
                            src={require('../assets/img/VAG.JPG')}
                            alt="portfolio_img"/>
                    </Button>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading head">Virtual Art Gallery</div>
                    </div>
                </a>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h5">
                            <h5 className='text-algn'>Virtual Art Gallery</h5>
                            <img
                                className="img-flu"
                                src={require('../assets/img/VAG.JPG')}
                                alt="portfolio_img"/>
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                            mt: 2
                        }}>
                            <p>With a virtual gallery, there is no drop-off and pick-up. How convenient is
                                that! Viewers and potential buyers can revisit your artworks multiple times
                                without traveling to a physical place, where some might never even get to..</p>
                            <a
                                className="portfolio-link"
                                data-toggle="modal"
                                href="https://mohit9222.github.io/virtual-art-gallery/">
                                Virtual Art Gallery
                            </a>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}