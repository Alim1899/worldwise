import classes from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../User/Message";
import CityItem from "./CityItem";
import { useCities } from "../../contexts/CitiesContext";
export default function CityList() {
  const { cities, isLoading } = useCities();
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
