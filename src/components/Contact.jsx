function Component() {
  return (
    <div className="w-full mt-11">
      <p className="text-4xl mb-5 text-white text-center">Contact</p>
      <p className="text-neutral-300 text-center mb-13">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <form className="flex flex-col gap-8">
        <input
          className="text-white border-b border-b-white pl-6 pb-4 outline-none"
          type="text"
          placeholder="NAME"
        />
        <input
          className="text-white border-b border-b-white pl-6 pb-4 outline-none"
          type="email"
          placeholder="EMAIL"
        />
        <textarea
          className="text-white placeholder:text-[#ffffff80] border-b border-b-white pl-6 pb-4 outline-none"
          name="message"
          id="message"
          placeholder="MESSAGE"
        ></textarea>
        <button
          className="text-white border-b-2 border-b-green-300 pb-2.5 ml-auto mr-0"
          type="submit"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default Component;
