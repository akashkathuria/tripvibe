import { MAURITIUS_DATA } from './mauritiusData';
import Destination from '../destination';
import React from "react";
import MauritiusContent from './mauritius.content';
import MauritiusItenary from './mauritius.itenary';
import HomeSlider from '../../home/HomeSlider';
import { Divider } from '@mui/material';

const Mauritius = () => {
    return <>
    <Destination date={"SEPTEMBER 15, 2024"} content={MAURITIUS_DATA} >
      <MauritiusContent />
      <MauritiusItenary />
      <Divider />
      <HomeSlider heading="Mauritius Gallery"/>
    </Destination>
    </>
}

export default Mauritius;
 