import Project from "./Project";
import Link from "./Link";

const projects = [
  {
    imgSrc: "./src/assets/Bitmap.png",
    imgAlt: "zrgferg",
    title: "DESIGN PORTFOLIO",
    skills: ["HTML", "CSS"],
    link: "#",
    codeLink: "#",
  },
  {
    imgSrc: "./src/assets/Bitmap.png",
    imgAlt: "zrgferg",
    title: "E-LEARNING LANDING PAGE",
    skills: ["HTML", "CSS"],
    link: "#",
    codeLink: "#",
  },
  {
    imgSrc: "./src/assets/Bitmap.png",
    imgAlt: "zrgferg",
    title: "TODO WEB APP",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    link: "#",
    codeLink: "#",
  },
  {
    imgSrc: "./src/assets/Bitmap.png",
    imgAlt: "zrgferg",
    title: "ENTERTAINEMENT WEB APP",
    skills: ["HTML", "CSS"],
    link: "#",
    codeLink: "#",
  },
];

function Component() {
  return (
    <div className="flex flex-col gap-10 ml-4 mr-4 mt-20">
      <div className="flex justify-between">
        <p className="text-4xl text-white">Projects</p>
        <Link href="#" name="CONTACT ME" />
      </div>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <Project
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            title={project.title}
            skills={project.skills}
            link={project.link}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Component;
