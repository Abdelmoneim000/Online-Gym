import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Home', 'Courses', 'About Us', 'Pricing', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#F6F4FF', boxShadow: 'none', padding: '0 24px' }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {pages.map((page, index) => (
            <Button
              key={index}
              onMouseOver={() => {
                setAnchorElNav(index);
              }}
              sx={{
                textTransform: 'none',
                color: '#000',
                margin: '0 20px',
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
              marginRight: '24px',
            }}
          >
            <SearchIcon sx={{ color: '#000', marginLeft: '25%' }} />
            <InputBase className='inputField' placeholder="Search" sx={{ marginLeft: '8px', color: '#000' }} />
          </Box>
          <Typography sx={{ fontWeight: 'bold', color: '#000', marginRight: '24px' }}>
            AR/EN
          </Typography>
          <Button
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
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
