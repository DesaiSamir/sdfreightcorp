// MobileServiceSection.tsx

import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { Service } from '../interfaces/Service';

interface MobileServiceSectionProps {
    services: Service[];
}

const MobileServiceSection: React.FC<MobileServiceSectionProps> = ({ services }) => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            centerMode
            centerSlidePercentage={100}
            emulateTouch
            swipeable
        >
            {services.map((service, index) => (
                <Grid item xs={12} md={4} style={{ textAlign: 'center', maxWidth: '300px', margin: '0 auto' }} key={`service-${index}`}>
                    {service.icon}
                    <Typography variant="h5" gutterBottom>
                        {service.title}
                    </Typography>
                    <Typography variant="body1">
                        {service.description}
                    </Typography>
                </Grid>
            ))}
        </Carousel>
    );
};

export default MobileServiceSection;
