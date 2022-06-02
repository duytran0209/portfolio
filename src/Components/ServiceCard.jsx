import React from "react";
import styled from "styled-components";

const ServiceCard = ({ image, title, paragraph }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img
          src={image}
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <h4
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {title}
        </h4>
        <p
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {paragraph}
        </p>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  .container {
    padding: 1.2rem;
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all 0.4s linear;
    &:hover {
      border-top: 8px solid var(--primary-color);
      transform: translateY(3px);
    }

    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &:after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }

    p {
      padding: 0.8rem 0;
    }
  }
`;

export default ServiceCard;
