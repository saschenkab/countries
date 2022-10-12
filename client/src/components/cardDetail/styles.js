import styled from "styled-components";
import { Link } from "react-router-dom";

export const Alignment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 10px;
  width: 90%;
  height: auto;
  margin: 15px;
  box-shadow: 0 0 10px 0.1px #bb9457;
  background-color: #dda15e;
  animation: zoom 1s ease-out 1s 1 normal backwards;
  transition: 0.3s ease-out;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 10px;
  width: 90%;
`;

export const CardTitles = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-evenly;
  align-items: center;
`;

export const CountryFlag = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 30px;
  object-fit: initial;
  box-shadow: 0 0 10px 0.1px rgba(67, 40, 24, 0.2);
`;

export const CountryTitle = styled.h2`
  word-wrap: break-word;
  width: min-content;
  color: #283618;
  font-size: 35px;
  font-weight: 600;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-family: "Raleway", sans-serif;
  text-shadow: -0.5px 0.5px 1px #ffe6a7;
`;

export const CardContinent = styled.p`
  background: #606c38;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #fefae0;
  margin: 0;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  box-shadow: 0 0 10px 0.1px #bb9457;
  text-shadow: -0.5px 0.5px 0.5px #515c2d;
`;

export const AlphaCode = styled.div`
  width: fit-content;
  font-family: "Marcellus SC", serif;
  letter-spacing: 9px;
  font-size: 25px;
  letter-spacing: 3px;
  color: #283618;
  text-shadow: -0.5px 0.5px 1px #ffe6a7;
  font-weight: 500;
`;

export const Country = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 31.8%;
  p {
    font-size: 18px;
    font-weight: 400;
    background: #7f5539;
    padding: 5px 10px;
    border-radius: 10px;
    color: #fefae0;
    text-shadow: none;
    text-align: center;
    font-family: "Raleway", sans-serif;
    text-shadow: -0.5px 0.5px 1px #66442e;
  }

  h3 {
    display: flex;
    flex-flow: column wrap;
    align-items: left;
    font-size: 25px;
    font-weight: 600;
    color: #283618;
    text-shadow: -0.5px 0.5px 1px #ffe6a7;
    font-family: "Raleway", sans-serif;
  }
`;

export const Span = styled.span`
  font-size: 30px;
  font-family: "Marcellus SC", serif;
  letter-spacing: 1px;
  background-color: #606c38;
  width: 180px;
  padding: 5px 10px;
  align-self: center;
  border-radius: 10px;
  color: #fefae0;
  box-shadow: 0 0 3px 0.1px #606c38;
  text-shadow: -0.5px 0.5px 0.5px #283618;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 0.09em;
    min-width: 33vw;
  }

  &::before {
    background: linear-gradient(to right, rgba(240, 240, 240, 0), #606c38);
    margin-right: 2.8vh;
  }

  &::after {
    background: linear-gradient(to left, rgba(240, 240, 240, 0), #606c38);
    margin-left: 3vh;
  }
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: row wrap;
  justify-content: space-evenly;
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  background-color: rgba(127, 85, 57, 50%);
  margin: 10px;
  box-shadow: 0 0 5px 0.1px #a67c4e;
`;

export const Activities = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 25%;

  h3 {
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    margin-top: 0;
    color: #fefae0;
    text-shadow: -0.5px 0.5px 1px #66442e;
  }

  span {
    font-size: 20px;
    background: rgba(96, 108, 56, 80%);
    padding: 5px 10px;
    border-radius: 10px;
    color: #fefae0;
    text-shadow: -0.5px 0.5px 0.5px #515c2d;
    font-family: "Raleway", sans-serif;
  }

  li {
    list-style-type: none;
    margin-bottom: 5px;
    font-size: 20px;
    background: rgba(96, 108, 56, 80%);
    padding: 5px 10px;
    border-radius: 10px;
    color: #fefae0;
    text-shadow: -0.5px 0.5px 0.5px #515c2d;
    font-family: "Raleway", sans-serif;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  font-family: "Raleway", sans-serif;
`;

export const AddActivityButton = styled(Link)`
  background-color: #7f5539;
  color: #fff;
  font-size: 20px;
  text-shadow: -0.5px 0.5px 0.5px #66442e;
  font-family: "Raleway", sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: #fefae0;
  position: relative;
  bottom: 2px;

  &:hover {
    box-shadow: 0 0 4px 0.5px #66442e;
    background-color: #a67c4e;
  }
`;
