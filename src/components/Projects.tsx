import githubIcon from "/icons/github.svg";
import linkIcon from "/icons/link.svg";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce NextJS",
      description:
        "E-commerce developed with Next.js and Chakra UI with basic and scalable features.",
      image: "projects/ecommerce.png",
      github: "https://github.com/xhungen/ecommerce-nextjs",
      link: "https://ecommerce-nextjs-xhungen.vercel.app/",
    },
    {
      title: "Tax Calculator",
      description:
        "Tax calculator for purchases made in dollars with credit cards for citizens of Argentina.",
      image: "projects/calculadora.png",
      github: "https://github.com/xhungen/calculadora-impuestos",
      link: "https://calculadora-impuestos.vercel.app/",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="font-extrabold text-xl  font-Inter text-center bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text lg:text-2xl">
        Projects
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2 ">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/10 w-[100%] h-[520px] rounded-xl relative mx-auto hover:scale-105 transition-transform duration-200"
          >
            <div
              className="w-[100%] h-[60%] rounded-t-xl"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="p-5 h-[40%]">
              <p className="font-Inter font-extrabold text-lg">
                {project.title}
              </p>
              <p className="font-Oxygen">{project.description}</p>
              <div className="flex mt-5 gap-5">
                <a href={project.github} target="_blank">
                  <img src={githubIcon} alt="githubIcon" />
                </a>
                <a href={project.link} target="_blank">
                  <img src={linkIcon} alt="linkIcon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
