import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";
import { useState } from "react";
import React from 'react';

export default function Projects({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  const [vidOne, setVidOne] = useState(false);
  const [vidTwo, setVidTwo] = useState(false);
  const [vidThree, setVidThree] = useState(false);

  useEffect(() => {
    inView && setSection("projects");
  }, [inView, setSection]);

  const renderTags = (tech: string[]) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span
              className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">First Project</h3>
        </div>
        <p className="font-light leading-7 mb-6">Portfolio Website Version 1</p>
       <ul>
       <li className="font-light leading-7 mb-4">• Currently adding Particles for a dynamic background.</li>
       <li className="font-light leading-7 mb-4">• This project is a dynamic and visually captivating web application built with Next.js</li>
       <li className="font-light leading-7 mb-4">• Key animations are achieved using two powerful libraries: anime.js, a JavaScript animation library that brings the grid animation in DotGrid.tsx to life, and framer-motion, a React-centric animation library used extensively for enhancing user interactions across various components</li>
       <li className="font-light leading-7 mb-4">• Web app is highly responsive deployed via Vercel</li>
       </ul>
        {renderTags([
          "React (Next.JS)",
          "Typescript",
          "Node.JS",
          "Anime.JS",
          "Vercel",
          "TS Particles",
        ])}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setVidOne((pv) => !pv)}
            className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white"
          >
            <a href="https://portfolio-v-1-1-ipbnya3fb-planetarybeing.vercel.app/#about" target="_blank">Visit  Website</a>
          </button>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Second Project</h3>
        <p className="font-light leading-7 mb-6">Spotify Clone </p>
        <ul>
          <li className="font-light leading-7 mb-4">• Currently adding a card carousel that displays user accolades representing activity every quarter of the year. </li>
          <li className="font-light leading-7 mb-4">• Payment Integration: Seamlessly integrated Stripe API for secure payment processing, enabling smooth subscription handling.</li>
          <li className="font-light leading-7 mb-4">• Backend Management: Utilized Supabase and PostgreSQL for efficient database management, ensuring seamless data handling.</li>
          <li className="font-light leading-7 mb-4">• Sleek UI: Crafted a modern and stylish user interface using Tailwind CSS, complete with animations and transitions.</li>
          <li className="font-light leading-7 mb-4">• Authentication: Implemented secure user authentication through credentials and GitHub via Supabase.</li>
          <li className="font-light leading-7 mb-6">• API Routes: Developed essential API routes (POST, GET, DELETE) for seamless client-server communication.</li>
        </ul>
        {renderTags(["React", "Next.JS", "Tailwind CSS", "Supabase", "Typescript", "PostgreSQL", "Stripe API" ])}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setVidTwo((pv) => !pv)}
            className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white"
          >
            <a href="https://spotify-app-clone-2.vercel.app/" target="_blank">Visit  Website</a>
          </button>
        </div>
      </Card>
    </section>
  );
}
