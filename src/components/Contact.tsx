import { useState } from "react";

const Contact = () => {
  const [mail, setMail] = useState({
    name: "",
    mesagge: "",
  });

  const [error, setError] = useState(false);

  const handleSendMail = (e) => {
    e.preventDefault();
    if (mail.name === "" || mail.mesagge === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    window.location.href = `mailto:allanlautarodelgado@gmail.com?subject=Portfolio%20-%20${mail.name}&body=${mail.mesagge}`;

    setMail({
      name: "",
      mesagge: "",
    });
  };

  return (
    <div className="mt-10 bg-white/10 rounded-xl lg:w-[100%] mx-auto">
      <h2 className="text-center py-5 font-bold font-Inter text-xl">
        Contact me
      </h2>
      <form
        onSubmit={handleSendMail}
        className="flex flex-col gap-5 p-5 font-Oxygen"
      >
        <input
          type="text"
          className="rounded-md bg-white/5 p-2 placeholder:text-white/70 font-Oxygen"
          placeholder="Your name..."
          value={mail.name}
          onChange={(e) => {
            setMail({
              ...mail,
              name: e.target.value,
            });
          }}
        />
        {error && mail.name === "" && (
          <p className="bg-red-400/80 rounded-xl p-1">
            Please enter your name.
          </p>
        )}
        <textarea
          className="rounded-md bg-white/5 p-2 lg:h-[220px] placeholder:text-white/70"
          placeholder="Your message..."
          value={mail.mesagge}
          onChange={(e) => {
            setMail({
              ...mail,
              mesagge: e.target.value,
            });
          }}
        />
        {error && mail.mesagge === "" && (
          <p className="bg-red-400/80 rounded-xl p-1">
            Please enter your mesagge.
          </p>
        )}

        <button
          type="submit"
          className="bg-white/10 w-[100%] font-Inter hover:bg-white/5 p-2 rounded-xl md:w-[40%] mx-auto transition-colors duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
