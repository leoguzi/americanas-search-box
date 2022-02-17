import styled from "styled-components";
import { useState } from "react";
import SearchBox from "../components/SearchBox";

export default function MainPage() {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ContentContainer>
      <h1>Bem vindo a nossa pagina de pesquida de produtos! </h1>
      <h2>Digite o que deseja no campo de pesquisa e clique em pesquisar:</h2>
      <SearchBox setResults={setResults} setIsLoading={setIsLoading} />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 700px;
  margin: 100px auto;

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
