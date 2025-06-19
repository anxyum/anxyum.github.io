import Link from "./Link";

function Component() {
  return (
    <div className="m-4 mt-10 md:flex md:flex-row-reverse">
      <img
        className="ml-auto mr-auto w-64 mb-10 md:w-full"
        src="./src/assets/the-guy.png"
        alt="the guy"
      />
      <div className="flex flex-col gap-6 items-center">
        <p className="text-5xl text-white text-center mb-6 md:text-7xl md:text-left ">
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
        <Link href="#" name="CONTACT ME" />
      </div>
    </div>
  );
}

export default Component;
