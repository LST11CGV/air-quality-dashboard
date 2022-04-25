import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
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
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">History</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AcUnitIcon className="sidebarIcon" />
              Environment Condition
            </li>
            <li className="sidebarListItem">
              <AirIcon className="sidebarIcon" />
              Air Quality
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
