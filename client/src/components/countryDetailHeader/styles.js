import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 15px;

  h2 {
    font-weight: 600;
    letter-spacing: 0.4rem;
    font-size: 3rem;
    font-family: "Marcellus SC", serif;
    text-shadow: -1px 1px 1.8px white;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    margin-left: 5%;
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

export const Logo = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Icon = styled.span`
  background: #99a66d;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #606c38;
  right: 0.3em;
  transition: all 0.3s;
`;

export const BackHome = styled.button`
  background: #606c38;
  color: #fefae0;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0.1px #606c38;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;

  &:hover ${Icon} {
    width: calc(100% - 0.6em);
  }

  & ${Icon} svg {
    width: 1.1em;
    transition: transform 0.3s;
    transform: rotate(180deg);
  }

  &:hover ${Icon} svg {
    transform: translateX(0.1em) rotate(180deg) scale(1.5);
  }

  &:active ${Icon} {
    transform: scale(0.95);
  }
`;
