import React from "react";
import background from "../asserts/images/MainBackground.jpg";

function Home() {
  return (
    <main className="backgrounImg">
      <img
        src={background}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative px-5  mr-auto ml-auto py-20">
        <h5 className="cursive home-name leading-none lg:leading-snug ">
          Kia Ora, I'm Prakash
        </h5>
        <p>Welcome to my site</p>
      </section>
    </main>
  );
}

export default Home;
