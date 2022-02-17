import styled from "styled-components";
import { BallTriangle } from "react-loader-spinner";

export default function ResultList(props) {
  const { itens, isLoading } = props;

  return (
    <List>
      {isLoading ? (
        <LoaderContainer>
          <BallTriangle color="#961316" height={100} width={100} />
        </LoaderContainer>
      ) : !itens ? (
        <Warning>Nenhum resultado :(</Warning>
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
  margin-top: 25px;
  background-color: #ffffff;
  width: 100%;
  height: 500px;
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

const Warning = styled.span`
  font-size: 26px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
