import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Chart from "./pages/chart/Chart";
import AirQualityHistory from "./pages/airQualityHistory/AirQualityHistory";
import ConditionHistory from "./pages/conditionHistory/ConditionHistory";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/chart">
            <Chart />
          </Route>
          <Route path="/condition-history">
            <ConditionHistory />
          </Route>
          <Route path="/history">
            <AirQualityHistory />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
