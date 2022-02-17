import styled from "styled-components";
import { useState } from "react";
import SearchBox from "../components/SearchBox";

export default function MainPage() {
  const [results, setResults] = useState([]);
  return (
    <ContentContainer>
      <h1>Bem vindo a nossa pagina de pesquida de produtos! </h1>
      <h2>Digite o que deseja no campo de pesquisa e clique em pesquisar:</h2>
      <SearchBox setResults={setResults} />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 1024px;
  margin: 100px auto;
  text-align: center;
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
  }
`;
