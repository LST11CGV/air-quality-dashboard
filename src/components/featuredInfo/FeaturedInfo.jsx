import React, { useState, useEffect } from "react";

import "./featuredInfo.css";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';

import axios from "axios";

const apiURL = "http://airquality-g3.herokuapp.com/condition";

export default function FeaturedInfo() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      // setLocation(response.data.at(0).loc);
      console.log(response.data.at(-1));
      setTemperature(Number((response.data.at(-1).temperature)).toFixed(2));
      setHumidity(Number((response.data.at(-1).humidity)).toFixed(2));
      setPressure(Number((response.data.at(-1).pressure)).toFixed(2));
      setLastUpdate(new Date(response.data.at(-1).datetime));
    });
  }, []);

  if (!temperature || !humidity || !pressure || !lastUpdate) return null;

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Temperature</span>
        <div className="featuredMeasurementContainer">
          <ThermostatIcon className="featuredTempIcon" style={{ fontSize: 80 }} />
          <span className="featuredMeasurement">{temperature}
            <span className="featuredMeasurementUnit">{'\u2103'}</span>
          </span>
        </div>
        <div className="featuredLastTimeUpdateContainer">
          <span className="featuredLastTimeUpdate">Last update: {lastUpdate.toLocaleString("in-ID")}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Humidity</span>
        <div className="featuredMeasurementContainer">
          <OpacityIcon className="featuredHumIcon" style={{ fontSize: 80 }} />
          <span className="featuredMeasurement">{humidity}
            <span className="featuredMeasurementUnit">%</span>
          </span>
        </div>
        <div className="featuredLastTimeUpdateContainer">
          <span className="featuredLastTimeUpdate">Last update: {lastUpdate.toLocaleString("in-ID")}</span>
        </div>
      </div> 
      <div className="featuredItem">
        <span className="featuredTitle">Pressure</span>
        <div className="featuredMeasurementContainer">
          <AirIcon className="featuredPressIcon" style={{ fontSize: 80 }} />
          <span className="featuredMeasurement">{pressure}
            <span className="featuredMeasurementUnit">hPa</span>
          </span>
        </div>
        <div className="featuredLastTimeUpdateContainer">
          <span className="featuredLastTimeUpdate">Last update: {lastUpdate.toLocaleString("in-ID")}</span>
        </div>
      </div> 
    </div>
  );
}
