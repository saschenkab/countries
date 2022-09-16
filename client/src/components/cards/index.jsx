import { useSelector } from "react-redux";
import Card from "../card/index";
import styled from "styled-components";

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Cards = ({countries}) => {
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
                <h2>No Countries Found</h2>
            </>
        )}
        </>
    )
}

export default Cards