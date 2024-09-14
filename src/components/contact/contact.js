import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import * as React from "react";
import { CONTACT_IMAGES } from "../../constants/constant";

function Contact() {
  return (
    <Box sx={{ padding: '0px 16px 16px 16px' }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
        }}
      >
        CONTACT US
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        We'd love to hear from you!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Whether you have a question, need travel advice, or just want to share
        your own travel experiences, we're here to connect. Feel free to reach
        out to us for anything—from inquiries about our trips to suggestions for
        future destinations, or even just to say hello!
      </Typography>
      <Divider />
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
        How to Reach Us
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1" gutterBottom>
          <b>Email: <i> harshakulshrestha044@gmail.com</i></b> <br />
            Drop us a line anytime! We try our best to respond within 48 hours.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="body1" gutterBottom>
            <b>Social Media:</b> <br />
            Follow us and send us a message on our social media channels. We’re
            always sharing our latest adventures and would love to interact with
            you there! <br />
          </Typography>
        </ListItem>
      </List>

      <img
        src={CONTACT_IMAGES.MAIN}
        alt="m1"
        className="about-summary-image"
      />
      <small style={{ textAlign: "center", display: "block" }}>
      Pont Naturel - Mauritius
      </small>
     
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
            Collaboration Opportunities
          </Typography>

          <Typography variant="body1" gutterBottom>
            Are you a brand or fellow traveler interested in collaborating?
            We’re always open to partnerships that align with our passion for
            travel and exploration. Whether it's a content collaboration, guest
            post, or any other creative idea, feel free to reach out to discuss
            how we can work together.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
            Feedback
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your feedback is invaluable to us. If you have any suggestions for
            our blog, or if there’s something specific you’d like us to cover,
            don’t hesitate to let us know. We’re here to create content that
            resonates with you.
          </Typography>
      <Divider />
    </Box>
  );
}

export default Contact;
