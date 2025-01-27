import { Dispatch, SetStateAction } from "react";
import Education from "./Education";
import Projects from "./Projects";
import Misc from "./misc/Misc";
import Work from "./Work";
import Hobbies from "./Hobbies";

export default function Right({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="grid-span-1">
      <Projects setSection={setSection} />
      {/*<Work setSection={setSection} />
      <Education setSection={setSection} />*/}
      <Hobbies setSection={setSection} />
      <Misc setSection={setSection} />
    </div>
  );
}
