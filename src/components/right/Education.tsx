import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Education({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("education");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="education">
      <h2 className="font-bold text-3xl mb-2">Education</h2>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Codecademy</h3>
        <p className="font-light leading-7 mb-6">
         Taken several courses on Web Development & Front-End 
         Software Engineering.
        </p>

        <div className="mt-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>

     {/* <Card>
        <h3 className="font-bold text-2xl mb-6">Text</h3>
        <p className="font-light leading-7 mb-6">
         //Text
        </p>

        <div className="mt-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            //Website
          </a>
        </div>
  </Card> */}
    </section>
  );
}
