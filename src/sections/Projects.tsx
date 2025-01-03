import portfolioImage from "@/assets/images/portfolio.png";
import TheHyruleCastle from "@/assets/images/TheHyruleCastle.png";
import MarioKart from "@/assets/images/Mariokart.png";
import Image from "next/image";
import CheckcircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "ETNA",
    year: "November 2024",
    title: "Portfolio Website",
    results: [
      { title: "Build portfolio with React" },
      { title: "Tailwind's utility-first approach" },
      { title: "Framer Motion & CSS Animations" },
    ],
    link: "https://github.com/SSana24/Portfolio",
    image: portfolioImage,
  },
  {
    company: "ETNA",
    year: "October 2024",
    title: "The Hyrule Castle",
    results: [
      { title: "Build an RPG game using TypeScript" },
      { title: "Adding different game mods and diffuculties" },
      { title: "Deploy the game as Docker image" },
    ],
    link: "https://github.com/SSana24/Hyrule_Castle",
    image: TheHyruleCastle,
  },
  {
    company: "ETNA",
    year: "October 2024",
    title: "Mario Kart",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/SSana24/Mario_Kart",
    image: MarioKart,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24 flex justify-center items-center">
    <div className="container">
      <div className="flex justify-center">
      <p className="uppercase font-semi-bold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
        Real world results
        </p>
        </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Academic Projects</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto"> Since October, I have started my studies as a web developer.
         You can find here some of my academic projects that I have been working on during this period.
         </p>
         <div className="mt-10  md:mt-20 flex flex-col gap-20">
      {portfolioProjects.map((project) => (
        <Card key={project.title} 
        className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
          
           <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
            <span>{project.company}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>
  
            <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li className="flex gap-2 text-sm md:text-base text-white/50"> 
                  <CheckcircleIcon className="size-5 md:size-6"/>
                  <span>{result.title}</span>
                  </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>View Project</span>
                < ArrowUpRightIcon className="size-4"/>
                </button>
            </a>
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" /> 
            </div>
            </div>
            </Card>
          
            ))}
         </div>
    </div>
  </section>
  );
};
