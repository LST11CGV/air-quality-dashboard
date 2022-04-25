import React, { useState, useEffect } from "react";
import "./AirQualityLineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import axios from "axios";

const apiURL = "http://airquality-g3.herokuapp.com/composition";

export default function AirQualityLineChart({ title, data, dataKey, grid }) {

  const [airQualityList, setAirQualityList] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      setAirQualityList(response.data);
    });
  }, []);

  if (!airQualityList) return null;
  airQualityList.forEach(obj => createNewKey(obj));
  console.log(airQualityList);
  
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={airQualityList}>
          <XAxis dataKey="Update Time" stroke="#5550bd" />
          <Line type="monotone" dataKey="PPM" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function createNewKey (obj) {
  obj["PPM"] = Number((obj["comp"]).toFixed(2));
  obj["Update Time"] = new Date(obj["datetime"]).toLocaleString("in-ID")
}
