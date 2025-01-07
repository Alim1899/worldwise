import { Link } from "react-router-dom";
import classes from "./CityItem.module.css";
import { useCities } from "../../contexts/CitiesContext";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const handleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };
  return (
    <li>
      <Link
        className={`${classes.cityItem} ${
          currentCity.id === id ? classes.active : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={classes.emoji}>{emoji}</span>
        <h3 className={classes.name}>{cityName}</h3>
        <time className={classes.date}>{formatDate(date)}</time>
        <button className={classes.deleteBtn} onClick={(e) => handleClick(e)}>
          {" "}
          &times;
        </button>
      </Link>
    </li>
  );
}
