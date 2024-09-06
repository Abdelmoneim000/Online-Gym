import { Box, Button, Typography, Container, Grid } from '@mui/material';
import Blitz from '../assets/Blitz.svg';
import Practice from '../assets/Practice.svg';
import onlineTraining from '../assets/Online_training.svg';
import books from '../assets/Books.svg';
import training_body from '../assets/training_body.png';
import { useRef } from 'react';
import useOnScreen from '../Hooks/Observer.jsx';

const HeroSection = () => {

  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <Box
      ref={ref}
      sx={{
        paddingTop: 56,
        marginBottom: 40,
        textAlign: 'center',
        fontFamily: 'Be Vietnam Pro',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #000000 0%, #1E1E1E 51%, #1E1E1E 100%)',
        height: ' 70vh',
      }}
    >
      <Container sx={{
      }}>
        <img src={training_body} alt="training_image" style={{
          marginLeft:"-480px",
          marginTop: "-477px",
          zIndex:"1",
          }}/>
      </Container>
      <Container sx={{zIndex:"1000", marginLeft: "100px", animation: isVisible? 'fadeIn 2.5s forwards' : '',}}>
        <div style={{display:"flex", justifyContent: "left", flexDirection: "column"}}>
            <Container sx={{display: 'flex', justifyContent: 'left'}}>
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
                <span><img src={Blitz} style={{ marginRight: '15px', marginBottom: '-15px'}}></img></span><span style={{ color: '#528421' }}>Unlock</span> Your Creative Potential
              </Typography>
            </Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, paddingRight: "330px" }}>
            <Button variant="contained" sx={{ 
              backgroundColor: '#528421',
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
        </div>
        <div style={{
          // Add the background Image here to the hero section
          /*backgroundImage: `url(${training_body})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",*/
          width: '1100px',
          height: '450px',
          marginLeft: "15%"
          }}>

        </div>
        <Grid container spacing={18} justifyContent="center" marginTop={"-350px"} marginLeft={"100px"}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#4F4F4F',
                borderRadius: '24px',
                border: '1.5px solid #2E2E2E',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '50px',
                alignItems: 'center',
                p: 3,
              }}
            >
              <img src={Practice} alt="Training Courses" style={{ width: '70%' }} />
              <Typography variant="h6" sx={{ mt: 2, color: "white", fontFamily: "Be Vietnam Pro", fontWeight: "400" }}>
                Training Courses
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#4F4F4F',
                borderRadius: '24px',
                border: '1.5px solid #2E2E2E',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '50px',
                alignItems: 'center',
                p: 3,
              }}
            >
              <img src={onlineTraining} alt="Online Training" style={{ width: '90%',height:' 50%', margin: '20px 0 0 25px', }} />
              <Typography variant="h6" sx={{ mt: 2, color: "white", fontFamily: "Be Vietnam Pro", fontWeight: "400" }}>
                Online Training
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#4F4F4F',
                borderRadius: '24px',
                border: '1.5px solid #2E2E2E',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                p: 3,
              }}
            >
              <img src={books} alt="Books" style={{ width: '70%', height:' 50%', margin: '20px 0 0 25px' }} />
              <Typography variant="h6" sx={{ mt: 2, color: "white", fontFamily: "Be Vietnam Pro", fontWeight: "400" }}>
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
