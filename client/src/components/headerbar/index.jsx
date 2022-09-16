import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCountries } from "../../redux/countries/slice";
import map from "../../utils/photos/map.png";
import { Button, Container } from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);

  return (
    <Container>
      <Link to='/home'>
        <Container>
          <img src={map} alt='' />
          <h2>Countries</h2>
        </Container>
      </Link>
      <Link to='/activity/addActivity'>
        <Button>Add New Activity</Button>
      </Link>
    </Container>
  );
};

export default Header;
