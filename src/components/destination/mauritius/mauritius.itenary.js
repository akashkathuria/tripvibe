import { Box, Divider } from "@mui/material";
import React from "react";

const heading = {
  fontSize: "20px"
}

const font14 = {
  fontSize: "14px"
}

const font18 = {
  fontSize: "18px"
}

const listFontCirc = {
  "listStyleType":"disc","fontSize":"11px"
}

const MauritiusItenary = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "10px", marginLeft: "10px", padding: "0px 15px 0px 5px"  }}>
      <Divider />
        <p style={heading}>
          <strong>
            <span>
              7 Days Mauritius Itinerary
            </span>
          </strong>
        </p>
        <Divider />
        <h3>
          <strong>
            <span style={font18}>Day 1: Arrival and Exploration</span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Drive from the airport in&nbsp;
              </span>
              <strong>
                <span style={font14}>Rental car</span>
              </strong>
              <span style={font14}>
                , enjoying scenic views of lush landscapes and turquoise waters.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Check in a hotel of your choice, on&nbsp;
              </span>
              <strong>
                <span style={font14}>Trou aux Biches</span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Visit Trou aux Biches Beach for some relaxation and swimming.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Explore local shops on Trou aux Biches.
              </span>
            </p>
          </li>
        </ul>
        <h3>
          <strong>
            <span style={font18}>
              Day 2: Botanical Gardens and Adventure
            </span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>SSR Botanical Garden</span>
              </strong>
              <span style={font14}>
                ; explore giant tortoises, deer, and the pond with&nbsp;
              </span>
              <strong>
                <span style={font14}>giant water lilies</span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Explore&nbsp;</span>
              <strong>
                <span style={font14}>Roches Noires Lava Tubes</span>
              </strong>
              <span style={font14}>&nbsp;and the&nbsp;</span>
              <strong>
                <span style={font14}>
                  Roches Noires spring water pond.
                </span>
              </strong>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>
                  Notre-Dame Auxiliatrice de Cap Malheureux (Red Church)
                </span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
        </ul>
        <h3>
          <strong>
            <span style={font18}>
              Day 3: Port Louis and Grand Baie
            </span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>Port Louis</span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Explore&nbsp;</span>
              <strong>
                <span style={font14}>Le Caudan Waterfront</span>
              </strong>
              <span style={font14}>&nbsp;and&nbsp;</span>
              <strong>
                <span style={font14}>Umbrella Street</span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Explore&nbsp;</span>
              <strong>
                <span style={font14}>
                  La Cuvette Beach in Grand Baie
                </span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Shop at a nearby&nbsp;</span>
              <strong>
                <span style={font14}>Mall</span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
        </ul>
        <h3>
          <strong>
            <span style={font18}>Day 4: Casela Nature Park</span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>Casela Nature Park</span>
              </strong>
              <span style={font14}>
                ; explore the park with animal barns, safari bus ride, and 4D
                movie experience.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Lunch at&nbsp;</span>
              <strong>
                <span style={font14}>Blue Bird&nbsp;</span>
              </strong>
              <span style={font14}>restaurant in Casela.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Explore&nbsp;</span>
              <strong>
                <span style={font14}>Flic en Flac</span>
              </strong>
              <span style={font14}>&nbsp;Beach.</span>
            </p>
          </li>
        </ul>
        <h3>
          <strong>
            <span style={font18}>Day 5: Chamarel and South Coast</span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>Chamarel Waterfall</span>
              </strong>
              <span style={font14}>&nbsp;and&nbsp;</span>
              <strong>
                <span style={font14}>Seven Colored Earth</span>
              </strong>
              <span style={font14}>.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>Le Morne Beach</span>
              </strong>
              <span style={font14}>&nbsp;and enjoy snorkeling.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Explore&nbsp;</span>
              <strong>
                <span style={font14}>Maconde Viewpoint</span>
              </strong>
              <span style={font14}>
                &nbsp;for stunning coastal views.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Stop at&nbsp;</span>
              <strong>
                <span style={font14}>Ganga Talao (Grand Basin)</span>
              </strong>
              <span style={font14}>&nbsp;on the way back.</span>
            </p>
          </li>
        </ul>
        <h3>
          <strong>
            <span style={font18}>
              Day 6: &Icirc;le aux Cerfs Catamaran Cruise
            </span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <strong>
                <span style={font14}>Catamaran Cruise</span>
              </strong>
              <span style={font14}>
                &nbsp;to &Icirc;le aux Cerfs, including snorkeling, barbecue
                lunch, and parasailing.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Explore&nbsp;</span>
              <strong>
                <span style={font14}>&Icirc;le aux Cerfs</span>
              </strong>
              <span style={font14}>
                ; try bumper water sports and shop at local stalls.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Visit&nbsp;</span>
              <strong>
                <span style={font14}>Pont Naturel,&nbsp;</span>
              </strong>
              <span style={font14}>
                a scenic view point that has a natural bridge.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Check into a 5 star property for a relaxing last day.
              </span>
            </p>
          </li>
        </ul>
        <h3>
          <strong>
            <span style={font18}>Day 7: Relaxation and Departure</span>
          </strong>
        </h3>
        <ul>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Enjoy the luxury of a 5 star property.&nbsp;
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>Book&nbsp;</span>
              <strong>
                <span style={font14}>Spa&nbsp;</span>
              </strong>
              <span style={font14}>appointment for relaxation.</span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Return the rental car and head to the airport.
              </span>
            </p>
          </li>
          <li style={listFontCirc}>
            <p>
              <span style={font14}>
                Board your flight back home, cherishing the wonderful memories
                of Mauritius.
              </span>
            </p>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default MauritiusItenary;
