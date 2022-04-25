import React, { useState, useEffect } from "react";
import AirQualityGauge from "../airQualityMeasurementChart/airQualityMeasurementChart";

import "./airQualityInfo.css";

import axios from "axios";

const apiURL = "https://airquality-g3.herokuapp.com/airquality";

const indicator = [
  {
    "text": "Baik",
    "color": "#22af4b",
    "value": "0 - 50"
  },
  {
    "text": "Sedang",
    "color": "#0092cc",
    "value": "51 - 100"
  },
  {
    "text": "Tidak Sehat",
    "color": "#dcd427",
    "value": "101 - 200"
  },
  {
    "text": "Sangat Tidak Sehat",
    "color": "#ff3333",
    "value": "201 - 300"
  },
  {
    "text": "Berbahaya",
    "color": "#282828",
    "value": "≥ 301",
  }
]

const colors = {
  "Baik": "#22af4b", 
  "Sedang": "#0092cc", 
  "Tidak Sehat": "#dcd427", 
  "Sangat Tidak Sehat": "#ff3333", 
  "Berbahaya": "#282828"
}

export default function AirConditionInfo() {

  const [airQualityText, setAirQualityText] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setAirQualityText(response.data);
    });
  }, []);

  if (!airQualityText) return null;

  return(
    <div className="cardContainer">
      <div className="cardItem cardIndex">
        <span className="cardTitle">Air Quality Measurement</span>
        <AirQualityGauge />
      </div>
      <div className="cardItem cardMeasurement">
        <span className="cardTitle">Air Quality Index</span>
        <div className="cardDescContainer">
            <span className="cardDesc">Kualitas udara disekitar dalam kondisi:</span>
        </div>
        <div className="cardContent">
          <div className="cardTextContainer">
            <span className="cardText" style={{"color":colors[airQualityText]}}>
              {airQualityText}
            </span>
          </div>
          <div className="cardIndicatorContainer">
            {indicator.map((item, key) => {
              return (
                <div key={key} className="cardIndicator" style={{"backgroundColor":item.color}}>
                  <span>{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}