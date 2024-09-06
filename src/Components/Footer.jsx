import { Container, Grid, Typography, Box, Link, IconButton } from "@mui/material";
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/Insta.svg';
import TikTokIcon from '../assets/Tiktok.svg';
import XIcon from '../assets/X.svg';
import YouTubeIcon from '../assets/Youtube.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useOnScreen from '../Hooks/Observer.jsx';
import { useRef } from 'react';

export default function Footer() {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);


    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          backgroundColor: "white",
          py: 4,
          fontFamily: "DM Sans",
          width: "100%",
          height: "40vh",
          background:
            "linear-gradient(180deg, #000000 0%, #1E1E1E 51%, #1E1E1E 100%)",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "2px solid white",
        }}
      >
        <Container
          style={{ fontFamily: "DM Sans", width: "100%" }}
          sx={{
            fontFamily: "DM Sans",
            width: "100%",
            animation: isVisible ? "fadeIn 2.5s forwards" : "",
          }}
        >
          <Grid container spacing={12}>
            <Grid item xs={12} sm={4} md={3}>
              <Typography
                variant="h5"
                color="white"
                fontFamily={"DM Sans"}
                gutterBottom
                sx={{
                  opacity: 0.7,
                  mb: 2,
                }}
              >
                Logo
              </Typography>
              <Typography
                variant="body2"
                color="white"
                fontFamily={"DM Sans"}
                sx={{ opacity: "0.4" }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              </Typography>
              <Box mt={2}>
                <IconButton href="#" color="inherit">
                  <img src={FacebookIcon} />
                </IconButton>
                <IconButton href="#" color="inherit">
                  <img src={InstagramIcon} />
                </IconButton>
                <IconButton href="#" color="inherit">
                  <img src={TikTokIcon} />
                </IconButton>
                <IconButton href="#" color="inherit">
                  <img src={XIcon} />
                </IconButton>
                <IconButton href="#" color="inherit">
                  <img src={YouTubeIcon} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={2} textAlign={"left"}>
              <Typography
                variant="h6"
                color={"white"}
                gutterBottom
                fontFamily={"DM Sans"}
                fontSize={"24px"}
                sx={{ opacity: 0.7, mb: 2 }}
              >
                Product
              </Typography>
              <Link
                href="#"
                color="inherit"
                variant="body2"
                display="block"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  color: "white",
                  opacity: 0.4,
                }}
                gutterBottom
              >
                Pricing
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={2} textAlign={"left"}>
              <Typography
                variant="h6"
                color={"white"}
                gutterBottom
                fontFamily={"DM Sans"}
                fontSize={"24px"}
                sx={{ opacity: 0.7, mb: 2 }}
              >
                Company
              </Typography>
              <Link
                href="#"
                color="inherit"
                variant="body2"
                display="block"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  color: "white",
                  opacity: 0.4,
                }}
                gutterBottom
              >
                About
              </Link>
              <Link
                href="#"
                color="inherit"
                variant="body2"
                display="block"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  color: "white",
                  opacity: 0.4,
                }}
                gutterBottom
              >
                Contact us
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={2} textAlign={"left"}>
              <Typography
                variant="h6"
                color={"white"}
                gutterBottom
                fontFamily={"DM Sans"}
                fontSize={"24px"}
                sx={{ opacity: 0.7, mb: 2 }}
              >
                Support
              </Typography>
              <Link
                href="#"
                color="inherit"
                variant="body2"
                display="block"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  color: "white",
                  opacity: 0.4,
                  width: "150px",
                }}
                gutterBottom
              >
                Getting started
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={3} textAlign={"left"}>
              <Typography
                variant="h6"
                color={"white"}
                gutterBottom
                fontFamily={"DM Sans"}
                fontSize={"24px"}
                sx={{ opacity: 0.7, mb: 2 }}
              >
                Contacts us
              </Typography>
              <Box display="flex" alignItems="left" mb={1}>
                <MailOutlineIcon sx={{ mr: 1, color: 'white', opacity: 0.7 }} />
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "DM Sans",
                    fontSize: "18px",
                    color: "white",
                    opacity: 0.4,
                  }}
                  fontFamily={"DM Sans"}
                >
                  contact@company.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="left" mb={1}>
                <PhoneIcon sx={{ mr: 1, color: 'white', opacity: 0.7 }} />
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "DM Sans",
                    fontSize: "18px",
                    color: "white",
                    opacity: 0.4,
                  }}
                  fontFamily={"DM Sans"}
                >
                  (414) 687 – 5892
                </Typography>
              </Box>
              <Box display="flex" alignItems="left" mb={1}>
                <LocationOnIcon sx={{ mr: 1, color: 'white', opacity: 0.7 }}/>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "DM Sans",
                    fontSize: "18px",
                    color: "white",
                    opacity: 0.4,
                  }}
                  textAlign={"left"}
                  fontFamily={"DM Sans"}
                  mr={1}
                >
                  794 Mcallister St, San Francisco, 94102
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
}
