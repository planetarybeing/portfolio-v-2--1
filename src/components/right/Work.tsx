import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

 export default function Work({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("work");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2">Work</h2>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Job title</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Company Name
          </a>{" "}
          
        </p>
        <p className="font-light mb-4 text-white/80">Orlando, Florida</p>
        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
        
        </p>
        <p className="font-light leading-7">
       
        </p>
      </Card>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Text unrealted experience</h3>

        {/* INFO */}
        <p className="font-light text-white/80">
          Various Companies • Full-Time • Timeline of work
        </p>
        <p className="font-light mb-4 text-white/80">Text</p>

        {/* CONTENT */}
        <p className="font-light leading-7">
         {":)"}
        </p>
      </Card>
    </section>
  );
} 
