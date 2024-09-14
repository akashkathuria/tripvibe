import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ABOUT_IMAGES } from "../../constants/constant";

function AboutSummary({ showReadmore = true }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(ROUTES.ABOUT);
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          mb:1,
          mt:1
        }}
      >
        MEET HARSHA KULSHRESTHA
      </Typography>
      <img
        src={showReadmore ? ABOUT_IMAGES.MAIN : ABOUT_IMAGES.COUPLE }
        alt="m1"
        className="about-summary-image"
      />

      <Typography sx={{fontWeight: 600}} variant="body1" gutterBottom>
        Travel Enthusiast | Explorer of Incredible India | Journeying Through
        Life with My Better Half
      </Typography>

      <Typography variant="body1" gutterBottom>
        Welcome to my travel diary! I'm Harsha, a 30-year-old adventurer
        passionate about exploring the diverse landscapes, cultures, and stories
        that make up Incredible India. Alongside my husband, I embark on
        journeys that take us from the bustling cities to serene backwaters,
        from towering mountains to sun-kissed beaches. Join us as we discover
        hidden gems, savor local flavors, and create memories that last a
        lifetime. Let's wander together and celebrate the beauty of travel!
      </Typography>

      <Typography variant="body1" gutterBottom>
        This website is created for helping people around the world to avoid the
        mistakes which we did and help you experience the best of the options. I
        pay for all my travels myself, don't take press trips, and travel
        anonymously; all to ensure my recommendations are ones you can trust.
      </Typography>
      {showReadmore && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            sx={{ width: "50%" }}
            variant="outlined"
            onClick={handleReadMore}
            startIcon={<ReadMoreIcon />}
          >
            Read More
          </Button>
        </div>
      )}
    </>
  );
}

export default AboutSummary;
