function Component() {
  return (
    <header className="flex gap-5 flex-col items-center p-2.5 pt-5 w-full">
      <h1 className="text-white text-2xl">adamkeyes</h1>
      <ul className="flex justify-between w-full">
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
    </header>
  );
}

export default Component;
