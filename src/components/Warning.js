import styled from "styled-components";

export default function StyledWarning({ children }) {
  return <Warning>{children}</Warning>;
}

const Warning = styled.span`
  text-align: center;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
