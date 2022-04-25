import AirQualityLineChart from "../../components/airQualityLineChart/AirQualityLineChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <AirQualityLineChart data={userData} title="Air Quality" grid dataKey="Active User"/>
    </div>
  );
}
