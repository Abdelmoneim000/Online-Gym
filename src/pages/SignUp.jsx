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
import training_signup from '../assets/training_signup.svg';

const SignUpPage = () => {
  return (
    <Container maxWidth={false} sx={{ width: '100%', padding: 0 }} style={{fontFamily: "Open Sans", fontWeight: 700}}>
      <Grid container sx={{ height: '100vh', width: '100%' }}>
        <Grid item xs={12} sm={6} sx={{ backgroundColor: 'white', padding: '40px' }}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
            <Typography variant="h3" sx={{ color: '#9173FF', fontWeight: 'bold', marginBottom: 2, fontFamily: "Roboto" }}>
              Unlock Your Potential. Start Your Journey Today.
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', marginBottom: 4, fontFamily: "Roboto" }}>
              Welcome! Please sign up to create your account.
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

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
              sx={{ marginTop: 2, fontFamily: "Roboto" }}
            />

            <Box display="flex" justifyContent="left" mt={4}>
              <Button variant="contained" color="primary" sx={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: "#A38FFD", color: "white", fontFamily: "Roboto", marginRight: "30px" }}>
                Sign Up
              </Button>
              <Button
              variant="outlined"
              color="primary"
              onClick={() => { window.location.href = '/login'; }}
              sx={{ padding: '10px 20px', borderRadius: '8px', borderColor: "#A38FFD", color: "#A38FFD", fontFamily: "Roboto"}}>
                Log In
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
          <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none', paddingTop: 2 }}>
            <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
              <Link href="#" className='nav-link' underline="none" sx={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>
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
            src={training_signup}
            alt="Fitness Illustration"
            style={{ width: '65rem', maxHeight: '100vh', objectFit: 'contain', marginLeft: '-250px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
