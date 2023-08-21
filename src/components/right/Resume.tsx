{/* import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Resume({
    setSection,
  }: {
    setSection: Dispatch<SetStateAction<string>>;
  }) {
    const [ref, inView] = useInView({});
  
    useEffect(() => {
      inView && setSection("resume");
    }, [inView, setSection]);
  
    return (
      <Card>
        {[
          <section key="resume" ref={ref} className="mb-16" id="resume">
            <h2 className="font-bold text-3xl mb-2">Resume / CV</h2>
  
            {/* <h3 className="font-bold text-2xl mb-6">Having a multitude of passions is important</h3> */}
            /* <p className="font-light leading-7 mb-4">Please check out my CV!</p>
            
        </section>,
        ]}
      </Card>{/* 
    );
  }*/