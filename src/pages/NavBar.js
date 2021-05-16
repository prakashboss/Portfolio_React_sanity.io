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
    nav {
      display: flex;
      justify-content: space-around;
      width: 75%;
      ${'' /* // className="inline-flex items-center 
      py-6 px-3 mr-4 text-red-600 hover:text-red-300 text-4xl
       font-bold cursive tracking-Widest" */}
      a {
        display: inline-block;
        color: red;
        padding: 6% 3%;
        font-size: 25px;
        margin-left: 3px;
        font-weight: bold;

        @media (max-width: 450px) {
          font-size: 16px;
          padding: 6% 2%;
        }
        &: hover {
        color: #FB9631;
      }
      }
     
      .active {
          color: white;
      }
      
    }
  }
`;



function NavBar() {
  return (
    <NavBarWrapper>
      <div>
        <nav
        // className="flex justify-between bg-black"
        >
          <NavLink
            to="/"
            exact
            
            ClassName="navLink cursive"
            
          >
            Home
          </NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About Me</NavLink>
        </nav>
        <div>
          <SocialIcon
            url="https://github.com/prakashboss"
           
            target="_blank"
            style={{
              height: 45,
              width: 45,
              borderRadius: 60,
              background: "black",
              margin: '5px',
              marginTop: '3vw'
            }}
            fgColor="#fff"
          />
        </div>
      </div>
    </NavBarWrapper>
  );
}

export default NavBar;
