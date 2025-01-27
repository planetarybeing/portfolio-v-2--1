import Card from "../../utilities/Card";

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Tech I Love</h3>
      <p className="font-light leading-7 mb-2">
        My choice tech stack for personal projects is GENERALLY (but not
        always):
      </p>
      <ul className="mb-4 grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• Figma</li>
        <li className="font-light leading-7">• React</li>
        <li className="font-light leading-7">• JavaScript</li>
        <li className="font-light leading-7">• TypeScript</li>
        <li className="font-light leading-7">• Node.js</li>
        <li className="font-light leading-7">• Express.js</li>
        <li className="font-light leading-7">• PostgreSQL</li>
        <li className="font-light leading-7">• Supabase</li>
        <li className="font-light leading-7">• A.I. Tools</li>
        <li className="font-light leading-7">• Netlify</li>
        <li className="font-light leading-7">• Vercel</li>
        <li className="font-light leading-7">• React Native</li>
        <li className="font-light leading-7">• Framer Motion</li>
      </ul>
    </Card>
  );
}
