import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { HOME_DATA } from './HomePageData';




 const HomePinnedCard = () => {
  const pinnedList = HOME_DATA.pinnedList;
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {pinnedList.length > 0 && pinnedList.map((post) => (
        <>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={post.avtarAlt} src={post.avtarImg} />
        </ListItemAvatar>
        <ListItemText
          primary={post.heading}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {post.subHeading}
              </Typography>
              {post.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      )
      )} 
    </List>
    // <Card >
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}

export default HomePinnedCard;