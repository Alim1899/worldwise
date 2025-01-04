import classes from "./CityItem.module.css";
const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  
export default function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={classes.cityItem}>
      <span className={classes.emoji}>{emoji}</span>
      <h3 className={classes.name}>{cityName}</h3>
      <time className={classes.date}>{formatDate(date)}</time>
      <button className={classes.deleteBtn}>&times;</button>
    </li>
  );
}
