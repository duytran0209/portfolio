import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"}></Title>
        <div className="services">
          <ServiceCard
            image={design}
            title={"HTML3, CSS5"}
            paragraph={
              "Bootstrap 5, SCSS, Tailwind CSS, CSS module, Styled Components ...  "
            }
          ></ServiceCard>

          <ServiceCard
            image={intelligence}
            title={"React JS"}
            paragraph={
              "Javascript ES6, Hook, Material UI, Formik and Yup, React-router-dom v6 ... "
            }
          ></ServiceCard>

          <ServiceCard
            image={gamedev}
            title={"Other Skills"}
            paragraph={
              "Github, Vercel, VSCode, Figma, Jira, Trello, Firebase, PSD to HTML, Office Skills..."
            }
          ></ServiceCard>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.2rem;
  }
`;
export default ServicesSection;
