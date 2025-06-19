function Component() {
  return (
    <div className="m-4 mt-10">
      <img
        className="ml-auto mr-auto w-64 mb-10"
        src="./src/assets/the-guy.png"
        alt="the guy"
      />
      <div className="flex flex-col gap-6 items-center">
        <p className="text-5xl text-white text-center mb-6">
          Nice to meet you! I’m{" "}
          <span className="underline decoration-green-300 decoration-4">
            Adam Keyes
          </span>
          .
        </p>
        <p className="text-white text-center">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#" className="text-white border-b-2 border-b-green-300">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default Component;
