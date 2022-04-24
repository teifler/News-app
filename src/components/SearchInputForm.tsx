import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const SearchInputForm: React.FC<{
  setSearchQuery: (arg0: string) => void;
}> = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [validationError, setValidationError] = useState<boolean>(false);
  const onSubmit = (): void => {
    setSearchQuery(searchInput);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmed: string = e.target.value.trim();
    if (trimmed !== '' && !trimmed.match(/^[a-zA-Z0-9_. ]+$/)) {
      setValidationError(true);
    } else {
      setSearchInput(trimmed);
      setValidationError(false);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <FlexContainer>
        <SearchInput
          onChange={handleChange}
          aria-label="Searchinput"
          placeholder="Search here..."
        ></SearchInput>
        <SubmitButton
          type="button"
          aria-label="Submit"
          onClick={onSubmit}
          disabled={validationError}
        >
          Search
        </SubmitButton>
      </FlexContainer>
      {validationError && (
        <SearchValidationError>
          Please don't use special characters
        </SearchValidationError>
      )}
    </form>
  );
};

export default SearchInputForm;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px 0 0 10px;
  border-right: none;
  outline: none;
  font-size: 20px;
  color: black;
  background: none;
`;

const SubmitButton = styled.button`
  background-color: #acbdba;
  text-align: center;
  height: 51px;
  width: 80px;
  outline: none;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  border: 1px solid black;
  border-left: none;
  font-size: 20px;
  border-left: 2px solid black;
`;

const SearchValidationError = styled.p`
  color: var(--font-color-red);
`;
