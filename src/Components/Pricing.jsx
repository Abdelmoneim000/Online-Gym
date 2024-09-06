import { Typography, Container, Box, Grid, Card, CardContent, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Dumbbell from '../assets/Dumbbell.svg';
import useOnScreen from "../Hooks/Observer";
import { useRef, useState } from "react";

export default function Pricing() {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const [card, setCard] = useState(null);

    function handlePrice(number) {
        if(localStorage.getItem("selectedPrice")) {
            localStorage.removeItem("selectedPrice");
        }
        localStorage.setItem("selectedPrice", number);
        window.location.href = "/payments";
    }

    
    const plans = [
        { title: "Free Plan", price: <span style={{fontWeight: "900"}}>Free</span>, features: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"], selected: "Free" },
        { title: "Standard Plan", price: (<><span style={{fontWeight: "900"}}>$9</span><span> / month</span></>), features: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"], selected: "$9" },
        { title: "Premium Plan", price: (<><span style={{fontWeight: "900"}}>$12</span><span> / month</span></>), features: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"], highlighted: true, selected: "$12" },
    ];

    return (
        <Container ref={ref}
            maxWidth={false}
            sx={{
                fontFamily: "Rubik",
                mt: 10,
                background: 'linear-gradient(180deg, #000000 0%, #1E1E1E 51%, #1E1E1E 100%)',
            }}>
                <Typography variant="h3" gutterBottom sx={{fontWeight: "500", textAlign: "center", animation: isVisible? 'fadeIn 2.5s forwards' : '',}} color={"white"}>
                    Choose Your Plan
                </Typography>
            <Box textAlign="center" mb={4} display={"flex"} justifyContent={"center"} sx={{animation: isVisible? 'fadeIn 2.5s forwards' : '',}}>
                <Typography variant="subtitle1" color="textSecondary" sx={{fontSize: "20px", width: "40rem", color: "white"}}>
                    Let&apos;s choose the package that is best for you and explore it happily and cheerfully.
                </Typography>
            </Box>
            <Grid container spacing={1} justifyContent="center" marginTop={"5%"} sx={{animation: isVisible? 'fadeIn 2.5s forwards' : '', marginLeft: "50px"}}>
                {plans.map((plan, index) => (
                    <Grid item xs={12} md={4} key={index} padding={5} sx={{borderWidth: "50px"}}>
                        <Card
                        className="pricing-card"
                            onMouseOver={() => {
                                setCard(index);
                            }}
                            sx={{
                                borderColor: card === index ? "#A38FFD" : "#DDDDDD",
                                borderRadius: "10px",
                                padding: "20px",
                                width: "70%",
                            }}
                        >
                            <CardContent sx={{display: "flex", justifyContent: "space-between", flexDirection: "column", height: "650px"}}>
                                <Box>
                                    <Box textAlign="center" mb={2}>
                                        {/* Placeholder for the image */}
                                        <img src={Dumbbell} alt="Dumbbells" style={{marginBottom: "20px"}}/>
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
                                            borderWidth: "2px",
                                            borderColor: "black",
                                            fontWeight: "600",
                                            fontSize: "20px",
                                            textTransform: "none",
                                            width: "150px",
                                            "&:hover": {
                                                backgroundColor: "#78BF34",
                                                color: "white",
                                                borderColor: "transparent",
                                            },
                                        }}
                                        onClick={() => handlePrice(plan.selected)}
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
