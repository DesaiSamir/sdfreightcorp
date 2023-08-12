// Header.tsx

import React, { useContext } from 'react';
import { 
	AppBar, Toolbar, Button, IconButton, useMediaQuery, Box,
	useTheme, Menu, MenuItem, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles'; // Import makeStyles for custom styles
import { Theme } from '@mui/material/styles'; // Update the import for Theme

import logo from '../assets/sdfreight-logo2a.webp';
import { HeaderContext } from '../contexts/HeaderContext'; // Import the context
import { links } from '../helpers/constants';

const Header: React.FC = () => {
    // Access the headerRef from the context
    const headerRef = useContext(HeaderContext);

    // Custom styles for the header
    const classes = useStyles();

    // Get the current theme and check if screen size is small (mobile)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorElUser(event.currentTarget);
	};
  
	const handleCloseUserMenu = () => {
	  setAnchorElUser(null);
	};

    return (
        <AppBar position="sticky" ref={headerRef} sx={{ backgroundColor: '#5d6060', }}>
			<Toolbar className={classes.toolbar} disableGutters>
				{isMobile ? (
					<>
						<div className={classes.grow} />
						<img src={logo} alt="Company Logo" className={classes.mobileLogo} />
						<div className={classes.grow} />
						<Box sx={{ flexGrow: 0 }} className={classes.menuIcon}>
							<IconButton color="inherit" onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
								<MenuIcon />
							</IconButton>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem key='home' component={Link} to={links.home} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">HOME</Typography>
								</MenuItem>
								<MenuItem key='about' component={Link} to={links.about} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">ABOUT US</Typography>
								</MenuItem>
								<MenuItem key='careers' component={Link} to={links.careers} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">CAREERS</Typography>
								</MenuItem>
								<MenuItem key='login' component={Link} to={links.login} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">LOGIN</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</>
				) : (
					<>
						<img src={logo} alt="Company Logo" className={classes.logo} />
						<div className={classes.grow} />
						<div className={classes.desktopNavLinks}>
							<Button color="inherit" component={Link} to={links.home}>
								HOME
							</Button>
							<Button color="inherit" component={Link} to={links.about}>
								ABOUT US
							</Button>
							<Button color="inherit" component={Link} to={links.careers}>
								CAREERS
							</Button>
							<Button color="inherit" component={Link} to={links.login}>
								Login
							</Button>
						</div>
					</>
				)}
			</Toolbar>
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
        width: '50px',
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

