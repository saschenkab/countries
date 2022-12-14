import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchCountries,
  selectAllCountries,
} from "../../redux/countries/slice";
import map from "../../utils/photos/map.png";
import { Button, Container } from "./styles";
import Autocomplete from "../searchbar";
import Order from "../order";
import { clean } from "../../redux/countries/slice";
import { cleanState } from "../../redux/activities/slice";

const Header = () => {
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
    <>
      <Container>
        <Link to='/home'>
          <Container onClick={handleChange} active={false}>
            <img src={map} alt='' />
            <h2>Countries</h2>
          </Container>
        </Link>
        <Autocomplete suggestions={autocomplete} />
        <Link to='/activity/addActivity'>
          <Button>Add New Activity</Button>
        </Link>
      </Container>
      <Order />
    </>
  );
};

export default Header;
