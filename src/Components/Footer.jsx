import { Container, Grid, Typography, Box, Link, IconButton } from "@mui/material";
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/Insta.svg';
import TikTokIcon from '../assets/Tiktok.svg';
import XIcon from '../assets/X.svg';
import YouTubeIcon from '../assets/Youtube.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from '../assets/Logo.svg';
import useOnScreen from '../Hooks/Observer.jsx';
import { useRef } from 'react';

export default function Footer() {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);


    return (
        <Box ref={ref} sx={{
            display: "flex",
            backgroundColor: 'white',
            py: 4,
            fontFamily: 'DM Sans',
            width: '100%',
            animation: isVisible? 'fadeIn 2s forwards' : '',
            }}>
            <Container style={{fontFamily: 'DM Sans', width: "100%"}} sx={{fontFamily: 'DM Sans', width: "100%"}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4} md={3} >
                        <Typography variant="h6" color="primary" fontFamily={"DM Sans"} gutterBottom>
                            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" fontFamily={"DM Sans"}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                        </Typography>
                        <Box mt={2}>
                            <IconButton href="#" color="inherit"><img src={FacebookIcon} /></IconButton>
                            <IconButton href="#" color="inherit"><img src={InstagramIcon} /></IconButton>
                            <IconButton href="#" color="inherit"><img src={TikTokIcon} /></IconButton>
                            <IconButton href="#" color="inherit"><img src={XIcon} /></IconButton>
                            <IconButton href="#" color="inherit"><img src={YouTubeIcon} /></IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} textAlign={"left"}>
                        <Typography variant="h6" gutterBottom fontFamily={"DM Sans"}>Product</Typography>
                        <Link href="#" color="inherit" variant="body2" display="block"
                        style={{
                            textDecoration: 'none',
                            fontFamily: 'DM Sans'
                        }} gutterBottom>
                            Pricing
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} textAlign={"left"}>
                        <Typography variant="h6" fontFamily={"DM Sans"} gutterBottom>Company</Typography>
                        <Link href="#" color="inherit" variant="body2" display="block" style={{
                            textDecoration: 'none',
                            fontFamily: 'DM Sans'
                            }} gutterBottom>
                            About
                        </Link>
                        <Link href="#" color="inherit" variant="body2" display="block"
                        style={{
                            textDecoration: 'none',
                            fontFamily: 'DM Sans'
                        }} gutterBottom>
                            Contact us
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} textAlign={"left"}>
                        <Typography variant="h6" gutterBottom fontFamily={"DM Sans"}>Support</Typography>
                        <Link href="#" color="inherit" variant="body2" display="block"
                        style={{
                            textDecoration: 'none',
                            fontFamily: 'DM Sans'
                        }} gutterBottom>
                            Getting started
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} textAlign={"left"}>
                        <Typography variant="h6" fontFamily={"DM Sans"} gutterBottom>Contacts us</Typography>
                        <Box display="flex" alignItems="left" mb={1}>
                            <MailOutlineIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" color="textSecondary" fontFamily={"DM Sans"}>
                                contact@company.com
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="left" mb={1}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" color="textSecondary" fontFamily={"DM Sans"}>
                                (414) 687 – 5892
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="left" mb={1}>
                            <LocationOnIcon />
                            <Typography variant="body2" color="textSecondary" textAlign={"left"} fontFamily={"DM Sans"} mr={1}>
                                794 Mcallister St, San Francisco, 94102
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
