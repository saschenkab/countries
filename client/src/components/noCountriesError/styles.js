import styled from "styled-components";

export const NoCountries = styled.div`
  height: 70vh;
  display: -webkit-box;
  align-items: center;
  justify-content: center;

  span {
    animation: arrive 5s ease-out infinite normal forwards;
    color: #283618;
    font-family: "Raleway", sans-serif;
    font-size: 27px;
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
  span:nth-child(17) {
    color: #283618;
    animation-delay: 0.75s;
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
