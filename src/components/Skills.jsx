import Skill from "./Skill";

const skills = [
  { skill: "HTML", experience: "4 Years" },
  { skill: "CSS", experience: "4 Years" },
  { skill: "JavaScript", experience: "4 Years" },
  { skill: "Accessibility", experience: "4 Years" },
  { skill: "React", experience: "4 Years" },
  { skill: "Sass", experience: "4 Years" },
];

function Component() {
  return (
    <div className="border-t border-b border-white ml-4 mr-4 p-10 flex flex-col gap-6">
      {skills.map((skill) => (
        <Skill skill={skill.skill} experience={skill.experience} />
      ))}
    </div>
  );
}

export default Component;
