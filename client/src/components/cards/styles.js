import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NoCountries = styled.div`
  width: 50%;
  margin: 15rem 45rem;
  position: fixed;

  span {
    animation: arrive 1s ease-out 0s normal forwards;
    color: #283618;
    font-family: "Raleway", sans-serif;
    font-size: 25px;
    font-weight: 600;
  }
  span:nth-child(2) {
    color: #374a21;
    animation-delay: 0.1s;
  }

  span:nth-child(4) {
    color: #47602b;
    animation-delay: 0.15s;
  }

  span:nth-child(5) {
    color: #577535;
    animation-delay: 0.2s;
  }
  span:nth-child(6) {
    color: #678a3e;
    animation-delay: 0.25s;
  }
  span:nth-child(7) {
    color: #77a048;
    animation-delay: 0.3s;
  }
  span:nth-child(8) {
    color: #86b254;
    animation-delay: 0.35s;
  }
  span:nth-child(9) {
    color: #86b254;
    animation-delay: 0.4s;
  }
  span:nth-child(10) {
    color: #77a048;
    animation-delay: 0.45s;
  }
  span:nth-child(11) {
    color: #678a3e;
    animation-delay: 0.5s;
  }
  span:nth-child(12) {
    color: #577535;
    animation-delay: 0.55s;
  }
  span:nth-child(14) {
    color: #47602b;
    animation-delay: 0.6s;
  }
  span:nth-child(15) {
    color: #374a21;
    animation-delay: 0.65s;
  }
  span:nth-child(16) {
    color: #283618;
    animation-delay: 0.7s;
  }
  span:nth-child(18) {
    color: #283618;
    animation-delay: 0.8s;
  }

  @keyframes arrive {
    0% {
      opacity: 0;
      transform: translateY(-250px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
