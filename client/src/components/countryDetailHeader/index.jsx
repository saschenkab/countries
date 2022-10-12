import { useDispatch, useSelector } from "react-redux";
import { cleanState } from "../../redux/activities/slice";
import { Link } from "react-router-dom";
import {
  clean,
  fetchCountries,
  selectAllCountries,
} from "../../redux/countries/slice";
import Autocomplete from "../searchbar";
import { Container, BackHome, Icon, Logo } from "./styles";
import map from "../../utils/photos/map.png";

const CountryHeaderBar = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const handleChange = () => {
    dispatch(fetchCountries());
    dispatch(clean());
    dispatch(cleanState());
  };

  const autocomplete = countries
    ? countries.map((country) => country.name)
    : null;
  return (
    <Container>
      <Link to='/home' onClick={handleChange}>
        <BackHome>
          {" "}
          Home
          <Icon>
            <svg
              height='24'
              width='24'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
                fill='#FEFAE0'
              ></path>
            </svg>
          </Icon>
        </BackHome>
      </Link>
      <Autocomplete suggestions={autocomplete} />
      <Logo>
        <img src={map} alt='' />
        <h2>Countries</h2>
      </Logo>
    </Container>
  );
};

export default CountryHeaderBar;
