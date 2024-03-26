import * as React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

function Author() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{display:"flex"}}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Typography
          variant="caption"
          
        >
          HARSHA KULSHRESTHA
        </Typography>
        <Typography
          variant="caption"
          
        >
          PUBLISHED ON MARCH 9, 2024
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Author;