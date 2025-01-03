import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./AppLayout.module.css";
import Map from "../../components/Map/Map";
function AppLayout() {
  return (
    <div className={classes.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
