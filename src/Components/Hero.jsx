import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Blits from '../assets/Blitz.svg';
import training from '../assets/training_body.svg';
import Practice from '../assets/Practice.svg';
import onlineTraining from '../assets/Online_training.svg';
import books from '../assets/Books.svg';

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        textAlign: 'center',
        fontFamily: 'Be Vietnam Pro'
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: '600',
            mb: 2,
            backgroundColor: '#ffffff',
            marginBottom: '50px',
            padding: '20px',
            borderRadius: '10px',
        }}
        >
          <span><img src={Blits} style={{ marginRight: '15px', marginBottom: '-15px'}}></img></span><span style={{ color: '#7c4dff' }}>Unlock</span> Your Creative Potential
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          <Button variant="contained" sx={{ 
            backgroundColor: '#A38FFD',
            color: '#fff',
            minWidth: "195px",
            minHeight: "40px",
            fontSize: "18px",
            fontWeight: "600",
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

            }}>View Pricing</Button>
        </Box>
        <Grid container spacing={18} justifyContent="center">
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
