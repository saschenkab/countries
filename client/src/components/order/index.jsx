import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName, orderByPopulation } from "../../redux/countries/slice";
import { Container, Button, Label } from "./styles";

const Order = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [active, setActive] = useState("");

  const handleOrderByPopulation = (event, string) => {
    event.preventDefault();
    dispatch(orderByPopulation(string));
    setOrder(event.target);
    setActive(string);
  };

  const handleOrder = (event, string) => {
    event.preventDefault();
    dispatch(orderByName(string));
    setOrder(event.target);
    setActive(string);
  };

  return (
    <Container>
      <Label>Order By:</Label>
      <Button
        onClick={(event) => handleOrder(event, "a-z")}
        active={active === "a-z"}
      >
        A-Z
      </Button>
      <Button
        onClick={(event) => handleOrder(event, "z-a")}
        active={active === "z-a"}
      >
        Z-A
      </Button>
      <Label>Order By Population:</Label>
      <Button
        onClick={(event) => handleOrderByPopulation(event, "asc")}
        active={active === "asc"}
      >
        Most Populated
      </Button>
      <Button
        onClick={(event) => handleOrderByPopulation(event, "desc")}
        active={active === "desc"}
      >
        Less Populated
      </Button>
    </Container>
  );
};

export default Order;
