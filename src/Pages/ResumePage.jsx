import React from "react";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";

const ResumePage = () => {
  return (
    <MainLayout padding={"padding-left:20rem"}>
      <Skills />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
