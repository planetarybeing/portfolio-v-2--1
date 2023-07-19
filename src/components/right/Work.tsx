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
        <h3 className="font-bold text-2xl">Full Stack Software Developer</h3>
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
          • Full-Time • Jan 2021 - Now
        </p>
        <p className="font-light mb-4 text-white/80">Orlando, Florida</p>
        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
          Here&apos;s a paragraph describing what I did at the company from a
          high level. I should state my role, the team that I was on, and what
          we built while I was there.
        </p>
        <p className="font-light leading-7">
          Here&apos;s a second paragraph which goes into further detail. It
          should try to use hard numbers. Some examples would be &quot;improved
          conversion rate of landing pages by 23%&quot; or &quot;improved API
          throughput by 3X&quot;.
        </p>
      </Card>

     

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Unrelated experience</h3>

        {/* INFO */}
        <p className="font-light text-white/80">
          Various Companies • Full-Time • Aug 2015 - Nov 2018
        </p>
        <p className="font-light mb-4 text-white/80">Various Locations</p>

        {/* CONTENT */}
        <p className="font-light leading-7">
          If you&apos;ve got unrelated experience, you can separate them out as
          you wish. I tend to lump my less relevant experience into one place
          like this. I worked in construction before I became a developer, so I
          might say something like &quot;lead teams of welders and fitters to
          build projects on a tight deadline&quot;. You get the idea {":)"}
        </p>
      </Card>
    </section>
  );
} 
