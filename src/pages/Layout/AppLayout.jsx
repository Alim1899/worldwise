import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./AppLayout.module.css";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";
function AppLayout() {
  return (
    <div className={classes.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
