import classes from "./Appnav.module.css";
import { NavLink } from "react-router-dom";
const AppNav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
