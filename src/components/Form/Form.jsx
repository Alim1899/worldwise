import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import BackButton from "../Button/BackButton";
import Spinner from '../Spinner/Spinner'
import { useUrlPosition } from "../../hooks/useUrlPosition";
import Message from '../User/Message'
 function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const key = "bdc_81c60d7675354accab16676e42533c2e";
const BASE_URL = "https://api-bdc.net/data/reverse-geocode";

function Form() {
  const [cityName, setCityName] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [emoji,setEmoji] = useState('')
  const [geocodingError,setGeocodingError] = useState("");
  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("")
        const res = await fetch(
          `${BASE_URL}?latitude=${lat}&longitude=${lng}&key=${key}`
        );
        const data = await res.json();
        if(!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else🤗")
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName||"")
        setEmoji(convertToEmoji(data.countryCode))
      } catch (err) {
        setGeocodingError(err.message)
      } finally {
        setIsLoadingGeocoding(false);
      }
    };
    fetchCityData();
  }, [lat, lng]);
  if(isLoadingGeocoding) return <Spinner/>
  if(geocodingError) return <Message message={geocodingError}/>
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
