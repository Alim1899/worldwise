import classes from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../User/Message";
import CityItem from "./CityItem";
export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );
  return (
    <ul className={classes.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
