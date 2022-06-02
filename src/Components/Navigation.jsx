import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../img/AvatarCV.jpeg";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link to="/resume">Resume</Link>
        </li>

        <li className="nav-item">
          <Link to="/portfolios">Portfolios</Link>
        </li>

        <li className="nav-item">
          <Link to="/blogs">Blogs</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <footer className="footer">
        <p>@2022 My Portfolio Website</p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    img {
      border-radius: 100rem;
      border: 8px solid var(--border-color);
      display: block;
      margin: auto;
      object-fit: cover;
      width: 60%;
      height: 60%;
      transform: translateY(3rem);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      a {
        display: block;
        padding: 0.4rem 0;
        position: relative;
        font-weight: 700;
        font-size: 1.2rem;
        /* line-height: 2; */
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0px;
          height: 50%;
          width: 0;
          background-color: var(--primary-color);
          z-index: -10;
          transition: all 0.4s linear;
          opacity: 0.21;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
