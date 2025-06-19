function Component() {
  return (
    <div className="flex gap-5 flex-col items-center p-2.5 pt-5 w-fit ml-auto mr-auto">
      <h1 className="text-white text-2xl">adamkeyes</h1>
      <ul className="flex gap-8 w-full">
        <li>
          <img src="./src/assets/github.svg" alt="github" />
        </li>
        <li>
          <img src="./src/assets/frontendmentor.svg" alt="frontendmentor" />
        </li>
        <li>
          <img src="./src/assets/linkedin.svg" alt="linkedin" />
        </li>
        <li>
          <img src="./src/assets/twitter.svg" alt="twitter" />
        </li>
      </ul>
    </div>
  );
}

export default Component;
