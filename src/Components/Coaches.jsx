import { Container, Typography } from "@mui/material";
import useOnScreen from '../Hooks/Observer.jsx';
import { useRef } from 'react';

export default function Coaches() {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);


    return (
        <Container maxWidth={false} ref={ref} sx={{ 
            fontFamily: "Be Vietnam Pro",
            marginTop: "10%",
            height: "90vh",
            animation: isVisible? 'fadeIn 2.5s forwards' : '',
            background: 'linear-gradient(180deg, #000000 0%, #1E1E1E 51%, #1E1E1E 100%)',
            }}>
            <Typography variant="h3" component="h1" color={"white"} sx={{
                fontWeight: "600",
                textAlign: "center",
                py: 4
                }}>
                    Coaches
                </Typography>
        </Container>
    )
}