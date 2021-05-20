import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function ContactMe() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return (
      <div className="productsPage min-h-screen  z-5">
        <p className="text-5xl flex  z-5 mx-5 text-gray-600 justify-center cursive  z-5">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <main className=" min-h-screen aboutMe">
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section style={{opacity: 0.8}} className="bg-gray-400 rounded-lg shadow-2xl lg:flex flex-row-reverse p-2">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="me"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-lx md:text-4xl text-black mb-4">
              My email: 
              <span className="text-black"> {author.name}</span>
            </h1>
            <p className="text-black text-lg"><strong>Personal Statement:{"  "}</strong>{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
