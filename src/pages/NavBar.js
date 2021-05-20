import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

const NavBarWrapper = styled.header`
  background-color: black;
  width: 100%;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    nav {
      display: flex;
      justify-content: space-around;
      width: 75%;
      a {
        display: inline-block;
        color: red;
        padding: 6% 3%;
        font-size: 25px;
        margin-left: 3px;
        font-weight: bold;

        @media (max-width: 565px) {
          font-size: 18px;
          padding: 6% 2%;
        }
        @media (max-width: 390px) {
          font-size: 15px;
          padding: 2% 2%;
        }
        @media (max-width: 350px) {
          font-size: 12px;
          padding: 2% 2%;
        }
        &: hover {
          color: #fb9631;
        }
      }

      .active {
        color: #cbd5e0;
      }
    }
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <div>
        <nav>
          <NavLink to="/" exact className="cursive">
            Home
          </NavLink>
          <NavLink className="cursive" to="/projects">
            Projects
          </NavLink>
          <NavLink className="cursive" to="/experience">
            Experience
          </NavLink>
          <NavLink className="cursive" to="/contact">
            Contact Me
          </NavLink>
        </nav>
        <div>
          <SocialIcon
            url="https://github.com/prakashboss"
            target="_blank"
            style={{
              height: "7vw",
              width: "7vw",
              minHeight: 40,
              minWidth: 40,
              borderRadius: 60,
              background: "black",
              margin: "5px",
            }}
            fgColor="#fff"
          />
        </div>
      </div>
    </NavBarWrapper>
  );
}

export default NavBar;
