import * as React from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

function Author({date}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{display:"flex", alignItems:"center"}}>
      <Avatar alt="Harsha" src="/static/images/avatar/3.jpg" />
      <Box>

      <Typography
          variant="caption"
          sx={{ml: 1}}
        >
          HARSHA KULSHRESTHA
        </Typography>
        <Typography
          sx={{fontSize:"9px", ml: 1}}
        >
          PUBLISHED ON {date}
        </Typography>
      </Box>
      </CardContent>
    </Card>
  );
}

export default Author;