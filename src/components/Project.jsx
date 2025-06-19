import Link from "./Link";

function Component({ imgSrc, imgAlt, title, skills, link, codeLink }) {
  return (
    <div className="flex flex-col gap-5">
      <img src={imgSrc} alt={imgAlt} className="w-full" />
      <div className="flex flex-col gap-1.5">
        <p className="text-white text-2xl">{title}</p>
        <div className="flex gap-4">
          {skills.map((skill) => (
            <span className="text-neutral-300">{skill}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-8">
        <Link href={link} name="VIEW PROJECT" />
        <Link href={codeLink} name="VIEW CODE" />
      </div>
    </div>
  );
}

export default Component;
