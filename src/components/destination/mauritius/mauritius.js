import { MAURITIUS_DATA } from './mauritiusData';
import Destination from '../destination';
import React from "react";
import MauritiusContent from './mauritius.content';

const Mauritius = () => {
    return <>
    <Destination content={MAURITIUS_DATA} >
      <MauritiusContent />
    </Destination>
    </>
}

export default Mauritius;
 