import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h2 {
    font-weight: 600;
    letter-spacing: 0.4rem;
    font-size: 3rem;
    font-family: "Marcellus SC", serif;
    text-shadow: -1px 1px 1.8px white;
    text-transform: uppercase;
    text-align: center;
    margin-left: 6%;
    color: #283618;
  }

  img {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 820px) {
    padding: 0 10px;
    h2 {
      font-size: 1rem;
    }
    img {
      height: 60px;
      width: 60px;
    }
  } ;
`;

export const Button = styled.div`
  background-color: #606c38;
  color: #fefae0;
  padding: 1rem 1rem;
  border-radius: 10px;
  font-weight: 200;
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19px;
  box-shadow: 0 0 3px 0.1px #606c38;
  will-change: contents;
  cursor: pointer;
  transition: 0.3s ease-in all;

  &:hover {
    box-shadow: 0 0 5px 0.2px #606c38;
    font-weight: 500;
  }

  @media (max-width: 820px) {
    font-size: 13px;
  }
`;
