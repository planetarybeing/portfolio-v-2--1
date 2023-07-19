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
        {renderTags([
          "React (Next JS)",
          "Typescript",
          "Node",
          "GCP",
          "Supabase",
          "Serverless",
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
        <p className="font-light leading-7 mb-6">Spotify Clone</p>
        {renderTags(["React", "NextJS", "Tailwind", "Supabase", "PostgreSQL", "Stripe" ])}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setVidTwo((pv) => !pv)}
            className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white"
          >
            Visit Website
          </button>
        </div>
      </Card>
    </section>
  );
}
