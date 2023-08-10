// Careers.tsx

import React from 'react';
import { 
    Container, Typography, Button, Grid, Modal, 
    Card, CardMedia, CardContent, CardActions,  
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { JobListing } from '../interfaces/Careers';
import { Service } from '../interfaces/Service';
import Safety from '@mui/icons-material/VerifiedUser';
import Healthcare from '@mui/icons-material/MedicalInformation';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { FEDEX_ORANGE, FEDEX_PURPLE } from '../helpers/constants';
import { jobListings } from '../helpers/jobListings';
import TrucksImage from '../assets/trucks-on-road.webp';

const services: Service[] = [
    {
      icon: <AssignmentIndIcon style={{ fontSize: 100 }} />, // Replace with actual icon component
      title: "Dedicated Runs",
      description: "Experience consistent routes and schedules with our dedicated runs, ensuring a reliable and predictable work routine.",
    },
    {
      icon: <DoNotTouchIcon style={{ fontSize: 100 }} />, // Replace with actual icon component
      title: "No Touch Freight",
      description: "Only Drop and Hook, 100% No-Touch Fright.",
    },
    {
      icon: <HomeWorkIcon style={{ fontSize: 100 }} />, // Replace with actual icon component
      title: "Home Daily",
      description: "Enjoy the advantage of home daily opportunities, allowing you to spend more time with your loved ones.",
    },
    {
      icon: <Healthcare style={{ fontSize: 100 }} />, // Replace with actual icon component
      title: "Healthcare",
      description: "We prioritize your well-being with comprehensive healthcare benefits, ensuring you and your family are covered.",
    },
    {
      icon: <Safety style={{ fontSize: 100 }} />, // Replace with actual icon component
      title: "Safety Bonuses",
      description: "Our safety incentives reward your commitment to safe driving, making your career both financially rewarding and secure.",
    },
    {
      icon: <EngineeringIcon style={{ fontSize: 100 }} />, // Replace with actual icon component
      title: "Career Advancements",
      description: "We offer exciting opportunities for career advancements and promotions within.",
    },
  ];

const Careers: React.FC = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedJob, setSelectedJob] = React.useState<JobListing>();

    const handleOpenModal = (job:JobListing) => {
        setSelectedJob(job);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <section className={classes.section}>
                <Container maxWidth="lg">
                    <div className={classes.headerContent}>
                        <Typography variant="h2" gutterBottom style={{ fontFamily: 'Harlow Solid Italics' }}>
                            <span style={{ color: FEDEX_ORANGE }}>S</span>
                            <span style={{ color: FEDEX_PURPLE }}>D</span> Freight Corp.
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Join us to unlock your potential and take your career to new heights.
                        </Typography>
                        
                        <Typography variant="h6" gutterBottom>
                            Apply Now.
                        </Typography>
                    </div>
                    <Grid container spacing={6} justifyContent="center" style={{ marginTop: '2rem' }}>
                        {services.map((service, index) => (
                            <Grid item sm={6} key={index} >
                                <Grid container spacing={4} alignItems='center'>
                                    <Grid item xs={6} md={4}>
                                        {service.icon}
                                    </Grid>
                                    <Grid xs={6} md={8}>
                                        <Typography variant="h5" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" >
                                            {service.description}
                                        </Typography>                         
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>

            <section className={classes.section}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom>
                        Available Positions
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {/* Display available job listings */}
                        {jobListings.map((job, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={TrucksImage}
                                        title={job.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {job.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" onClick={() => handleOpenModal(job)}>
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Job Description Modal */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <div className={classes.modal}>
                {selectedJob && (
                    <>
                    <Typography variant="h5" gutterBottom>
                        {selectedJob.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <div dangerouslySetInnerHTML={{__html: selectedJob.description}} />
                    </Typography>
                    <Typography variant="body1">
                        Location: {selectedJob.location}
                    </Typography>
                    </>
                )}
                </div>
            </Modal>

            {/* Add more sections as needed */}
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
	headerContent: {
		textAlign: 'center',
	},
    section: {
        padding: '4rem 0',
        backgroundColor: 'rgb(6 6 6 / 60%)',
        color: 'white',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '2rem',
        outline: 'none',
        maxWidth: '90vw',
        maxHeight: '80vh',
        overflowY: 'auto',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
}));

export default Careers;
