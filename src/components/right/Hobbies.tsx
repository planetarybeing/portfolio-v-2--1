import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";
import build from "next/dist/build";

export default function Hobbies({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      setSection("hobbies");
    }
  }, [inView, setSection]);

  return (
    <Card>
      {[
        <section ref={ref} className="mb-16" id="hobbies" key="hobbies-section">
          <h2 className="font-bold text-3xl mb-2">Hobbies</h2>
          <p className="font-light leading-7 mb-4">
            One of my favorite hobbies is motorcycling. Learning how to ride a
            motorcycle for the first time & having to pass the road test in just
            two days was one of the most difficult things I&apos;ve ever done. I
            was amazed that I was able to push through & not give up. My reward:
            the ability to see the world like I&apos;ve never seen it before and
            all of the friends I&apos;ve made. I look at programming & design
            through a similar lens: the need to explore and overcome challenges.
          </p>
          <p className="font-light leading-7 mb-2">
            Here&apos;s some of my other interests and passions:
          </p>
          <ul className="mb-4 grid grid-cols-2 gap-x-2">
            <li className="font-light leading-7">• Indoor Plants</li>
            <li className="font-light leading-7">• Video Games</li>
            <li className="font-light leading-7">• Videography</li>
            <li className="font-light leading-7">• Reading</li>
            <li className="font-light leading-7">• Photography</li>
            <li className="font-light leading-7">• Bicycling</li>
            <li className="font-light leading-7">• Building Custom Gaming PCs</li>
            <li className="font-light leading-7">• Fashion</li>
            <li className="font-light leading-7">• UI / UX Design</li>
            <li className="font-light leading-7">• Anime / Manga</li>
            <li className="font-light leading-7">• People Watching</li>
          </ul>
        </section>,
      ]}
    </Card>
  );
}