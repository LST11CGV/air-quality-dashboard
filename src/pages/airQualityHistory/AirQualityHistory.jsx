import "./airQualityHistory.css";
import { DataGrid } from "@material-ui/data-grid";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

const apiURL = "https://airquality-g3.herokuapp.com/composition";

function getStatus(val) {
  if (val>=0 && val<=50){
    return "Baik"
  } else if (val>=51 && val<=100){
    return "Sedang"
  } else if (val>=101 && val<=200){
    return "Tidak Sehat"
  } else if (val>=201 && val<=300){
    return "Sangat Tidak Sehat"
  } else {
    return "Berbahaya"
  }
}

function createNewKey (obj) {
  obj["PPM"] = Number((obj["comp"]).toFixed(2));
  obj["Update Time"] = new Date(obj["datetime"]).toString();
  obj["status"] = getStatus(obj["PPM"]);
}

export default function AirQualityHistory() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
  data.forEach(obj => createNewKey(obj));
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Update Time",
      headerName: "Update Time",
      width: 380,
    },
    {
      field: "sensor_id",
      headerName: "Sensor ID",
      width: 150,
    },
    {
      field: "PPM",
      headerName: "Air Quality (PPM)",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    }
  ];

  return (
    <div className="airQualityList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}