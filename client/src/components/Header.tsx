// Header.tsx

import React, { useContext, useState } from 'react';
import { 
	AppBar, Toolbar, Button, IconButton, useMediaQuery, 
	useTheme, Drawer, List, ListItem, ListItemText 
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles'; // Import makeStyles for custom styles
import { Theme } from '@mui/material/styles'; // Update the import for Theme

import logo from '../assets/sdfreight-logo2a.webp';
import { HeaderContext } from '../contexts/HeaderContext'; // Import the context

const Header: React.FC = () => {
    // Access the headerRef from the context
    const headerRef = useContext(HeaderContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    // Custom styles for the header
    const classes = useStyles();

    // Get the current theme and check if screen size is small (mobile)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMobileMenuOpen = () => {
        setIsMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <AppBar position="sticky" ref={headerRef} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {isMobile ? (
                    <>
						<div className={classes.grow} />
                        <img src={logo} alt="Company Logo" className={classes.mobileLogo} />
                        <div className={classes.grow} />
						<div className={classes.menuIcon}>
							<IconButton color="inherit" onClick={handleMobileMenuOpen} >
								<Menu />
							</IconButton>
						</div>
                    </>
                ) : (
                    <>
                        <img src={logo} alt="Company Logo" className={classes.logo} />
                        <div className={classes.grow} />
                        <div className={classes.desktopNavLinks}>
                            <Button color="inherit" component={Link} to="/sdfreightcorp/">
                                HOME
                            </Button>
                            <Button color="inherit" component={Link} to="/sdfreightcorp/about">
                                ABOUT US
                            </Button>
                        </div>
                        <div className={classes.grow} />
                        <Button color="inherit" component={Link} to="/sdfreightcorp/login">
                            Login
                        </Button>
                    </>
                )}
            </Toolbar>
            <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleMobileMenuClose} className={classes.mobileMenu}>
				<List> {/* Apply menuList class here */}
					<ListItem button component={Link} to="/sdfreightcorp/" onClick={handleMobileMenuClose}>
						<ListItemText primary="HOME" />
					</ListItem>
					<ListItem button component={Link} to="/sdfreightcorp/about" onClick={handleMobileMenuClose}>
						<ListItemText primary="ABOUT US" />
					</ListItem>
					<ListItem button component={Link} to="/sdfreightcorp/login" onClick={handleMobileMenuClose}>
						<ListItemText primary="LOGIN" />
					</ListItem>
				</List>
			</Drawer>
        </AppBar>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
		backgroundColor: '#5d6060',
	},
	toolbar: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: 'auto',
        height: '50px',
		position: 'absolute',
		left: '16px',
    },
    mobileLogo: {
        width: '200px',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
        },
    },
    desktopNavLinks: {
        display: 'flex',
        gap: '1rem',
        marginLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    menuIcon: {
		position: 'absolute',
		right: '12px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    mobileMenu: {
        '& .MuiPaper-root': {
            backgroundColor: 'black',
			color: 'white',
        },
        '& .MuiList-root': {
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
        },
    },
}));

export default Header;

