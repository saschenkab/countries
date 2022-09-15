import styled from "styled-components";
import mapamundi from "../../utils/photos/mapamundi.jpg";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Marcellus+SC&display=swap');
</style>;

export const LandingBackground = styled.div`
  background-image: url(${mapamundi});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const ButtonTitle = styled.span`
  font-weight: 600;
  letter-spacing: 0.4rem;
  font-size: 20px;
  font-family: "Marcellus SC", serif;
  text-shadow: -1px 1px 1.8px white;
  text-transform: uppercase;
  text-align: center;
  margin-left: 6%;
  color: #6f4e37;
  transition: all 3s;
`;

export const Plane = styled.img`
  display: none;
`;

export const Span = styled.span`
  display: none;
  font-weight: 600;
  letter-spacing: 0.4rem;
  font-size: 20px;
  font-family: "Marcellus SC", serif;
  text-shadow: -1px 1px 1.8px white;
  text-transform: uppercase;
  text-align: center;
  color: #6f4e37;
`;

export const Button = styled.div`
  border: none;
  color: #ede0d4;
  padding: 8px 15px;
  border-radius: 40px;
  text-align: center;
  display: flex;
  align-content: center;
  width: 20%;
  margin: 350px auto;
  backdrop-filter: blur(10px);
  align-items: center;
  box-shadow: 2px 2px 5px #68533a, -2px -2px 5px #68533a;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  ${Plane} {
    position: absolute;
    height: 35px;
    display: flex;
    justify-content: start;
    transform: translate(0%, 100%) rotate(-8deg);
    transition: ease-out 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    visibility: collapse;
  }

  ${Span} {
    position: absolute;
    display: flex;
    justify-content: start;
    align-items: center;
    transition: ease-out 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    visibility: collapse;
  }

  &:hover ${Plane} {
    visibility: visible;
    height: 35px;
    justify-content: start;
    align-items: center;
    transition: all 0.9s;
    transform: translateX(240px);
  }

  &:hover ${ButtonTitle} {
    transition: all 0.4s;
    opacity: 0;
  }

  &:hover ${Span} {
    visibility: visible;
    transition: all 0.9s;
    transform: translateX(75px);
  }

  &:active ${Span} {
    transition: none;
    text-shadow: 2px 2px 5px #68533a, -2px -2px 5px #68533a;
    color: white;
  }

  &:active ${Plane} {
    transform: translate(500px, -50px) rotate(-20deg);
    transition: ease-out 0.2s;
  }
`;
