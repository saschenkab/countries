import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountriesByName, clean } from "../../redux/countries/slice";
import {
  Input,
  NoAutocomplete,
  AutocompleteWrapper,
  CloseButton,
  InputContainer,
} from "./styles";

const Autocomplete = (props) => {
  const regex = "^[a-zA-Z ]*$";
  const [active, setActive] = useState(0);
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
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    dispatch(clean());
    // dispatch(fetchCountriesByName("", dispatch));
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 1 ? null : setActive(active - 2);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <AutocompleteWrapper>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
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
              <em>Not Found</em>
            ) : (
              <em>Please enter only letters</em>
            )}
          </NoAutocomplete>
        );
      }
    }

    return <></>;
  };
  return (
    <InputContainer>
      <Input
        type='text'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder='Search'
        pattern={regex}
        name='input'
        required
      />
      <CloseButton onClick={ResetHandler}>X</CloseButton>
      {/* </Input> */}
      {renderAutocomplete()}
    </InputContainer>
  );
};

export default Autocomplete;
