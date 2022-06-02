import React from "react";
import styled from "styled-components";

const Button = ({ filter, button }) => {
  return (
    <ButtonsStyled>
      {button.map((but, id) => {
        return (
          <ButtonStyled key={id} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
};

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  background-color: var(--background-light-color-2);
  padding: 0.5rem 2rem;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.4 ease-in-out;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  color: var(--white-color);
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;

const ButtonsStyled = styled.div`
  display: flex;
  gap: 0 1.1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto 5rem;
`;
export default Button;
