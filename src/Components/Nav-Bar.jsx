import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const pages = ['Home', 'Courses', 'About Us', 'Pricing', 'Contact'];

function ResponsiveAppBar({ onScrollToPricing, onScrollToFooter }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
<AppBar 
  position="fixed" 
  sx={{ 
    backgroundColor: 'transparent', 
    boxShadow: 'none', 
    width: "100%", 
    padding: 0,
  }}
>
  <Toolbar 
    disableGutters 
    sx={{ 
      width: '100%', 
      padding: '0 16px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-around', // Ensure the nav items are spaced between
      alignItems: 'center' // Center the content vertically
    }}
  >
    {/* Left: Menu items */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {pages.map((page, index) => (
        <Button
          key={index}
          className='nav-link'
          onMouseOver={() => {
            setAnchorElNav(index);
          }}
          onClick={() => {
            if (page === 'Pricing') {
              onScrollToPricing();
            } else if (page === 'Contact') {
              onScrollToFooter();
            } else if (index === 0) {
              window.location.href = '/';
            } else if (page === 'Courses') {
              window.location.href = '/courses';
            }
          }}
          sx={{
            textTransform: 'none',
            color: 'white',
            fontSize: '16px',
            fontWeight: '500',
            padding: '12px 24px', // Adjust padding for larger buttons
          }}
        >
          {page}
        </Button>
      ))}
    </Box>

    {/* Right: Search, AR/EN, Login, and Sign Up */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      

      <Typography 
        sx={{ 
          fontWeight: 'bold', 
          color: 'white', 
        }}
      >
        AR/EN
      </Typography>

      <Button
        onClick={() => { window.location.href = '/login'; }}
        sx={{
          textTransform: 'none',
          color: 'white',
          borderRadius: '8px',
          padding: '6px 24px',
          "&:hover": {
            backgroundColor: 'white',
            color: 'black'
          }
        }}
      >
        Login
      </Button>

      <Button
        sx={{
          textTransform: 'none',
          color: 'white',
          backgroundColor: 'transparent',
          borderRadius: '8px',
          padding: '6px 24px',
          "&:hover": {
            backgroundColor: 'white',
            color: 'black'
          }
        }}
        onClick={() => { window.location.href = '/signup'; }}
      >
        Sign Up
      </Button>
    </Box>
  </Toolbar>
</AppBar>

  );
}

ResponsiveAppBar.propTypes = {
  onScrollToPricing: PropTypes.func.isRequired,
  onScrollToFooter: PropTypes.func.isRequired,
};

export default ResponsiveAppBar;
