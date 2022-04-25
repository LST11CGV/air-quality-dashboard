import AirQualityLineChart from "../../components/airQualityLineChart/AirQualityLineChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <AirQualityLineChart data={userData} title="Air Quality" grid dataKey="Active User"/>
    </div>
  );
}
