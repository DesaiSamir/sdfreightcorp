import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { FEDEX_ORANGE, FEDEX_PURPLE } from '../helpers/constants';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '4rem',
        paddingBottom: '4rem',
        color: 'white',
    },
    heading: {
        fontSize: 30,
		fontWeight: 500,
    },
    paragraph: {
        marginBottom: '1rem',
    },
    button: {
        paddingTop: '10px',
    },
}));

const AboutUs: React.FC = () => {
    const classes = useStyles();

    return (
		<div>
			<Container maxWidth="lg" className={classes.container}>
				<div className={classes.heading} >
					About:
					<Typography variant="h2" gutterBottom style={{ fontFamily: 'Harlow Solid Italics' }}>
						<span style={{ color: FEDEX_ORANGE }}>S</span>
						<span style={{ color: FEDEX_PURPLE }}>D</span> Freight Corp.
					</Typography>
				</div>
				<div>
					<Typography variant="body1" className={classes.paragraph} paragraph>
						SD Freight Corp is a dedicated Transportation Service Provider for FedEx Ground, committed to excellence in freight delivery. With a strong focus on reliability and efficiency, we facilitate the movement of packages between FedEx Ground hubs, terminals, stations, and customer destinations.
					</Typography>
					<Typography variant="body1" className={classes.paragraph} paragraph>
						Safety is our top priority. Operating with the utmost dedication to safety, we ensure that every package is transported securely and responsibly. Our commitment to safety is not just a practice, but a primary company motto that guides every aspect of our operations.
					</Typography>
					<Typography variant="body1" className={classes.paragraph} paragraph>
						Our team of highly skilled drivers and state-of-the-art fleet ensures the secure and timely transportation of packages, playing a crucial role in empowering FedEx Ground to deliver millions of packages across the United States every day. Our commitment to safety, quality, and customer satisfaction drives our success as a trusted partner in the FedEx Ground network.
					</Typography>
					<Typography variant="body1" className={classes.paragraph}>
						At SD Freight Corp, we take pride in our role as a vital link in the supply chain, contributing to the seamless movement of goods and the success of businesses nationwide. We are dedicated to upholding the highest standards in the transportation industry and continue to innovate and evolve to meet the dynamic needs of modern logistics.
					</Typography>
				</div>
				<div className={classes.button}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						component={Link}
						to="/careers"
					>
						JOIN US
					</Button>
				</div>
			</Container>
		</div>
    );
};

export default AboutUs;
