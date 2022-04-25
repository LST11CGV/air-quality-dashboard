import AirQualityLineChart from "../../components/airQualityLineChart/AirQualityLineChart";
import AirConditionInfo from "../../components/airConditionInfo/AirConditionInfo";
import AirQualityInfo from "../../components/airQualityInfo/AirQualityInfo";
import "./home.css";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <AirConditionInfo />
      <AirQualityInfo />
      <AirQualityLineChart data={userData} title="Air Quality Chart" grid dataKey="Active User"/>
    </div>
  );
}
