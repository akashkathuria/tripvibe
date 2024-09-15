import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Button, Divider, Typography } from "@mui/material";
import ImageGallery from "../common/imageGallery";
import { HEADLINES } from "../../constants/constant";
import HomeSlider from "../home/HomeSlider";
import Author from "../common/author";
import AboutSummary from "../about/aboutSumarry";
import { isMobile } from "react-device-detect";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



const Destination = (props) => {
console.log("child", props.children);

  const { content, date } = props;
  console.log("props", props);
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 2,
                mr: 2,
                display: "flex",
                textAlign: "center",
                whiteSpace: { xs: "break-spaces" },
                //   fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {content.heading}
            </Typography>
            <Divider />
            <Author date={date}/>
            {props.children.length > 0 ? props.children[0] : props.children}
          </Grid>
          <Grid item xs={12} md={4}>
            {!isMobile && <AboutSummary showReadmore={true} />}

            {props.children.length > 1 ?  
            props.children.filter((item, index) => index !== 0)
            :
             null}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Destination;
