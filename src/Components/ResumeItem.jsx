import React from "react";
import styled from "styled-components";

const ResumeItem = ({ year, title, subTitle, text, text1, text2, text3 }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    </ResumeItemStyled>
  );
};

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }

  .left-content {
    padding-left: 1.5rem;
    width: 50%;
    position: relative;
    p {
      display: inline-block;
    }
    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: -10px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
  }

  .right-content {
    position: relative;
    padding-left: 5rem;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      width: 3rem;
      height: 2px;
      background-color: var(--border-color);
    }

    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.4rem;
    }
  }
`;
export default ResumeItem;
