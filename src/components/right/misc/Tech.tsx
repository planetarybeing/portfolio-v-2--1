import Card from "../../utilities/Card";

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Tech I Love</h3>
      <p className="font-light leading-7 mb-4">
        I normally add a list of the tech that I use to my portfolios. Instead
        to doing one of those weird graphs where you say you&apos;re 73% in
        JavaScript or whatever, try something like this:
      </p>
      <p className="font-light leading-7 mb-2">
        My choice tech stack for personal projects is GENERALLY (but not
        always):
      </p>
      <ul className="mb-4 grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• React (Next JS)</li>
        <li className="font-light leading-7">• Javascript</li>
        <li className="font-light leading-7">• Typescript</li>
        <li className="font-light leading-7">• Node</li>
        <li className="font-light leading-7">• Express</li>
        <li className="font-light leading-7">• Postgres</li>
        <li className="font-light leading-7">• Supabase</li>
        <li className="font-light leading-7">
          • A.I. Tools
        </li>
        <li className="font-light leading-7">• Netlify</li>
        <li className="font-light leading-7">• Vercel</li>
      </ul>
    </Card>
  );
}
