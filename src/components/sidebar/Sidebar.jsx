import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  // BarChart,
} from "@material-ui/icons";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/chart" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Chart
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">History</h3>
          <ul className="sidebarList">
            <Link to="/condition-history" className="link">
              <li className="sidebarListItem">
                <AcUnitIcon className="sidebarIcon" />
                Environment Condition
              </li>
            </Link>
            <Link to="/history" className="link">
              <li className="sidebarListItem">
                <AirIcon className="sidebarIcon" />
                Air Quality
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
