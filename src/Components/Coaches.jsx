import { Container, Typography } from "@mui/material";
import useOnScreen from '../Hooks/Observer.jsx';
import { useRef } from 'react';

export default function Coaches() {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);


    return (
        <Container maxWidth="md" ref={ref} sx={{ fontFamily: "Be Vietnam Pro", marginTop: "5%", height: "80vh", animation: isVisible? 'fadeIn 2.5s forwards' : ''  }}>
            <Typography variant="h3" component="h1" sx={{ 
                color: "#262626",
                fontWeight: "600",
                textAlign: "center",
                py: 4
                }}>
                    Coaches
                </Typography>
        </Container>
    )
}