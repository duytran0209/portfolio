import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

const Resume = () => {
  const birefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title ">
          <SmallTitle icon={birefcase} title={"Educational Qualifications"} />
        </div>

        <div
          className="resume-content"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <ResumeItem
            year={"2019-"}
            title={"E-commerce"}
            subTitle={"University of Economics and Law"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero."
            }
          ></ResumeItem>

          <ResumeItem
            year={"9-2021"}
            title={"HTML5, CSS3 web programming course jQuery, Bootstrap"}
            subTitle={"University of Sciences Informatics Center"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero."
            }
          ></ResumeItem>

          <ResumeItem
            year={"4-2022"}
            title={"React JS Developer Course"}
            subTitle={"ZendVN Training Center for Programmers"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero."
            }
          ></ResumeItem>
        </div>

        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Working Experience"} />
        </div>
        <div
          className="resume-content "
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <ResumeItem
            year={"2022"}
            title={"Project The movies search app"}
            subTitle={"ZendVN Center Directions"}
            text={
              " Languages employed: HTML, CSS (tailwind), Javascript, ReactJS. As a result, make a simple movie watching website. Demo: https://moviesearchapp0209.netlify.app/. Github: https://github.com/duytran0209/movieapp"
            }
          ></ResumeItem>

          <ResumeItem
            year={"2022"}
            title={"Project My Porfolio"}
            subTitle={"Self-improvement"}
            text={
              "Languages employed: HTML, CSS (stlyed components), Javascript, ReactJS. As a result, make a website for job applications. Demo: https://portfoliotranduy0209.netlify.app/ . Github: https://github.com/duytran0209/portfolio "
            }
          ></ResumeItem>

          <ResumeItem
            year={"2022"}
            title={"Project Coffee Style"}
            subTitle={"Self-improvement"}
            text={
              " Languages employed: HTML, CSS (tailwind), Responsive, and ReactJS. As a result, complete a landing page coffee sale page. Demo: https://coffeestyle0209.netlify.app/. Github: https://github.com/duytran0209/coffeestyle"
            }
          ></ResumeItem>
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 2rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
`;

export default Resume;
