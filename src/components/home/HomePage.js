import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import ImageGallery from "../common/imageGallery";
import { BANNER_IMAGES, CONTACT_IMAGES, HEADLINES } from "../../constants/constant";
import HomeSlider from "./HomeSlider";
import AboutSummary from "../about/aboutSumarry";
import HomePinnedCard from "./HomePinnedCard";
import { HOME_DATA } from "./HomePageData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          height: "14rem",
          // backgroundPosition: 'center',
          background:
          `url(${BANNER_IMAGES.HOME})`,
          backgroundSize: "cover",
          backgroundPosition: 'bottom',
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
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6),0 0 30px rgba(255, 255, 255, 0.4)",
            whiteSpace: { xs : "break-spaces" },
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            backgroundColor: "rgb(255 255 255 / 60%)",
            padding: "5px",
            borderRadius: "20px"
          }}
        >
          {HEADLINES.BANNER_TEXT}
        </Typography>
      </Box>
      
      {/* <Slider /> */}
      <Box sx={{ flexGrow: 1, marginTop:"10px", mb:"40px" }} >
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Box component="section" sx={{ padding: "0px 16px 16px 16px", margin: '0px 15px', boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)", height:"100%" }}>
          <AboutSummary showReadmore />
        </Box>
        </Grid>
        <Grid item xs={12} md={5} className="crousel-grid">
            <Item>
              <HomeSlider heading="Mauritius Gallery"/>
            </Item>
          </Grid>
        <Grid item xs={12} md={3}>
        <Item>

        <HomePinnedCard />
        </Item>

        </Grid>
          {/* <Grid item xs={12} md={12}>
            <Item>
              <ImageGallery itemData = {HOME_DATA.postsList} />
            </Item>
          </Grid> */}


          
          {/* <Grid item xs={12} md={3}>
            <Item>
              xs=6 md=4
            </Item>
          </Grid> */}
          {/* <Grid item xs={6} md={4}>
      <Item>xs=6 md=4</Item>
    </Grid>
    <Grid item xs={6} md={8}>
      <Item>xs=6 md=8</Item>
    </Grid> */}
        </Grid>
      </Box>
    </>
  );
};
export default HomePage;
