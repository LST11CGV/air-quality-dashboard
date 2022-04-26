import "./conditionHistory.css";
import { DataGrid } from "@material-ui/data-grid";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

const apiURL = "https://airquality-g3.herokuapp.com/condition";

function valueParsing (obj) {
  obj["temperature"] = Number((obj["temperature"]).toFixed(2));
  obj["humidity"] = Number((obj["humidity"]).toFixed(2));
  obj["pressure"] = Number((obj["pressure"]).toFixed(2));
  obj["Update Time"] = new Date(obj["datetime"]).toString();
}

export default function ConditionHistory() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
  data.forEach(obj => valueParsing(obj));
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Update Time",
      headerName: "Update Time",
      width: 280,
    },
    {
      field: "sensor_id",
      headerName: "Sensor ID",
      width: 150,
    },
    {
      field: "temperature",
      headerName: "Temperatur (℃)",
      width: 180,
    },
    {
      field: "humidity",
      headerName: "Humidity (%)",
      width: 180,
    },
    {
      field: "pressure",
      headerName: "Pressure (hPA)",
      width: 180,
    }
  ];

  return (
    <div className="conditionList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}