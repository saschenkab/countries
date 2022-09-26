import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 70px;
  line-height: 50px;
  text-align: center;
  margin: 15rem 50rem;
  position: fixed;

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #283618;
    border-radius: 50px;
    animation: up-down6 0.5s ease-in infinite alternate;
  }

  span:nth-child(2) {
    background: #374a21;
    animation-delay: 0.16s;
  }

  span:nth-child(3) {
    background: #606c38;
    animation-delay: 0.32s;
  }

  span:nth-child(4) {
    background: #a1b076;
    animation-delay: 0.48s;
  }

  @keyframes up-down6 {
    0% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(10px);
    }
  }
`;
