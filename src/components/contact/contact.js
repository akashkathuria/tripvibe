import { Divider, Typography } from "@mui/material";
import * as React from "react";

function Contact() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
        }}
      >
        CONTACT US
      </Typography>
      <img
        src="https://www.theblondeabroad.com/wp-content/uploads/2019/08/mauritius-5.jpg"
        alt="m1"
        className="about-summary-image"
      />
      <Divider />     
      <Typography variant="subtitle1" sx={{fontWeight: 600}} gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        Hi! My name's Lauren and I'm the founder of Never Ending Footsteps. I'm
        here to help you explore this planet safely, adventurously, and
        affordably.
      </Typography>

      <Typography variant="body1" gutterBottom>
        It was back in 2011 when I quit my job to travel the world. Twelve
        years, 100 countries, and one successful travel blog later, I'm still
        going.
      </Typography>

      <Typography variant="body1" gutterBottom>
        This website is the result of tens of thousands of hours of
        on-the-ground research. I pay for all my travels myself, don't take
        press trips, and travel anonymously; all to ensure my recommendations
        are ones you can trust.
      </Typography>
      <Divider />
    </>
  );
}

export default Contact;
