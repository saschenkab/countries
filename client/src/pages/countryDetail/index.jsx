import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCountriesError,
  getCountryDetail,
  fetchCountriesByAlpha_Code,
  getCountryStatus,
} from "../../redux/countries/slice";
import CardDetail from "../../components/cardDetail";
import Loader from "../../components/loader";
import { Body, Country } from "./styles";
import { useParams } from "react-router-dom";
import NoCountriesError from "../../components/noCountriesError";

const CountryDetail = () => {
  const { alpha_code } = useParams();
  const dispatch = useDispatch();
  const country = useSelector(getCountryDetail);
  const countryStatus = useSelector(getCountryStatus);
  const error = useSelector(getCountriesError);

  useEffect(() => {
    if (countryStatus === "Idle") {
      dispatch(fetchCountriesByAlpha_Code(alpha_code));
    }
  }, [alpha_code, dispatch, countryStatus]);

  let content;

  if (countryStatus === "Loading") {
    content = <Loader />;
  } else if (countryStatus === "Succeeded") {
    content = (
      <>
        {country ? (
          <CardDetail country={Array.isArray(country) ? country[0] : country} />
        ) : (
          <NoCountriesError />
        )}
      </>
    );
  } else if (countryStatus === "Failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <Body>
        <Country>{content}</Country>
      </Body>
    </div>
  );
};

export default CountryDetail;
