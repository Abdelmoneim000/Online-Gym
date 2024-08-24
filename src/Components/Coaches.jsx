import { Typography, Container } from '@mui/material';


export default function Coaches() {
    return (
        <Container maxWidth="md" sx={{ fontFamily: "Be Vietnam Pro", marginTop: "5%", height: "80vh" }}>
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