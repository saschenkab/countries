import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(33.33% - 52px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  border-radius: 40px;
  position: relative;
  // border: 1px solid rgba(67, 40, 24, 0.2);
  box-shadow: 0 0 3px 1px rgba(67, 40, 24, 0.3);
  transition: 0, 5s ease-out;
  overflow: visible;
  margin: 15px;
  padding: 10px;

  &:hover {
    border-color: #6f1d1b;
  }

  &:hover button {
    transform: translate(-50%, 50%);
    opacity: 1;
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

export const Flag = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 2px 1.2px rgba(67, 40, 24, 0.6);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const CardBody = styled.div`
  bottom: 0;
  left: 0;
  padding: 7px;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: space-between;
  margin-top: 3px;

  transition: all 0.2s ease-out;

  &:hover {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const CardTitle = styled.h2`
  word-wrap: break-word;
  color: ${(props) => props.theme.title};
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardContinent = styled.p`
  background: #ffe6a7;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #6f1d1b;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CardButton = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #432818;
  color: #fff;
  font-size: 14px;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AlphaCode = styled.div`
  width: fit-content;
  color: #fff;
  letter-spacing: 1.4px;
  font-size: 12px;
  color: #6f1d1b;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
