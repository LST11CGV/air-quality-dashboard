import React, { useState, useEffect } from "react";
import "./topbar.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import axios from "axios";

const apiURL = "https://airquality-g3.herokuapp.com/sensor";

export default function Topbar() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setLocation(response.data.at(0).loc);
    });
  }, []);

  if (!location) return null;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Air Quality Monitoring 💨</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <LocationOnIcon style={{ color: 'red' }} />
            <span className="topbarIconDesc">{location}, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}
