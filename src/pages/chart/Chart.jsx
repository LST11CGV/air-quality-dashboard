import AirQualityLineChart from "../../components/airQualityLineChart/AirQualityLineChart";
import "./chart.css";
import React from "react";
// import React, { useState, useEffect } from "react";

// import axios from "axios";

// const apiURL = "https://airquality-g3.herokuapp.com/composition";

export default function Chart() {
  return (
    <div className="chartContainer">
      <AirQualityLineChart title="Air Quality Chart" grid/>
      <AirQualityLineChart title="Air Quality Chart" grid/>
      <AirQualityLineChart title="Air Quality Chart" grid/>
    </div>
  );
}