import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { isMobile } from 'react-device-detect';

export default function ImageGallery({itemData}) {
  return (
    <ImageList cols={isMobile ? 1 : 4}>
      {/* <ImageListItem key="Subheader">
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{margin: { xs:'.5rem', md:'1rem' }}}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}