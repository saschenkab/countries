import styled from "styled-components";

export const Container = styled.div`
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  margin-left: 5%;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
`;

export const Button = styled.button`
  border-radius: 40px;
  padding: 4px;
  margin: 5px;
  font-size: 11spx;
  border: none;
  font-weight: 500;
  cursor: pointer;
  color: white;
  font-family: "Raleway", sans-serif;
  text-shadow: 0 0 1px #615751;
  background-color: ${(props) => (props.active ? "#606C38" : "#283618")};
`;
