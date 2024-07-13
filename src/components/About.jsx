import { LANG } from "../utils/langConstants";

const About = ({ lang }) => {
  const data = LANG[lang];
  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p>{data.desc}</p>
      <h2 className="text-2xl font-bold mt-4">{data.title2}</h2>
      <p>{data.desc2}</p>
      <h3 className="text-2xl font-bold mt-4">{data.title3}</h3>
      <p>{data.desc3}</p>
    </div>
  );
};

export default About;
