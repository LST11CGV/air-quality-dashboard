import AirConditionInfo from "../../components/airConditionInfo/AirConditionInfo";
import AirQualityInfo from "../../components/airQualityInfo/AirQualityInfo";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <AirConditionInfo />
      <AirQualityInfo />
    </div>
  );
}
