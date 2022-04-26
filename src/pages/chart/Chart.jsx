import AirQualityLineChart from "../../components/airQualityLineChart/AirQualityLineChart";
import ConditionLineChart from "../../components/conditionLineChart/ConditionLineChart";
import "./chart.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

const apiURL = "https://airquality-g3.herokuapp.com/condition";

function valueParsing (obj) {
  obj["Temperature(℃)"] = Number((obj["temperature"]).toFixed(2));
  obj["Humidity(%)"] = Number((obj["humidity"]).toFixed(2));
  obj["Pressure(hPa)"] = Number((obj["pressure"]).toFixed(2));
  obj["Update Time"] = new Date(obj["datetime"]).toLocaleString("in-ID");
}

export default function Chart() {
  
  const [conditionData, setConditionData] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setConditionData(response.data);
    });
  }, []);

  if (!conditionData) return null;
  conditionData.forEach(obj => valueParsing(obj));

  return (
    <div className="chartContainer">
      <AirQualityLineChart title="Air Quality Chart" grid/>
      <ConditionLineChart title="Temperature Chart" data={conditionData} dataKey="Temperature(℃)" color="#68222f" grid/>
      <ConditionLineChart title="Humidity Chart" data={conditionData} dataKey="Humidity(%)" color="#36A1D4" grid/>
      <ConditionLineChart title="Pressure Chart" data={conditionData} dataKey="Pressure(hPa)" color="#68222f" grid/>
    </div>
  );
}