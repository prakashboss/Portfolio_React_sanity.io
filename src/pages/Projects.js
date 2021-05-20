import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

function Projects() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          github,
          live,
          mainImage{
            asset->{
              _id,
              url
            },
          alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="productsPage min-h-screen p-10">
      <section className="container mx-auto py-8">
        <h1 className="text-5xl text-gray-400 flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to blog Posts page
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link to={"/project/" + post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-r-8 border-gray-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-contain absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-400 text-lg font-blog px-3 py-4 bg-red-700 bg-opacity-60 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
