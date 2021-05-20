import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from "react-social-icons";

const builder = imageUrlBuilder(sanityClient);
function urlFor(soruce) {
  return builder.image(soruce);
}

function SingleProject() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      github,
      live,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author-name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) {
    return (
      <div className="productsPage min-h-screen  z-5">
        <p className="text-5xl flex  z-5 mx-5 text-gray-600 justify-center cursive  z-5">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <main className="productsPage min-h-screen  p-5 z-5">
      <article className="conainer shadow-lg mx-auto  my-5 rounded-lg">
        <header className="relative">
          <div className="flex justify-center items-center bg-opacity-75 rounded py-12">
            <h1 className="cursive text-gray-400 text-3xl lg:text-6xl mb1">
              {singlePost.title}
            </h1>
            {singlePost.github && (
              <SocialIcon
                url={singlePost.github}
                target="_blank"
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 60,
                  background: "black",
                  marginLeft: "25px",
                }}
                fgColor="#fff"
              />
            )}
          </div>
          <a
            href={singlePost.live}
            rel="noopener noreferrer"
            target="_blank"
            className="text-red-500 cursor-pointer font-bold hover:underline hover:text-red-400"
          >
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="mx-auto mb-8 object-center"
              style={{ width: "80%" }}
            />
          </a>
        </header>
        <div className="px-10 lg:px-10 mx-auto w-full bg-gray-400 text-black py-2 lg:py-2 prose lg:prose-xl">
          <BlockContent
            blocks={singlePost.body}
            projectId="n0vo1je1"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export default SingleProject;
