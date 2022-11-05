import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 bg-white/10 rounded-xl lg:w-[90%] mx-auto">
      <h2 className="text-center py-5 font-bold font-Inter text-xl">
        Contact me
      </h2>
      <form className="flex flex-col gap-5 p-5 font-Oxygen">
        <input
          type="text"
          className="rounded-md bg-white/5 p-2 placeholder:text-white/70"
          placeholder="Your name..."
        />
        <textarea
          className="rounded-md bg-white/5 p-2 placeholder:text-white/70"
          placeholder="Your message..."
        />

        <button className="bg-white/10 p-2 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
