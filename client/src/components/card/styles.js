import styled from "styled-components";

export const Flag = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 10px 0.1px rgba(67, 40, 24, 0.2);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const CardTitle = styled.h2`
  word-wrap: break-word;
  color: #283618;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  font-family: "Raleway", sans-serif;
  text-shadow: -0.5px 0.5px 0px #bb9457;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardContinent = styled.p`
  background: #606c38;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #fefae0;
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  box-shadow: 0 0 10px 0.1px #bb9457;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const AlphaCode = styled.div`
  width: fit-content;
  letter-spacing: 1.4px;
  font-size: 15px;
  color: #283618;
  /* text-align: center; */
  font-weight: 500;
  font-family: "Marcellus SC", serif;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CardBody = styled.div`
  padding: 7px;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: space-between;
  transition: 5s ease-out;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const CardButton = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #7f5539;
  color: #fff;
  font-size: 14px;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-family: 500;
  font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: calc(33.33% - 52px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 160px;
  border-radius: 40px;
  position: relative;
  box-shadow: 0 0 10px 0.1px #bb9457;
  background-color: #dda15e;
  overflow: visible;
  margin: 15px;
  padding: 10px;
  will-change: contents;
  animation: myAnim 1s ease-out 1s 1 normal backwards;

  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: 0 0 15px 0.1px #bb9457;
    transition: 0.3s ease-out all;
    ${CardButton} {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
  }
  ${CardButton}:hover {
    background-color: #9c6644;
  }

  @media (max-width: 1100px) {
    width: calc(50% - 52px);
  }

  @media (max-width: 768px) {
    width: calc(50% - 52px);
  }

  @media (max-width: 700px) {
    width: calc(100% - 52px);
  }
`;
