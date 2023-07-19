import Card from "../../utilities/Card";

export default function Contact() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contact</h3>
      <p className="font-light leading-7 mb-6">
        The best way to contact me is through email or LinkedIn (I&apos;m not
        much of a twitter guy). Give me a shout here:
      </p>
      <p className="font-light leading-7">
        Email:{" "}
        <a
          href="mailto:awatkis00@icloud.com"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          awatkis00@icloud.com
        </a>
      </p>
      <p className="font-light leading-7">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/anthony-watkis-424707225"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          @Anthony Watkis
        </a>
      </p>
    </Card>
  );
}
