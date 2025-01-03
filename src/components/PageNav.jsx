import classes from "./PageNav.module.css"
import { NavLink } from "react-router-dom";
const PageNav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
      <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;