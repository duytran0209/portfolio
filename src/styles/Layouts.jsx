import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  ${(props) => (props.padding ? props.padding : "")}
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
