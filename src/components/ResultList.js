import styled from "styled-components";
import Loader from "./Loader";
import StyledWarning from "./Warning";

export default function ResultList(props) {
  const { itens, isLoading } = props;

  return (
    <List>
      {isLoading ? (
        <Loader />
      ) : !itens ? (
        <StyledWarning>Nenhum resultado :(</StyledWarning>
      ) : (
        <>
          <ListTitle>Resultados: </ListTitle>
          {itens?.map((product, index) => {
            return (
              <li key={index}>
                <Number>{`${index + 1} - `}</Number>
                <Name>{product.name}</Name>
              </li>
            );
          })}
        </>
      )}
    </List>
  );
}

const List = styled.ul`
  margin-top: 20px;
  background-color: #ffffff;
  width: 700px;
  height: 400px;
  border-radius: 8px;
  padding: 10px 20px;
  position: relative;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    font-size: 20px;
    padding: 10px 0;
    line-height: 1.3;
    border-bottom: 1px solid #6d0e10;
  }
`;

const ListTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Name = styled.span`
  overflow: hidden;
`;

const Number = styled.span`
  font-weight: bold;
`;
