import reactIcon from "/icons/react.svg";
import jsIcon from "/icons/js.svg";
import cssIcon from "/icons/css.svg";
import htmlIcon from "/icons/html.svg";
import nodeIcon from "/icons/nodejs.svg";
import twIcon from "/icons/tailwind.svg";

const About = () => {
  const technologies = [
    {
      name: "React",
      icon: reactIcon,
      link: "https://reactjs.org/",
    },
    {
      name: "JavaScript",
      icon: jsIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "CSS",
      icon: cssIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "HTML",
      icon: htmlIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "Node.js",
      icon: nodeIcon,
      link: "https://nodejs.org/en/",
    },
    {
      name: "Tailwind CSS",
      icon: twIcon,
      link: "https://tailwindcss.com/",
    },
  ];

  return (
    <div className="mt-10 flex flex-col gap-5">
      <h2 className="font-extrabold text-xl lg:text-2xl font-Inter bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
        About me
      </h2>

      <div>
        <p className="text-justify leading-6 font-Oxygen">
          I'm a Frontend developer passionate about new technologies. I am
          currently studying Computer Engineering but web development completely
          captured my attention. That's why I dedicate myself to learn
          everything I can about these technologies. I like to work in a group
          and learn from it. I like challenges and new experiences.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-extrabold text-xl lg:text-2xl  font-Inter bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
          Technologies
        </h2>

        <div className="flex justify-around gap-2 mt-5">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex flex-col items-center cursor-pointer hover:transform hover:scale-125 transition-transform duration-200"
            >
              <a
                href={technology.link}
                target="_blank"
                rel="noreferrer"
                className="text-center text-sm font-Oxygen"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 lg:w-16 lg:h-16 h-12 transition-all"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
