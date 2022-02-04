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

export default function ToDoList() {
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
                            src={require('../assets/img/ToDoList.JPG')}
                            alt="portfolio_img"/>
                    </Button>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading head">To-Do-List App</div>
                    </div>
                </a>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h5">
                            <h5 className='text-algn'>To-Do-List App</h5>
                            <img
                                className="img-flu"
                                src={require('../assets/img/ToDoList.JPG')}
                                alt="portfolio_img"/>
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                            mt: 2
                        }}>
                            <p>With the To-Do-List App, it is a kind of app that is used to maintain our day-to-day
                                tasks or list everything that we have to do, with the most important tasks at
                                the top of the list, and the least important tasks at the bottom. It is helpful
                                in planning our daily schedules.</p>
                            <a
                                className="portfolio-link"
                                data-toggle="modal"
                                href="https://mohit9222.github.io/todolist/">
                                To-Do-List App
                            </a>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}