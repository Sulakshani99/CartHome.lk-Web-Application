import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const dispatch = useDispatch();

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const linkStyle = {
        mx: 2,
        cursor: 'pointer', // Set the cursor to a hand pointer
        color: 'inherit',
    };

    const buttonStyle = {
        ...linkStyle,
        backgroundColor: 'lightblue', // Set the background color to dark blue
        '&:hover': {
            backgroundColor: '#fff', // Darker shade on hover
        },
    };

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#3498db' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Box display="flex" alignItems="center">
                        <HomeIcon style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
                        <span style={{ fontFamily: 'YouPreferredFont', fontSize: '2.3em' }}>Cart</span>
                        <span style={{ fontFamily: 'Couriere', fontSize: '1.7em' }}>Home.lk</span>
                    </Box>
                </Typography>
                <nav>
                    <Link
                        onClick={() => handleNavigation('/')}
                        sx={linkStyle}
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => handleNavigation('/about')}
                        sx={linkStyle}
                    >
                        About
                    </Link>
                    <Link
                        onClick={() => handleNavigation('/service')}
                        sx={linkStyle}
                    >
                        Services
                    </Link>
                    <Link
                        onClick={() => handleNavigation('/contact')}
                        sx={linkStyle}
                    >
                        Contact Us
                    </Link>
                </nav>
                <Button
                    onClick={() => handleNavigation('/bs_signup')}
                    variant="outlined"
                    sx={buttonStyle}
                >
                    Sign Up
                </Button>
                <Button
                    onClick={() => handleNavigation('/bs_signin')}
                    variant="outlined"
                    sx={buttonStyle}
                >
                    Log In
                </Button>
                <Button
                    onClick={() => {
                        dispatch(logout());
                        handleNavigation('/');
                    }}
                    variant="outlined"
                    sx={buttonStyle}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
