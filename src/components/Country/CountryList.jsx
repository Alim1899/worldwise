import classes from "./CountryList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../User/Message";
import CountryItem from "./CountryItem";
export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first country by clicking a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={classes.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={Math.random()} />
      ))}
    </ul>
  );
}
