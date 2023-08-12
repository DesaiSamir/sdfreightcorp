import React from 'react';
import { Typography, Link, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { links } from '../helpers/constants';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#212121',
        color: '#fff',
        padding: '1rem 0',
        textAlign: 'center',
        marginTop: 'auto',
    },
}));

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} {`SD Freight Corp. All rights reserved. `}
                    <Link component={RouterLink} to={links.privacy} color="inherit">
                        Privacy Policy
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
