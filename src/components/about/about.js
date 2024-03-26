import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import ImageGallery from "../common/imageGallery";
import { HEADLINES } from "../../constants/constant";
import HomeSlider from "../home/HomeSlider";
import AboutSummary from "./aboutSumarry";
import AboutDescription from "./aboutDescription";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          height: "14rem",
          background:
            "url(https://www.theblondeabroad.com/wp-content/uploads/2019/08/mauritius-5.jpg)",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            ml: 2,
            mr: 2,
            display: "flex",
            textAlign: "center",
            whiteSpace: { xs : "break-spaces" },
            //   fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {HEADLINES.BANNER_TEXT}
        </Typography>
      </Box> */}
      
      {/* <Slider /> */}
      <Box sx={{ flexGrow: 1, marginTop:"10px" }} >
        <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <AboutDescription />
        </Grid>
        <Grid item xs={12} md={4}>
        <AboutSummary showReadmore={false}/>
        </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default About;
