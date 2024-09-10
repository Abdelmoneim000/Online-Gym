import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ResponsiveAppBar from "../Components/Nav-Bar";
import ProductManagement from "../assets/product_management.svg";
import BMDataSience from "../assets/BMDataScience.svg";
import Python from "../assets/Python.svg";
import WellBeing from "../assets/WellBeing.svg";
import CoursesBackground from "../assets/Courses_background.png";

const courses = [
  {
    id: 1,
    title: "Product Management Basic - Course",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    image: ProductManagement,
  },
  {
    id: 2,
    title: "BM Data Science Professional Certificate",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    image: BMDataSience,
  },
  {
    id: 3,
    title: "Python for Everybody Specialization",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    image: Python,
  },
  {
    id: 4,
    title: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    image: WellBeing,
  },
];

export default function Courses() {
  return (
    <div
      style={{
        fontFamily: "Raleway",
        backgroundImage: `url(${CoursesBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Adjusted to minHeight for better responsiveness
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{ marginTop: "20px", flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ marginBottom: 4, marginTop: 10 }}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#4F4F4F",
                  color: "white",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    border: "2px solid #3dbf4d",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    height: 180,
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    fontSize={"19px"}
                    textAlign={"left"}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "white" }}
                    fontFamily={"Raleway"}
                    textAlign={"left"}
                    fontWeight={"400"}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Raleway",
                      textTransform: "none",
                      fontWeight: "400",
                      backgroundColor: "#548623",
                      marginLeft: "40%",
                      borderRadius: "5px",
                    }}
                  >
                    Enroll Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
