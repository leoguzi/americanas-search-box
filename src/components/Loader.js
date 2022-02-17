import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";
export default function Loader() {
  return (
    <LoaderContainer>
      <BallTriangle color="#961316" height={100} width={100} />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
