import githubIcon from "/icons/github.svg";
import linkIcon from "/icons/link.svg";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce NextJS",
      description: "Ecommerce made with NextJS and Chakra UI",
      image: "projects/ecommerce.png",
      github: "https://github.com/xhungen/ecommerce-nextjs",
      link: "https://ecommerce-nextjs-xhungen.vercel.app/",
    },
    {
      title: "Taxes Calculator",
      description:
        "Taxes Calculator for Argentina purchases with Credit Card made with React & Chakra UI",
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
          <div className="bg-white/10 w-[350px] rounded-xl relative mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="h-[320px] w-full object-cover rounded-t-xl"
            />

            <div className="p-5">
              <p className="font-bold font-Inter">{project.title}</p>
              <p className="font-Oxygen text-sm">{project.description}</p>
            </div>

            <div className="p-5 flex gap-5 items-center">
              <a href={project.github} target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>

              <a href={project.link} target="_blank">
                <img src={linkIcon} alt="link icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
