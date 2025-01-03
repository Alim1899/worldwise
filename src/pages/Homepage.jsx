import classes from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
        <main className={classes.homepage}>
    <PageNav/>
    <Link to="/app">Go to the app!</Link>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
      </section>
    </main>

  
  );
}