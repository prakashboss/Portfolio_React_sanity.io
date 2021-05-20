import React from "react";
import background from "../asserts/images/MainBackground.jpg";
import styled from 'styled-components'

const HomeContentWrapper = styled.section`
  h5{
    margin-right: auto;
    width: 90%;
    margin-left: auto;
    color: #CBD5E0;
  }
  p{
    font-size: 40px;
  color: #F8C986;
  margin-right: auto;
    width: 80%;
    margin-left: auto;
    font-family: 'Newsreader', serif;
    font-weight: 700;
  }
`


function Home() {
  return (
    <main className="homePage">
      <img
        src={background}
        alt="red planet"
        className="absolute object-cover w-full h-full"
      />
      <HomeContentWrapper className="relative px-5  mr-auto ml-auto py-20">
        <h5 className="cursive home-name text-gray-400 mt-20">
          Kia Ora, I'm Prakash
        </h5>
        <p>Web Developer</p>
      </HomeContentWrapper>
    </main>
  );
}

export default Home;
