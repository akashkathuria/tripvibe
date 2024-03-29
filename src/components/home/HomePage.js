import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import ImageGallery from "../common/imageGallery";
import { HEADLINES } from "../../constants/constant";
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
      </Box>
      
      {/* <Slider /> */}
      <Box sx={{ flexGrow: 1, marginTop:"10px" }} >
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Box component="section" sx={{ margin: '0px 15px', boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)", height:"100%" }}>
          <AboutSummary showReadmore />
        </Box>
        </Grid>
        <Grid item xs={12} md={4} className="crousel-grid">
            <Item>
              <HomeSlider heading="Mauritius Gallery"/>
            </Item>
          </Grid>
        <Grid item xs={12} md={4}>
        <Item>

        <HomePinnedCard />
        </Item>

        </Grid>
          <Grid item xs={12} md={12}>
            <Item>
              <ImageGallery itemData = {HOME_DATA.postsList} />
            </Item>
          </Grid>
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
