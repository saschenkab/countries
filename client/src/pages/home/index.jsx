import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  selectAllCountries,
  getAllCountriesFiltered,
  getCountriesError,
  getCountriesStatus,
} from "../../redux/countries/slice";
import { useEffect } from "react";
import Cards from "../../components/cards";
import { Body, Countries } from "./styles";
import Header from "../../components/headerbar";
import Loader from "../../components/loader";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const countriesFiltered = useSelector(getAllCountriesFiltered);
  const countriesStatus = useSelector(getCountriesStatus);
  const error = useSelector(getCountriesError);

  useEffect(() => {
    if (countriesStatus === "Idle") {
      dispatch(fetchCountries());
    }
  }, [countriesStatus, dispatch]);

  let content;

  if (countriesStatus === "Loading") {
    content = <Loader />;
  } else if (countriesStatus === "Succeeded") {
    content = (
      <Cards
        countries={countriesFiltered.length > 0 ? countriesFiltered : countries}
      />
    );
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
