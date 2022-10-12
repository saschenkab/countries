import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountriesByName } from "../../redux/countries/slice";
import {
  Input,
  NoAutocomplete,
  AutocompleteWrapper,
  CloseButton,
  InputContainer,
} from "./styles";

const Autocomplete = (props) => {
  const regex = "^[a-zA-Z-Å(),éãíç ]*$";
  const [active, setActive] = useState(-1);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { suggestions } = props;
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(input);
  };
  const onClick = (e) => {
    const innerText = e.currentTarget.innerText;
    e.preventDefault();
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(innerText);
    dispatch(fetchCountriesByName(innerText, dispatch));
  };

  const ResetHandler = (e) => {
    setInput("");
    setActive(-1);
    setIsShow(false);
  };

  const onKeyDown = (e) => {
    let suggestion = e.target.value;
    const { key } = e;
    let nextIndexCount = 0;
    if (key === "Enter") {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(suggestion);
      dispatch(fetchCountriesByName(suggestion, dispatch));
    } else if (key === "ArrowUp") {
      // up arrow
      setIsShow(true);
      setInput(filtered[active - 2]);
      nextIndexCount = active - 1;
    } else if (key === "ArrowDown") {
      // down arrow
      setIsShow(true);
      setInput(filtered[active]);
      nextIndexCount = active + 1;
    }
    setActive(nextIndexCount);
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <AutocompleteWrapper>
            {filtered.map((suggestion, index) => {
              return (
                <li
                  key={suggestion}
                  onClick={onClick}
                  style={{
                    boxShadow:
                      index === active - 1
                        ? "0px -23px 60px 1px #283618 inset"
                        : "",
                    fontWeight: index === active - 1 ? "600" : "",
                  }}
                >
                  {suggestion}
                </li>
              );
            })}
          </AutocompleteWrapper>
        );
      } else {
        return (
          <NoAutocomplete>
            {input.match(regex) ? (
              <span>Not Found</span>
            ) : (
              <span>Please enter only letters</span>
            )}
          </NoAutocomplete>
        );
      }
    }
  };

  return (
    <InputContainer>
      <Input
        type='text'
        onChange={onChange}
        onKeyDownCapture={onKeyDown}
        value={input}
        placeholder='Search'
        pattern={regex}
        name='input'
        required
      />
      <CloseButton onClick={ResetHandler}>X</CloseButton>
      {renderAutocomplete()}
    </InputContainer>
  );
};

export default Autocomplete;
