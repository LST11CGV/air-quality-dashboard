import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./airQualityMeasurementChart.css";

import axios from "axios";

const apiURL = "https://airquality-g3.herokuapp.com/composition";

const max = 500
function valueToPercent (value) {
  if (value>=max) {
    return 100
  }
  return (value * 100) / max
} 

export default function AirQualityGauge() {

  const [airQualityVal, setAirQualityVal] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setAirQualityVal(Number(response.data.at(-1).comp).toFixed(2));
    });
  }, []);

  if (!airQualityVal) return null;

  const chartData = {
    series: [valueToPercent(airQualityVal)],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
            hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 2,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 0,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
      
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function(val) {
                return (val*max)/100;
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['PPM'],
    },
  };
  return(
    <div className="gauge">
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={300} />
    </div>
  );
}