function Component({ href, name }) {
  return (
    <a
      className="text-white border-b-2 border-b-green-300 pb-2.5 hover:text-green-300"
      href={href}
    >
      {name}
    </a>
  );
}

export default Component;
