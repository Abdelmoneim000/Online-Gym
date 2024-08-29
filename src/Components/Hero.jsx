import { Box, Button, Typography, Container, Grid } from '@mui/material';
import Blits from '../assets/Blitz.svg';
import Practice from '../assets/Practice.svg';
import onlineTraining from '../assets/Online_training.svg';
import books from '../assets/Books.svg';
import training_body from '../assets/training_body.svg';
import { useRef } from 'react';
import useOnScreen from '../Hooks/Observer.jsx';

const HeroSection = () => {

  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        px: 2,
        textAlign: 'center',
        fontFamily: 'Be Vietnam Pro',
        marginTop: 25,
        animation: isVisible? 'fadeIn 2.5s forwards' : ''
      }}
    >
      <Container>
          <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: '600',
                mb: 2,
                backgroundColor: '#ffffff',
                marginBottom: '60px',
                padding: '10px',
                borderRadius: '10px',
                width: '70%',
                textAlign: 'center',
            }}
            >
              <span><img src={Blits} style={{ marginRight: '15px', marginBottom: '-15px'}}></img></span><span style={{ color: '#7c4dff' }}>Unlock</span> Your Creative Potential
            </Typography>
          </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          <Button variant="contained" sx={{ 
            backgroundColor: '#A38FFD',
            color: '#fff',
            minWidth: "195px",
            minHeight: "40px",
            fontSize: "18px",
            fontWeight: "600",
            borderRadius: "8px",
            }}>
            Explore Courses
          </Button>
          <Button variant="contained" sx={{
            backgroundColor: "#fff",
            minWidth: "159px",
            minHeight: "63px",
            color: '#262626',
            fontWeight: "600",
            fontSize: "18px",
            boxShadow: 'none',
            borderRadius: "8px",
            }}>View Pricing</Button>
        </Box>
        <div style={{
          backgroundImage: `url(${training_body})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          width: '1100px',
          height: '700px',
          marginLeft: "15%"
          }}>

        </div>
        <Grid container spacing={18} justifyContent="center" marginTop={"-350px"}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '1.5px solid #2E2E2E',
                p: 3,
              }}
            >
              <img src={Practice} alt="Training Courses" style={{ width: '100%' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Training Courses
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '1.5px solid #2E2E2E',
                p: 3,
              }}
            >
              <img src={onlineTraining} alt="Online Training" style={{ width: '90%',height:' 50%', margin: '20px 0 0 25px', }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Online Training
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '1.5px solid #2E2E2E',
                p: 3,
              }}
            >
              <img src={books} alt="Books" style={{ width: '150%', marginBottom: "-90px", marginLeft: "-50px" }} />
              <Typography variant="h6" sx={{ marginTop: "-5px" }}>
                Books
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
