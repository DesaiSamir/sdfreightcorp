// Home.tsx

import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Container maxWidth="lg" style={{ overflow: 'hidden' }}>
            {/* Hero Section */}
            {/* <Paper elevation={3} style={{ height: 'calc(100vh - 45px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
                {/* Replace the image or video with your desired hero content */}
                <img src="hero-image.jpg" alt="Trucks on the road" style={{ width: '100%', height: 'auto' }} />

                {/* Hero Content */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    <Typography variant="h2" gutterBottom>
                        Welcome to sdfreightcorp
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Delivering Excellence in Trucking
                    </Typography>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/about-us">
                        Learn More
                    </Button>
                </div>
            {/* </Paper> */}

            {/* Services Section */}
            <section style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom>
                        Our Services
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        {/* Replace the icons and content with your service offerings */}
                        <div style={{ textAlign: 'center' }}>
                            <img src="service-icon-1.svg" alt="Service 1" style={{ width: '100px', height: 'auto' }} />
                            <Typography variant="h5" gutterBottom>
                                Service 1
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src="service-icon-2.svg" alt="Service 2" style={{ width: '100px', height: 'auto' }} />
                            <Typography variant="h5" gutterBottom>
                                Service 2
                            </Typography>
                            <Typography variant="body1">
                                Nulla facilisi. Phasellus in dignissim purus.
                            </Typography>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src="service-icon-3.svg" alt="Service 3" style={{ width: '100px', height: 'auto' }} />
                            <Typography variant="h5" gutterBottom>
                                Service 3
                            </Typography>
                            <Typography variant="body1">
                                Vivamus eget nibh consequat, rhoncus mi vel, euismod ligula.
                            </Typography>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Testimonials */}
            <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom>
                        What Our Clients Say
                    </Typography>
                    {/* Replace with your client testimonials */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <img src="client-1.jpg" alt="Client 1" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto', marginBottom: '1rem' }} />
                            <Typography variant="body1" gutterBottom>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus in dignissim purus."
                            </Typography>
                            <Typography variant="subtitle1">
                                - John Doe, ABC Logistics
                            </Typography>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <img src="client-2.jpg" alt="Client 2" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto', marginBottom: '1rem' }} />
                            <Typography variant="body1" gutterBottom>
                                "Vivamus eget nibh consequat, rhoncus mi vel, euismod ligula."
                            </Typography>
                            <Typography variant="subtitle1">
                                - Jane Smith, XYZ Freight
                            </Typography>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Call-to-Action Banner */}
            <section style={{ backgroundColor: '#f9f9f9', textAlign: 'center', padding: '2rem 0' }}>
                <Typography variant="h4" gutterBottom>
                    Ready to Get Started?
                </Typography>
                <Button variant="contained" color="primary" size="large" component={Link} to="/contact-us">
                    Contact Us
                </Button>
            </section>
        </Container>
    );
};

export default Home;
