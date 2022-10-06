import styled from "styled-components";

export const Container = styled.div`
  width: 17%;
  height: 100%;
  margin-left: 15px;
`;

export const FiltersStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #6c7843;
  margin-bottom: 10px;
  margin-top: 15px;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0 0 5px 0.1px #606c38;
  animation: zoom 2s ease-out 1.5s 1 normal backwards;
  transition: 0.3s ease-out;

  @keyframes zoom {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Item = styled.div`
  margin: 10px 5px;
  text-transform: capitalize;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 9px;
    height: 50%;
    background-color: ${(props) => (props.active ? "#283618" : "transparent")};
    font-weight: 600;
    position: absolute;
    left: -5px;
    top: 5px;
    border-radius: 50%;
  }

  span {
    font-weight: ${(props) => (props.active ? "600" : "400")};
  }
`;

export const Span = styled.span`
  margin-left: 10px;
  font-size: 15px;
  text-align: left;
  color: #fefae0;
  font-family: "Raleway", sans-serif;

  &:hover {
    font-weight: 600;
  }
`;
