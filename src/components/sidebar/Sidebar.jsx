import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  // BarChart,
} from "@material-ui/icons";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li>
              <NavLink
              exact
              to="/" 
              className="sidebarListItem"
              activeClassName="sidebarListItem.active active"
              >
                <LineStyle className="sidebarIcon"/>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/chart" 
                  className="sidebarListItem"
                  activeClassName="sidebarListItem.active active"
              >
                <Timeline className="sidebarIcon" />
                Chart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">History</h3>
          <ul className="sidebarList">
            <li>
              <NavLink
                to="/condition-history" 
                className="sidebarListItem"
                activeClassName="sidebarListItem.active active"
              >
              
                <AcUnitIcon className="sidebarIcon" />
                Environment Condition
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/history" 
                className="sidebarListItem"
                activeClassName="sidebarListItem.active active"
              >
                <AirIcon className="sidebarIcon" />
                Air Quality
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}