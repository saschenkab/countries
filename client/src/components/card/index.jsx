import { Link } from "react-router-dom";
import {
  CardContainer,
  CardBody,
  Flag,
  CardTitle,
  CardContinent,
  CardButton,
  AlphaCode,
} from "./styles";

const Card = ({ alpha_code, flag, name, continent, variant }) => {
  return (
    <CardContainer variant={variant}>
      <CardBody variant={variant}>
        <AlphaCode variant={variant}>{alpha_code}</AlphaCode>
        <CardTitle variant={variant}>{name}</CardTitle>
        <CardContinent variant={variant}>{continent}</CardContinent>
      </CardBody>
      <Link to={`/country/${alpha_code}`}>
        <CardButton variant={variant}>More info</CardButton>
      </Link>
      <Flag variant={variant} src={flag} alt={name} />
    </CardContainer>
  );
};

export default Card;
