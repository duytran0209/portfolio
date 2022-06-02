import React from "react";
import styled from "styled-components";

const ReviewItem = ({ text }) => {
  return (
    <ReviewItemStyled>
      <p
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {text}
      </p>
    </ReviewItemStyled>
  );
};

const ReviewItemStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 5px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 2rem;
    top: 100%;
    border-width: 0.8rem;
    border-color: var(--background-dark-grey) transparent transparent
      var(--background-dark-grey);
    border-style: solid;
  }
`;
export default ReviewItem;
