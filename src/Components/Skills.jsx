import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title={"My skills"} span={"My skills"}></Title>
      <InnerLayout>
        <div
          className="skills"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <ProgressBar title={"HTML"} width={"85%"} text={"85%"} />

          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />

          <ProgressBar title={"Javascript"} width={"60%"} text={"60%"} />

          <ProgressBar title={"React JS"} width={"80%"} text={"80%"} />

          <ProgressBar title={"Office Skills"} width={"60%"} text={"60%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 3rem;
  }
`;

export default Skills;
