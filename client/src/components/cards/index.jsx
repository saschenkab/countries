import Card from "../card/index";
import { CardsWrapper } from "./styles";
import NoCountriesError from "../noCountriesError";

const Cards = ({ countries }) => {
  return (
    <>
      {Array.isArray(countries) && countries.length > 0 ? (
        <CardsWrapper>
          {countries.length === 1
            ? countries.map((country) => (
                <Card
                  key={country.alpha_code}
                  alpha_code={country.alpha_code}
                  flag={country.flag}
                  name={country.name}
                  continent={country.continent}
                  variant='one'
                />
              ))
            : countries.map((country) => (
                <Card
                  key={country.alpha_code}
                  alpha_code={country.alpha_code}
                  flag={country.flag}
                  name={country.name}
                  continent={country.continent}
                />
              ))}
        </CardsWrapper>
      ) : (
        <NoCountriesError />
      )}
    </>
  );
};

export default Cards;
