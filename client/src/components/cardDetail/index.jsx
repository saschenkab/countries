import CountryHeaderBar from "../countryDetailHeader";
import {
  Container,
  CardContinent,
  CardHeader,
  CardTitles,
  CountryFlag,
  Country,
  CountryTitle,
  AlphaCode,
  Activities,
  Alignment,
  Info,
  Span,
  ActivitiesContainer,
  ErrorMessage,
  AddActivityButton,
} from "./styles";

const CardDetail = ({ country }) => {
  let area = country.area;
  let population = country.population;
  let nf = Intl.NumberFormat();
  if (area && population) {
    population = nf.format(population);
    area = nf.format(area);
    // area = String(area).replace(/(.)(?=(\d{3})+$)/g, "$1,"); this puts comas
  }

  return (
    <Alignment>
      <Info>
        <CountryHeaderBar />
      </Info>
      {country ? (
        <Container key={country.alpha_code}>
          <CardHeader>
            <CountryFlag src={country.flag} alt='flag-img' />
            <CardTitles>
              <AlphaCode>{country.alpha_code}</AlphaCode>
              <CountryTitle>{country.name}</CountryTitle>
              <CardContinent>{country.continent}</CardContinent>
            </CardTitles>
            <Country>
              <h3>
                Capital:
                <p>{country?.capital}</p>
              </h3>
              <h3>
                Subregion:
                <p>{country.subregion}</p>
              </h3>
              <h3>
                Population:
                <p>{population}</p>
              </h3>
              <h3>
                Area:
                <p>
                  {area} <b>km2</b>
                </p>
              </h3>
            </Country>
          </CardHeader>

          <Span>Activities:</Span>
          {country.activities.length > 0 ? (
            country.activities.map((activity) => (
              <ActivitiesContainer>
                <Activities>
                  <h3>Activity: </h3>
                  <span>{activity.name}</span>
                </Activities>
                <Activities>
                  <h3>Difficulty: </h3>
                  <span>{activity.difficulty}</span>
                </Activities>
                <Activities>
                  <h3>Duration</h3>
                  <span>{activity.duration} hours</span>
                </Activities>
                <Activities>
                  <h3>Seasons: </h3>
                  {activity.seasons.map((season) => (
                    <li>{season}</li>
                  ))}
                </Activities>
              </ActivitiesContainer>
            ))
          ) : (
            <ErrorMessage>
              There are no activities for this country 😔, wanna add a new one?{" "}
              <AddActivityButton>click here</AddActivityButton>
            </ErrorMessage>
          )}
        </Container>
      ) : null}
    </Alignment>
  );
};

export default CardDetail;
