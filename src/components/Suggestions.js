import styled from "styled-components";
import Loader from "./Loader";
import StyledWarning from "./Warning";
import { searchProducts } from "../service/americanasApi";

export default function Suggestions(props) {
  const { suggestions, isLoading, setResults, setIsLoading } = props;

  function handleSuggestionClick(term) {
    setIsLoading(true);
    setResults({});
    const cleanSearchField = term.replace(/ /g, "&");
    searchProducts(cleanSearchField)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }
  return (
    <SuggestiosContainer>
      {isLoading ? (
        <Loader />
      ) : !suggestions ? (
        <StyledWarning>
          Nenhuma sugestão ainda. Faça uma pesquisa!
        </StyledWarning>
      ) : (
        <>
          <SuggestionsTitle>
            Sugestões com base na sua pesquisa:
          </SuggestionsTitle>
          {suggestions?.map((suggestion, index) => {
            return (
              <li
                onClick={(e) => handleSuggestionClick(suggestion.term)}
                key={index}
              >
                <span>{`- ${suggestion.term}`}</span>
              </li>
            );
          })}
        </>
      )}
    </SuggestiosContainer>
  );
}

const SuggestiosContainer = styled.ul`
  position: relative;
  margin-top: 72px;
  width: 300px;
  height: 465px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;

  li {
    cursor: pointer;
    margin: 20px 0;
    font-size: 24px;
  }
`;

const SuggestionsTitle = styled.span`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.3;
`;
