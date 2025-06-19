function Component({ skill, experience }) {
  return (
    <div>
      <p className="text-3xl text-white text-center">{skill}</p>
      <p className="text-neutral-300 text-center">{experience} Experience</p>
    </div>
  );
}

export default Component;
