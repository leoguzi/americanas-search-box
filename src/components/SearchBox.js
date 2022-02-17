import styled from "styled-components";
import { useState } from "react";
import { searchProducts } from "../service/americanasApi";

export default function SearchBox(props) {
  const { setResults, setIsLoading } = props;
  const [searchField, setSearchField] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setResults({});
    const cleanSearchField = searchField.replace(/ /g, "");
    searchProducts(cleanSearchField)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }
  return (
    <SearchContainer onSubmit={(e) => handleSearch(e)}>
      <StyledInput
        required
        type="text"
        placeholder="Pesquisar"
        value={searchField}
        onChange={(event) => setSearchField(event.target.value)}
      />
      <StyledButton type="submit">Pesquisar</StyledButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.form`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 450px;
  height: 45px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 20px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 45px;
  background-color: #ed7377;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  font-weight: bold;
`;
