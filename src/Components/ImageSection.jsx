import React from "react";
import styled from "styled-components";
import resume from "../img/avatarCV.jpg";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div
        className="left-content"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img src={resume} alt="" />
      </div>

      <div
        className="right-content"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h4>
          I am <span>Front-end Developer </span>
        </h4>

        <div className="paragraph">
          If you're already a front-end developer, well, pretend you're also
          wearing a pirate hat.
        </div>

        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>

          <div className="info">
            <p>: Tran Duc Duy </p>

            <p> : 22</p>
            <p>: Viet Nam</p>
            <p> : English, Vietnamese</p>
            <p>: Ho Chi Minh City</p>
            <p>: Developer</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"}></PrimaryButton>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  gap: 0 3rem;
  .left-content {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      transform: scaleY(1.2);
      object-fit: cover;
    }
  }

  .right-content {
    h4 {
      font-size: 1.8rem;
      color: var(--white-color);
      span {
        font-size: 1.8rem;
      }
    }

    .paragraph {
      padding: 1rem 0;
    }

    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }

      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
