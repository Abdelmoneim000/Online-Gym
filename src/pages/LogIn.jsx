import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    AppBar,
    Toolbar
  } from '@mui/material';
  import training_login from '../assets/training_login.svg';
  
  const LogInPage = () => {
    return (
      <Container maxWidth={false} sx={{ width: '100%', padding: 0 }} style={{fontFamily: "Open Sans", fontWeight: 700, overflow: "hidden"}}>
        <Grid container sx={{ height: '100vh', width: '100%' }}>
          <Grid item xs={12} sm={6} sx={{ backgroundColor: 'white', padding: '40px' }}>
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
              <Typography variant="h3" sx={{ color: '#9173FF', fontWeight: 'bold', marginBottom: 2, fontFamily: "Roboto" }}>
                Unlock Your Potential. Start Your Journey Today.
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', marginBottom: 4, fontFamily: "Roboto" }}>
                Welcome back! Please login to your account.
              </Typography>
  
              <TextField
                variant="outlined"
                label="Email Address"
                fullWidth
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '8px', fontFamily: "Roboto" },
                }}
              />
              <TextField
                variant="outlined"
                label="User Name"
                fullWidth
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '8px', fontFamily: "Roboto" },
                }}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '8px', fontFamily: "Roboto" },
                }}
              />
  
            {/* Checkbox and Forgot Password link */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember Me"
                sx={{ fontFamily: 'Roboto' }}
              />
              <Link href="#" variant="body2" color="primary" sx={{ fontFamily: 'Roboto', textDecoration: 'none', cursor: 'pointer', color: "#0000009C" }}>
                Forgot Password?
              </Link>
            </Box>
  
              <Box display="flex" justifyContent="left" mt={4}>
                <Button variant="contained" color="primary" sx={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: "#A38FFD", color: "white", fontFamily: "Roboto", marginRight: "30px" }}>
                    Log In
                </Button>
                <Button 
                variant="outlined" 
                color="primary"
                onClick={() => window.location.href = '/signup'} 
                sx={{ padding: '10px 20px', borderRadius: '8px', borderColor: "#A38FFD", color: "#A38FFD", fontFamily: "Roboto"}}>
                  Sign Up
                </Button>
              </Box>
  
              <Typography variant="body2" sx={{ color: '#555', textAlign: 'center', marginTop: 4, fontFamily: "Roboto" }}>
                Or login with
              </Typography>
  
              <Box display="flex" justifyContent="center" mt={2}>
                <Link href="#" variant="body2" color="primary" sx={{ margin: '0 16px', color: "#A38FFD", textDecoration: "none", fontFamily: "Roboto" }}>
                  Facebook
                </Link>
                <Link href="#" variant="body2" color="primary" sx={{ margin: '0 16px', color: "#A38FFD", textDecoration: "none", fontFamily: "Roboto" }}>
                  Google
                </Link>
              </Box>
            </Box>
          </Grid>
  
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', backgroundColor: '#FAFAFA', fontFamily: 'Roboto' }}>
            {/* Navigation Bar */}
            <AppBar position="static" elevation={0} sx={{marginBottom: "50px", backgroundColor: 'transparent', boxShadow: 'none', paddingTop: 2 }}>
              <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
                <Link href="http://localhost:5173/" className='nav-link' underline="none" sx={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>
                  Home
                </Link>
                <Link href="#" className='nav-link' underline="none" sx={{ color: 'black', fontSize: '18px' }}>
                  About Us
                </Link>
                <Link href="#" className='nav-link' underline="none" sx={{ color: 'black', fontSize: '18px' }}>
                  Pricing
                </Link>
                <Link href="#" className='nav-link' underline="none" sx={{ color: 'black', fontSize: '18px' }}>
                  Contact
                </Link>
              </Toolbar>
            </AppBar>
  
            {/* Fitness Illustration */}
            <img
              src={training_login}
              alt="Fitness Illustration"
              style={{ width: '80%', maxHeight: '100vh', objectFit: 'contain' }}
            />
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default LogInPage;
  