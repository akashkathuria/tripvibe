import * as React from "react";
import { Button, Divider, List, ListItem, Typography } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { ABOUT_IMAGES } from "../../constants/constant";

function AboutDescription({ showReadmore = true }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
        }}
      >
        ABOUT HARSHA KULSHRESTHA
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        Hi! My name's Harsha, a 30-year-old adventurer. I'm here to help you
        explore this planet safely, adventurously, and affordably.
      </Typography>
      <img
        src={ABOUT_IMAGES.MAIN}
        alt="m1"
        className="about-summary-image"
      />
      <small style={{ textAlign: "center", display: "block" }}>
      Notre Dame Auxiliatrice Chapel - Mauritius
      </small>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
        Travel has always been more than just a hobby for me—it's a way of life,
        a source of endless inspiration, and a path to discovering both the
        world and myself.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Together with my husband, my constant companion in this journey, I
        embark on adventures that take us from the bustling cities to serene
        backwaters, from towering mountains to sun-kissed beaches. Whether it's
        getting lost in the narrow lanes of an ancient city, soaking in the
        tranquility of a hidden valley, or dancing the night away at a beach
        party, we believe in embracing every moment to the fullest.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
        Why This Blog?
      </Typography>
      <Typography variant="body1" gutterBottom>
        This blog is born out of our shared love for travel and our desire to
        help fellow travelers experience the best of what India has to offer.
        Over the years, we've had our share of travel mishaps—missed
        connections, less-than-ideal accommodations, and unexpected detours. But
        these experiences have only fueled our passion to explore more and share
        our learnings with you.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We created this space to help you avoid the mistakes we've made and
        guide you towards the best experiences. Our goal is to provide honest,
        reliable recommendations that you can trust. That's why we pay for all
        our travels ourselves, never take press trips, and always travel
        anonymously. Whether you're a first-time traveler or a seasoned
        wanderer, we hope our insights make your journey smoother and more
        enjoyable.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
        What You'll Find Here
      </Typography>
      <Typography variant="body1" gutterBottom>
        As a couple, our goal is to explore different places and experience the
        best of moments together. We believe that travel is about more than just
        visiting new destinations—it's about immersing yourself in the local
        culture, meeting new people, and making memories that last a lifetime.
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1" gutterBottom>
            <b>Water Baby & Mountain Bird:</b> I'm equally at home whether I'm
            splashing in the waves or hiking up a mountain trail. From serene
            lakes to snow-capped peaks, water and mountains hold a special place
            in my heart.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" gutterBottom>
            <b>Big Party Freak:</b> But that’s not all—I also love to let loose
            and enjoy the vibrant nightlife wherever I go. Whether it's a
            beachside bonfire or a city rooftop party, I'm always up for a good
            time.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" gutterBottom>
            <b>A Perfect Blend:</b>
            This blog is a mix of everything that makes travel
            magical—adventure, relaxation, culture, and fun.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        You'll find tips on the best places to visit, insider recommendations,
        and stories from our travels that will inspire you to pack your bags and
        set off on your own adventure.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
        Join Us on This Journey
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're excited to share our travels with you and hope our experiences
        inspire you to embark on your own adventures. So, whether you're looking
        for the best beach to unwind, a mountain trail to conquer, or the next
        big party spot, you've come to the right place.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Let’s wander together and celebrate the beauty of travel!
      </Typography>

      <Divider />
    </>
  );
}

export default AboutDescription;
