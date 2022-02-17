import styled from "styled-components";
import { useState } from "react";

export default function SearchBox(props) {
  const { setResults } = props;
  const [searchField, setSearchField] = useState("");

  function handleSearch(event) {
    console.log(searchField);
  }

  return (
    <SearchContainer>
      <StyledInput
        type="text"
        placeholder="Pesquisar"
        value={searchField}
        onChange={(event) => setSearchField(event.target.value)}
      />
      <StyledButton onClick={() => handleSearch()}>Pesquisar</StyledButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  margin-top: 25px;
`;

const StyledInput = styled.input`
  width: 350px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 20px;
`;

const StyledButton = styled.button`
  width: 180px;
  height: 45px;
  background-color: #ed7377;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  font-weight: bold;
`;
