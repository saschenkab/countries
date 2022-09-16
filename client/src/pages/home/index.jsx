import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  selectAllCountries,
  getCountriesError,
  getCountriesStatus,
} from "../../redux/countries/slice";
import { useEffect } from "react";
import Cards from "../../components/cards";
import { Body, Countries } from "./styles";
import Header from "../../components/headerbar";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const countriesStatus = useSelector(getCountriesStatus);
  const error = useSelector(getCountriesError);

  const countriesMapped = countries.data;

  useEffect(() => {
    if (countriesStatus === "Idle") {
      dispatch(fetchCountries());
    }
  }, [countriesStatus, dispatch]);

  let content;

  if (countriesStatus === "Loading") {
    content = <p>Loading...</p>;
  } else if (countriesStatus === "Succeeded") {
    content = <Cards countries={countriesMapped} />;
  } else if (countriesStatus === "Failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <Header />
      <Body>
        <Countries>{content}</Countries>
      </Body>
    </div>
  );
};

export default Home;
