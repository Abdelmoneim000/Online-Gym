import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

const pages = ['Home', 'Courses', 'About Us', 'Pricing', 'Contact'];

function ResponsiveAppBar({ onScrollToPricing, onScrollToFooter }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#F6F4FF', 
        boxShadow: 'none', 
        width: "100%", 
        padding: 0 
      }}
    >
      <Toolbar 
        disableGutters 
        sx={{ 
          width: '100%', 
          padding: '0 16px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {pages.map((page, index) => (
            <Button
              key={index}
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
                }
              }}
              sx={{
                textTransform: 'none',
                color: '#000',
                margin: '0 10px',
                fontSize: '18px',
                fontWeight: '400',
                minHeight: '55px',
                minWidth: '100px',
                ...(index === anchorElNav && {
                  backgroundColor: '#E6E6F6',
                  borderRadius: '8px',
                }),
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '6px 12px',
              marginRight: '16px', // Adjust margin between elements
            }}
          >
            <SearchIcon sx={{ color: '#000' }} />
            <InputBase 
              className='inputField' 
              placeholder="Search" 
              sx={{ marginLeft: '8px', color: '#000', justifyContent: 'center' }} 
            />
          </Box>

          <Typography 
            sx={{ 
              fontWeight: 'bold', 
              color: '#000', 
              marginRight: '16px' // Adjust margin
            }}
          >
            AR/EN
          </Typography>

          <Button
            onClick={() => { window.location.href = '/login'; }}
            sx={{
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#8F84FF',
              borderRadius: '8px',
              padding: '6px 16px',
              marginRight: '8px',
            }}
          >
            Login
          </Button>

          <Button
            sx={{
              textTransform: 'none',
              color: '#5553FF',
              backgroundColor: '#E6E4FF',
              borderRadius: '8px',
              padding: '6px 16px',
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
