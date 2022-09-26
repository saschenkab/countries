import Card from "../card/index";
import { CardsWrapper, NoCountries } from "./styles";

const Cards = ({ countries }) => {
  return (
    <>
      {Array.isArray(countries) && countries.length > 0 ? (
        <CardsWrapper>
          {countries.map((country) => (
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
        <>
          <NoCountries>
            <span>N</span>
            <span>o</span>
            <span> </span>
            <span>C</span>
            <span>o</span>
            <span>u</span>
            <span>n</span>
            <span>t</span>
            <span>r</span>
            <span>i</span>
            <span>e</span>
            <span>s</span>
            <span> </span>
            <span>F</span>
            <span>o</span>
            <span>u</span>
            <span>n</span>
            <span>d</span>
          </NoCountries>
        </>
      )}
    </>
  );
};

export default Cards;
