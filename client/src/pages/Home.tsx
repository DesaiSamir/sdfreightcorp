// Home.tsx

import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel'; // Import the ImageCarousel component
import HeroImage from '../assets/trucks-on-road.webp';
import { useHeaderRef } from '../contexts/HeaderContext'; // Import the hook
import { fleetImages } from '../helpers/constants';
import { Service } from '../interfaces/Service';
import { makeStyles } from '@mui/styles'; // Import the makeStyles and createTheme functions
import { Theme } from '@mui/material/styles'; // Update the import for Theme

// Import Material-UI icons for selected services
import Drivers from '@mui/icons-material/AirlineSeatReclineNormal';
import RoadIcon from '@mui/icons-material/AddRoad';
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
import DriverIcon from '@mui/icons-material/EmojiTransportation'; // For "Benefits for Drivers"
import ELDIcon from '@mui/icons-material/DriveEta'; // For "Electronic Logging Devices (ELDs)"
import MobileAppIcon from '@mui/icons-material/PhoneAndroid'; // For "Mobile Applications"
import VEDRIcon from '@mui/icons-material/Videocam'; // For "Video Event Data Recording (VEDR)"
import MobileServiceSection from '../components/MobileServiceSection';

const Home: React.FC = () => {
    // Use the hook to access the headerRef
    const headerRef = useHeaderRef();
    // Store header height in state
    const [headerHeight, setHeaderHeight] = useState<number>(0);
	const classes = useStyles(); // Call the useStyles hook with the custom theme

    useEffect(() => {
        // Calculate and set the header height
        if (headerRef.current) {
            const height = headerRef.current.getBoundingClientRect().height;
            setHeaderHeight(height);
        }
    }, [headerRef]);
	const services: Service[] = [
		{
			icon: <RoadIcon color="primary" style={{ fontSize: 100 }} />,
			title: "Dedicated Linehaul Solutions",
			description:
			"Our Dedicated Linehaul Solutions are designed to provide reliable and efficient transportation of goods between FedEx Ground facilities. With a focus on minimizing transit times, SD Freight Corp ensures seamless and timely delivery of your shipments, making us a trusted partner in the FedEx Ground linehaul network.",
		},
		{
			icon: <UnfoldMoreDoubleIcon color="primary" style={{ fontSize: 100 }} />,
			title: "Capacity Solutions",
			description:
			"Unlock seamless shipping with SD Freight Corp's Capacity Solutions. From peak seasons to unexpected surges, our flexible and scalable transportation options guarantee smooth freight transport, upholding the highest standards of quality and reliability.",
		},
		{
			icon: <Drivers color="primary" style={{ fontSize: 100 }} />,
			title: "Professional Drivers",
			description:
			"Our team of dedicated and highly skilled drivers at SD Freight Corp is the backbone of our success. Committed to safety and customer satisfaction, our professionals ensure that your shipments are handled with the utmost care and delivered with precision and reliability.",
		},
	];

	const technologies: Service[] = [
		{
			icon: <VEDRIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Video Event Data Recording (VEDR)",
			description:
				"Safety is our priority. Our VEDR technology records critical events, providing valuable insights for enhancing driver training, reducing risks, and ensuring the highest safety standards for your shipments.",
		},
		{
			icon: <ELDIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Electronic Logging Devices (ELDs)",
			description:
				"Our fleet is equipped with ELDs to ensure compliance with hours-of-service regulations, promoting driver safety and efficient driving practices.",
		},
		{
			icon: <MobileAppIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Mobile Applications",
			description:
				"Our drivers stay connected with our advanced mobile applications, allowing them to access real-time information, communicate with dispatchers, and submit electronic documentation, making the entire process more efficient.",
		},
	];

	const benefits: Service[] = [
		{
			icon: <Drivers color="primary" style={{ fontSize: 100 }} />,
			title: "Home Daily Opportunities",
			description:
				"Enjoy predictable schedules with our dedicated runs, ensuring a healthy work-life balance and more time with your loved ones.",
		},
		{
			icon: <MobileAppIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Paid Training",
			description:
				"We invest in our drivers' success with comprehensive paid training, equipping them with the skills and knowledge for safe and efficient driving.",
		},
		{
			icon: <DriverIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Career Growth Opportunities",
			description:
				"Unlock your potential with us. We provide opportunities for career growth and advancement as you drive with SD Freight Corp.",
		},
		{
			icon: <ELDIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Health & Education Benefits",
			description:
				"Your well-being matters to us. We offer comprehensive health insurance coverage and access to educational resources for personal and professional growth.",
		},
		{
			icon: <VEDRIcon fontSize="large" color="primary" style={{ fontSize: 100 }} />,
			title: "Bonuses & Safety Incentives",
			description:
				"We reward exceptional performance and prioritize safety. Our drivers have access to attractive bonuses and safety incentives.",
		},
		{
			icon: <RoadIcon color="primary" style={{ fontSize: 100 }} />,
			title: "Competitive Pay Rates",
			description:
				"We value your skills and dedication. Our competitive pay rates recognize and reward your experience and commitment.",
		},
	];

	const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    return (
        <div>
            {/* Hero Section */}
            <div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }}>
                {
                    isMobileDevice ? (
                        <div className={classes.mobileHeroImgDiv}> 
							<img src={HeroImage} alt="Trucks on the road" className={classes.mobileHeroImage} />
                        </div>
                    ) : (
                        <img src={HeroImage} alt="Trucks on the road" className={classes.desktopHeroImage} /> 
                    )
                }

                {/* Black Overlay */}
                <div className={classes.blackOverlay}></div>

                {/* Hero Content */}
                <div className={classes.heroContentDiv} > 
					<Typography variant="h4" gutterBottom>
                        Welcome to 
                    </Typography>
					<Typography variant="h2" gutterBottom style={{ fontFamily: 'Harlow Solid Italics' }}>
                        SD Freight Corp.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Delivering Excellence in Trucking
                    </Typography>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/about-us">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Services Section */}
            <section className={classes.section}>
				<Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom>
						Delivering Beyond Expectations
                    </Typography>
					<Grid container spacing={3} justifyContent="center">
						{
							isMobileDevice ? (
								<MobileServiceSection services={services}/>
							) : (
								services.map((service, index) => (
									<Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
										{service.icon}
										<Typography variant="h5" gutterBottom>
											{service.title}
										</Typography>
										<Typography variant="body1">
											{service.description}
										</Typography>
									</Grid>
								))
							)
						}
					</Grid>
                </Container>
            </section>
			
			{/* Technology Advancements */}
			<section className={classes.section}>
				<Container maxWidth="lg">
					<Typography variant="h3" align="center" gutterBottom>
						Technology-Driven Solutions
					</Typography>
					<Grid container spacing={3} justifyContent="center">
						{
							isMobileDevice ? (
								<MobileServiceSection services={technologies}/>
							) : (
								technologies.map((technology, index) => (
									<Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
										{technology.icon}
										<Typography variant="h5" gutterBottom>
											{technology.title}
										</Typography>
										<Typography variant="body1">
											{technology.description}
										</Typography>
									</Grid>
								))
							)
						}
					</Grid>
				</Container>
			</section>

			{/* State-of-the-Art Fleet */}
			<section className={classes.section}>
				<Container maxWidth="lg">
					<Grid container spacing={4}>
						{/* Image Carousel */}
						<Grid item xs={12} md={6}>
							<ImageCarousel images={fleetImages} />
						</Grid>

						{/* Standards and Excellence */}
						<Grid item xs={12} md={6}>
							<Typography variant="h3" gutterBottom>
								State-of-the-Art Fleet
							</Typography>
							<Typography variant="body1">
								At SD Freight Corp, our state-of-the-art fleet is equipped with the latest technology and maintained to the highest industry standards. Our commitment to excellence ensures that your shipments are transported with utmost care, reliability, and efficiency.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>

			{/* Benefits for Drivers */}
			<section className={classes.section}>
				<Container maxWidth="lg">
					<Grid container spacing={3} justifyContent="center">
						{
							isMobileDevice ? (
								<MobileServiceSection services={benefits}/>
							) : (
								benefits.map((benefit, index) => (
									<Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
										{benefit.icon}
										<Typography variant="h5" gutterBottom>
											{benefit.title}
										</Typography>
										<Typography variant="body1">
											{benefit.description}
										</Typography>
									</Grid>
								))
							)
						}
					</Grid>
				</Container>
			</section>

            {/* Call-to-Action Banner */}
            <section className={classes.ctaSection}>
                <Typography variant="h4" gutterBottom>
                    Ready to Get Started?
                </Typography>
                <Button variant="contained" color="primary" size="large" component={Link} to="/contact-us">
                    Contact Us
                </Button>
            </section>
        </div>
    );
};

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
	blackOverlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		opacity: 0.6,
		zIndex: -1,
	},
	heroContent: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
		color: 'white',
		zIndex: 1,
	},
	mobileHeroImgDiv: { 
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		height: '100%', 
		position: 'fixed', 
		top: 0, 
		left: 0, 
		width: '100%', 
		zIndex: -1 
	},
	mobileHeroImage:{ 
		width: 'auto', 
		height: '100%', 
		opacity: 0.7 
	},
	desktopHeroImage: { 
		width: '100%', 
		height: 'auto', 
		opacity: 0.7, 
		position: 'fixed', 
		top: 0, 
		left: 0, 
		zIndex: -1 
	},
	heroContentDiv: { 
		position: 'absolute', 
		top: '50%', 
		left: '50%', 
		transform: 'translate(-50%, -50%)', 
		textAlign: 'center', 
		color: 'white', 
		zIndex: 1 
	},
    section: {
        padding: '4rem 0',
        backgroundColor: 'rgb(6 6 6 / 60%)',
        color: 'white',
    },
    ctaSection: {
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        padding: '2rem 0',
    },
	// Add styles for other sections here...
  }));