import Link from "next/link";
import Links from "./Links";

export default function Hero({ section }: { section: string }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        Hey, I&apos;m
        <br />
        Anthony<span className="text-brand">!</span>
      </h1>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/planetarybeing", "_blank");
            }}
            src="/github.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://www.linkedin.com/", "_blank");
            }}
            src="/linkedin.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://www.threads.net/@tone.dev", "_blank");
            }}
            src="twitter.svg"
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:youremail@gmail.com");
            }}
            src="/google.svg"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <p className="font-light leading-7">
        I&apos;m a software engineer based in Brooklyn, NY.
        I have an eye for style, fashion, design, photo / videography. 
        In addition to 
      </p>
      <Links section={section} />
    </div>
  );
}
