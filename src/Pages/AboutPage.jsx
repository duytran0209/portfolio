import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import ReviewSection from "../Components/ReviewSection";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About me"} span={"About me"}></Title>
        <ImageSection />
        <ServicesSection />
        <ReviewSection />
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.section`
  padding-left: 17.4rem;
`;
export default AboutPage;
