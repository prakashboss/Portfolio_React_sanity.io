import React, { useState, useEffect } from "react";
import sanityClient from "../client";

function Experience() {
  const [projectData, setProjectData] = useState(null);
  const [EducationData, setEducationData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          organisation,
          start,
          end,
          place,
          description,
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "education"]{
          title,
          organisation,
          start,
          end,
          place,
          description,
        }`
      )
      .then((data) => setEducationData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="experiencePage">
      <section className="container p-10 min-h-screen  z-5">
        <h1 className="text-5xl flex  z-5 mx-5 text-gray-600 justify-center cursive  z-5">
          My Experience and Education
        </h1>

        <h2 className="text-3xl text-gray-600  z-5 flex mx-5 justify-start mt-10">
          My Experience
        </h2>
        <section className="grid py-8 mx-auto grid-cols-1 sm:grid-cols-2 gap-5">
          {projectData &&
            projectData.map((project, index) => (
              <article
                style={{ opacity: 0.7 }}
                key={index}
                className="relative rounded-lg shadow-xl bg-gray-400 p-2"
              >
                <h3 className="text-red-800 text-3xl font-bold mb-2 hover:text-red-700">
                 {project.title}
                </h3>
                <div className="text-gray-500">
                  <div className="text-black">
                    <strong className="text-black font-bold">
                      Organisation:{" "}
                    </strong>
                    {project.organisation}
                  </div>

                  <div className="text-black">
                    <strong className="text-black font-bold">Location: </strong>
                    {project.place}
                  </div>

                  <div className="text-black">
                    <strong className="text-black font-bold">
                      {project.start} - {project.end}
                    </strong>
                  </div>
                  <p className="text=lg text-gray-700 leading-relaxed">
                    <strong className="text-black font-bold">
                      Description:{" "}
                    </strong>
                    {project.description}
                  </p>
                  {/* <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:pointer hover:text-red-400"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      
                    </span>
                  </a> */}
                </div>
              </article>
            ))}
        </section>
        <h2 className="text-3xl text-gray-600  z-5 flex mx-5 justify-start mt-10">
          My Qualifications
        </h2>
        <section className="grid py-8 mx-auto grid-cols-1 sm:grid-cols-2 gap-5">
          {EducationData &&
            EducationData.map((project, index) => (
              <article
                key={index}
                style={{ opacity: 0.7 }}
                className="relative rounded-lg shadow-xl  bg-gray-400 p-2"
              >
                <h3 className="text-red-800 text-3xl font-bold mb-2 hover:text-red-700">
                  {project.title}
                </h3>
                <div className="text-gray-500">
                  <div className="text-black">
                    <strong className="text-black font-bold">
                      Institute:{" "}
                    </strong>
                    {project.organisation}
                  </div>

                  <div className="text-black">
                    <strong className="text-black font-bold">Location: </strong>
                    {project.place}
                  </div>

                  <div className="text-black">
                    <strong className="text-black font-bold">
                      {project.start} - {project.end}
                    </strong>
                  </div>
                  <p className="text=lg text-gray-700 leading-relaxed">
                    <strong className="text-black font-bold">
                      Description:{" "}
                    </strong>
                    {project.description}
                  </p>
                  {/* <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:pointer hover:text-red-400"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      
                    </span>
                  </a> */}
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Experience;
