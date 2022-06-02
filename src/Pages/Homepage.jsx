import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MainContent from "../Components/MainContent";
import TypewriterEffect from "react-typewriter-effect";

const Homepage = () => {
  return (
    <>
      <HomepageStyled>
        <div className="typography">
          <div className="title">
            <h1> Hi, I'm</h1>
            <TypewriterEffect
              startDelay={1000}
              multiText={["Duy Tran", "Developer"]}
              multiTextDelay={1500}
              typeSpeed={100}
              multiTextLoop
              cursorColor="#007bff"
              textStyle={{
                color: "#007bff",
              }}
            />
          </div>

          <p> I'm a Front-end Developer </p>

          <div className="icons">
            <a
              href="https://www.facebook.com/itduytd/"
              className="icon i-facebook"
            >
              <FacebookIcon />
            </a>
            <a href="https://github.com/duytran0209" className="icon i-github">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/itduytd/"
              className="icon i-linkedin"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <MainContent />
      </HomepageStyled>
    </>
  );
};

const HomepageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .title {
      display: flex;
      margin-left: 17rem;
      gap: 0 2rem;
    }

    /* .react-typewriter-text-wrap {
      transform: translateX(-200px);
    } */
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      gap: 0 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.4s all ease-in;
        svg {
          margin: 0.5rem;
        }
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default Homepage;
