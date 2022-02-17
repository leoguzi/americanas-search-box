import styled from "styled-components";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import ResultList from "../components/ResultList";
import Suggestions from "../components/Suggestions";

export default function MainPage() {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ContentContainer>
      <div>
        <div>
          <h1>Bem vindo a nossa página de pesquida de produtos! </h1>
          <h2>
            Digite o que deseja no campo de pesquisa e clique em pesquisar:
          </h2>
        </div>
        <SearchBox setResults={setResults} setIsLoading={setIsLoading} />
        <ResultList itens={results.products} isLoading={isLoading}></ResultList>
      </div>
      <Suggestions
        suggestions={results.suggestions}
        setResults={setResults}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      ></Suggestions>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 1024px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
    font-size: 18px;
  }
`;
