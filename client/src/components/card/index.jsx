import { Link } from "react-router-dom"
import {
  CardContainer,
  CardBody,
  Flag,
  CardTitle,
  CardContinent,
  CardButton,
  AlphaCode,
} from "./styles";

const Card = ({alpha_code, flag, name, continent}) => {
    return (
        <CardContainer>
            <CardBody>
                <AlphaCode>{alpha_code}</AlphaCode>
                <CardTitle>{name}</CardTitle>
                <CardContinent>{continent}</CardContinent>
                <Link to={`/country/${alpha_code}`}>
                    <CardButton>More info</CardButton>
                </Link>
            </CardBody>
            <Flag src={flag} alt={name} />
        </CardContainer>
    );
};

export default Card;