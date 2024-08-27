import { Typography, Container, Box, Grid, Card, CardContent, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Box_Unlocked from '../assets/Box_Unlocked.svg';
import useOnScreen from "../Hooks/Observer";
import { useRef, useState } from "react";

export default function Pricing() {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const [card, setCard] = useState(null);

    
    const plans = [
        { title: "Free Plan", price: <span style={{fontWeight: "900"}}>Free</span>, features: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"] },
        { title: "Standard Plan", price: (<><span style={{fontWeight: "900"}}>$9</span><span> / month</span></>), features: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"] },
        { title: "Premium Plan", price: (<><span style={{fontWeight: "900"}}>$12</span><span> / month</span></>), features: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"], highlighted: true }
    ];

    return (
        <Container ref={ref} sx={{fontFamily: "Rubik", animation: isVisible ? 'fadeIn 2s forwards' : '',}}>
                <Typography variant="h3" gutterBottom sx={{fontWeight: "500", textAlign: "center"}}>
                    Choose Your Plan
                </Typography>
            <Box textAlign="center" mb={4} display={"flex"} justifyContent={"center"}>
                <Typography variant="subtitle1" color="textSecondary" sx={{fontSize: "20px", width: "40rem"}}>
                    Let&apos;s choose the package that is best for you and explore it happily and cheerfully.
                </Typography>
            </Box>
            <Grid container spacing={1} justifyContent="center" marginTop={"5%"}>
                {plans.map((plan, index) => (
                    <Grid item xs={12} md={4} key={index} padding={10} sx={{borderWidth: "50px"}}>
                        <Card
                        className="pricing-card"
                            onMouseOver={() => {
                                setCard(index);
                                console.log(card);
                            }}
                            sx={{
                                borderColor: card === index ? "#A38FFD" : "#DDDDDD",
                                borderRadius: "10px",
                                padding: "20px",
                                width: "100%",
                            }}
                        >
                            <CardContent sx={{display: "flex", justifyContent: "space-between", flexDirection: "column", height: "650px"}}>
                                <Box>
                                    <Box textAlign="center" mb={2}>
                                        {/* Placeholder for the image */}
                                        <img src={Box_Unlocked} alt="openning box" />
                                    </Box>
                                    <Typography variant="h6" marginBottom={"10%"} gutterBottom>
                                        {plan.title}
                                    </Typography>
                                    <Box my={2}>
                                        {plan.features.map((feature, idx) => (
                                            <Typography key={idx} variant="body1" display="flex" alignItems="center" justifyContent="center" lineHeight={"40px"} gutterBottom>
                                                <CheckIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="h5" gutterBottom>
                                        {plan.price}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            marginTop: "3%",
                                            color: "black",
                                            borderRadius: "9px",
                                            borderColor: "#30235B",
                                            fontWeight: "600",
                                            fontSize: "20px",
                                            textTransform: "none",
                                            width: "150px",
                                            "&:hover": {
                                                backgroundColor: "#A38FFD",
                                                color: "#fff",
                                                borderColor: "#A38FFD",
                                            },
                                        }}
                                    >
                                        Select
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
