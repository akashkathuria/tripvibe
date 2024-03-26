import { Box, Grid, Typography } from '@mui/material';
import React from "react";

const MauritiusContent = () => {
    return <>
    <Box sx={{ flexGrow: 1, marginTop:"10px", marginLeft:"10px" }} >
        <Typography variant="subtitle1" sx={{fontWeight: 600}} gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
        <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <img src='https://www.theblondeabroad.com/wp-content/uploads/2019/08/mauritius-5.jpg' alt='m1' className='destination-image' />
      <small style={{textAlign:"center", display:"block"}}>image caption</small>
      </Box>
    </>
}

export default MauritiusContent;
 