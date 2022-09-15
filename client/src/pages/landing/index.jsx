import React from "react";
import { Link } from "react-router-dom";
import { LandingBackground, Button, ButtonTitle, Plane, Span } from "./styles";
import airplane from '../../utils/photos/plane.png'


const Landing = () => {
  return (
    <LandingBackground>
      <Link to="/home">
        <Button >
          <Plane src={airplane} alt="icon" />
          <ButtonTitle>Ready to Travel?</ButtonTitle>
          <Span>Let's Go!</Span>
        </Button>
      </Link>
    </LandingBackground>
  );
};

export default Landing;