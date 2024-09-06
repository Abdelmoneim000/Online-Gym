import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  AppBar,
  Toolbar,
  Box
} from '@mui/material';

import training_signup from '../assets/training_signup.png';
import { useState } from 'react';

const SignUpPage = () => {

  const [email, setEmail] = useState('');


  const handleSignUp = async () => {
    try {
      const response = await fetch(`http://testgymproject.runasp.net/Users/${email}`, {
        method: 'PATCH',
        headers: {
          'API-Key': 'LnwOI0lbkv5iYlSL',
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response is successful
      if (response.ok) {
        console.log('Verification code sent successfully.');
      } else {
        console.log('Failed to send verification code. Email might already exist or is not valid.');
      }
    } catch (error) {
      // Log the error message
      console.error('Error occurred while sending verification code:', error.message);
    }
  };
  

  return (
    <Container maxWidth={false} sx={{
      width: '100%',
      background: 'linear-gradient(180deg, #000000 0%, #1E1E1E 51%, #1E1E1E 100%)',
      padding: 0
      }} style={{fontFamily: "Open Sans", fontWeight: 700, overflow: "hidden"}}>
      <Grid container sx={{ height: '100vh', width: '100%' }}>
        <Grid item xs={12} sm={6} sx={{ padding: '40px' }}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2, fontFamily: "Roboto", textAlign: "left" }}>
              Unlock Your Potential. Start Your Journey Today.
            </Typography>
            <Typography variant="body1" sx={{ color: '#85E22B', marginBottom: 4, mt: 2, fontFamily: "Roboto", textAlign: "left" }}>
              Welcome! Please sign up to create your account.
            </Typography>

            <TextField
              variant="outlined"
              label="Email Address"
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: { borderRadius: '8px', fontFamily: "Roboto", backgroundColor: '#FFFFFF' },
              }}
            />
            <TextField
              variant="outlined"
              label="User Name"
              fullWidth
              margin="normal"
              InputProps={{
                sx: { borderRadius: '8px', fontFamily: "Roboto", backgroundColor: '#FFFFFF', },
              }}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              InputProps={{
                sx: { borderRadius: '8px', fontFamily: "Roboto", backgroundColor: '#FFFFFF', },
              }}
            />

          {/* Checkbox and Forgot Password link */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <FormControlLabel
              control={<Checkbox color="primary" sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#85E22B',
                }
              }}/>}
              label="Remember Me"
              sx={{ fontFamily: 'Roboto', color: 'white', opacity: 0.6 }}
            />
            <Link href="#" variant="body2" color="primary" sx={{ fontFamily: 'Roboto', textDecoration: 'none', cursor: 'pointer', color: "white", opacity: 0.6 }}>
              Forgot Password?
            </Link>
          </Box>

            <Box display="flex" justifyContent="left" mt={4}>
              <Button 
              variant="outlined" 
              color="primary"
              onClick={() => {
                handleSignUp();
                window.location.href = '/login';
              }} 
              sx={{
                padding: '10px 20px',
                borderRadius: '8px',
                color: "black",
                backgroundColor: "white",
                fontFamily: "Roboto",
                marginRight: "30px",
                '&:hover': {
                  backgroundColor: '#85E22B',
                  color: "white",
                }
              }}>
                Sign Up
              </Button>
              <Button variant="contained" color="primary"
                onClick={() => window.location.href = '/login'}
                sx={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  color: "black",
                  backgroundColor: "white",
                  fontFamily: "Roboto",
                  marginRight: "30px",
                  '&:hover': {
                    backgroundColor: '#85E22B',
                    color: "white",
                  }
                }}>
                  Log In
              </Button>
            </Box>

            <Typography variant="body1" sx={{ color: 'white', textAlign: 'center', marginTop: 4, fontFamily: "Roboto", opacity: 0.6 }}>
              login with
            </Typography>

            <Box display="flex" justifyContent="center" mt={2}>
              <Link href="#" variant="body2" color="primary" sx={{ margin: '0 16px', color: "#85E22B", textDecoration: "none", fontFamily: "Roboto" }}>
                Facebook
              </Link>
              <Link href="#" variant="body2" color="primary" sx={{ margin: '0 16px', color: "#85E22B", textDecoration: "none", fontFamily: "Roboto" }}>
                Google
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily: 'Roboto',
        }}>
          {/* Navigation Bar */}
          <AppBar position="static" elevation={0} sx={{marginBottom: "50px", backgroundColor: 'transparent', boxShadow: 'none', paddingTop: 2 }}>
            <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
              <Link href="/" className='nav-link' underline="none" sx={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
                Home
              </Link>
              <Link href="#" className='nav-link' underline="none" sx={{ color: 'white', fontSize: '18px' }}>
                About Us
              </Link>
              <Link href="#" className='nav-link' underline="none" sx={{ color: 'white', fontSize: '18px' }}>
                Pricing
              </Link>
              <Link href="#" className='nav-link' underline="none" sx={{ color: 'white', fontSize: '18px' }}>
                Contact
              </Link>
            </Toolbar>
          </AppBar>

          {/* Fitness Illustration */}
          <img
            src={training_signup}
            alt="Fitness Illustration"
            style={{ width: '1100px', marginTop: '-150px', marginLeft: '-200px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
