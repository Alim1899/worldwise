import classes from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "../Nav/AppNav";
export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities:</p>
      <footer className={classes.footer}>
        <p className={classes.copyright}>
          &copy; Copyright {new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
