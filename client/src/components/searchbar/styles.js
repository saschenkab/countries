import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const CloseButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  position: relative;
  right: 6%;
  background-color: wheat;
  padding: 1px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-family: "Raleway", sans-serif;
  visibility: hidden;
  opacity: 0;
`;

export const AutocompleteWrapper = styled.ul`
  position: absolute;
  top: 10%;
  left: 41.2%;
  list-style: none;
  max-height: 117px;
  overflow: scroll;
  scrollbar-width: none;
  padding-left: 0;
  font-family: "Raleway", sans-serif;
  width: 405px;
  border-radius: 8px;
  z-index: 1;
  transition: 0.3s ease-in-out all;
  visibility: hidden;
  opacity: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    outline: none;
    background-color: #606c38;
    color: #fefae0;
    padding: 5px;
    width: 395px;
  }

  &.active {
    background-color: #f5f5f5;
  }

  &.active,
  li:hover {
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0px -23px 60px 1px #283618 inset;
  }
`;

export const NoAutocomplete = styled.ul`
  color: #999;
  margin: 0;
  padding: 8px;
  position: absolute;
  left: 50%;
  top: 10%;
  font-size: 1.2rem;
  font-family: "Marcellus SC", serif;
`;

export const Input = styled.input`
  width: 360px;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  display: flex;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #dda15e;
  color: #0d0c22;
  transition: 0.3s ease;
  font-family: "Raleway", sans-serif;
  font-size: 15px;

  &::placeholder {
    color: #fefae0;
  }

  &:hover {
    outline: none;
    border-color: #283618;
    box-shadow: 0 0 0 4px rgba(96 108 56 / 20%);
  }

  &:invalid {
    animation: justshake 0.3s forwards;
    color: red;
    font-weight: 600;
  }

  &:focus ~ ${AutocompleteWrapper} {
    opacity: 1;
    visibility: visible;
  }

  &:valid ~ ${CloseButton} {
    opacity: 1;
    visibility: visible;
    transition: 0.3s ease-out all;
  }

  @keyframes justshake {
    25% {
      transform: translateX(5px);
    }

    50% {
      transform: translateX(-5px);
    }

    75% {
      transform: translateX(5px);
    }

    100% {
      transform: translateX-(5px);
    }
  }
`;
