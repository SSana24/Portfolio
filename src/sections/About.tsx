import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import StarIcon from '../assets/icons/star.svg';
import JavaScriptIcon from '../assets/icons/square-js.svg';
import TypeScriptIcon from '../assets/icons/typescript.svg';
import HTMLIcon from '../assets/icons/html5.svg';
import CSSIcon from '../assets/icons/css3.svg';
import ReactIcon from '../assets/icons/react.svg';
import NextIcon from '../assets/icons/nextjs.svg'
import GithubIcon from '../assets/icons/github.svg';
import VSCodeIcon from '../assets/icons/vs-code.svg';
import PostgreSQLIcon from '../assets/icons/postgresql.svg';
import NodeIcon from '../assets/icons/node.svg';
import PythonIcon from '../assets/icons/python.svg';
import DockerIcon from '../assets/icons/docker.svg';
import BashIcon from '../assets/icons/bash.svg';

import mapImage from '../assets/images/map.png';
import location from '../assets/images/location.png';
import  Image from 'next/image';
import { CardHeader } from '@/components/cardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';


const toolboxItems = [
  {
    title: "JavaScript",
    iconType:JavaScriptIcon ,
  },

  {
    title: "Typescript",
    iconType:TypeScriptIcon ,
  },
  {
    title: "HTML5",
    iconType:HTMLIcon ,
  },
  {
    title: "CSS3",
    iconType:CSSIcon ,
  },
  {
    title: "React",
    iconType:ReactIcon ,
  },
  {
    title: "Next.js",
    iconType:NextIcon ,
  },
  {
    title: "Github",
    iconType:GithubIcon ,
  },  
  {
    title: "VS Code",
    iconType:VSCodeIcon
  }, 
  {
    title: "PostgreSQL",
    iconType:PostgreSQLIcon ,
  }, 
  {
    title: "Node.js",
    iconType: NodeIcon ,
  }, 

  {
    title: "Python",
    iconType: PythonIcon ,
  }, 
  {
    title: "Docker",
    iconType: DockerIcon ,
  }, 
  {
    title: "bash",
    iconType: BashIcon ,
  }
];
const hobbies = [
  {
    title: "Hiking",
    emoji: "🥾",
    left: "15%",
    top: "20%",
  },

  {
    title: "Cooking",
    emoji: "🥘",
    left: "70%",
    top: "15%",
  },
  {
    title: "Reading",
    emoji:"📚",
    left: "20%",
    top: "70%",
  },
  {
    title: "Gardening",
    emoji: "🌱",
    left: "40%",
    top: "35%",
  },  
    
  {
    title: "Fitness",
    emoji:"🏋️",
    left: "65%",
    top: "60%",
  }, 
];

export const AboutSection = () => {
  return (
    <div className='py-20 lg:py-28 flex justify-center items-center' >
      <div className='container'>
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="I am a web development student with a passion for creating beautiful and functional websites. I am always looking for new challenges and opportunities to learn and grow as a developer."
      />
      <div className="mt-20 flex flex-col gap-8">
        <Card className='h-[320px] p-0'>
          <CardHeader 
          title="My Toolbox" 
          description="Explore the tools and technologies I use to build websites." 
          className='px-6 pt-2'
          />
          <ToolboxItems items={toolboxItems} className='mt-6' />
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <Card className='h-[320px] p-0 flex flex-col md:col-span-3 '>
        <CardHeader 
          title="Beyond the Code" 
          description="Explore my interests and hobbies beyond the digital realm."
          className='px-6 pt-6' 
          />
            <div className="relative flex-1">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="inline-flex items-center gap-2 px-8
               bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-4 absolute"
              style ={{
                left: hobby.left,
                top: hobby.top,
              }}
              >

                <span className="font-serif, text-gray-950 , text-lg">
                  {hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
            </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2" >
          <Image src={mapImage} alt="Map" className="h-full, w-full, object-cover object-left-top" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
          <Image src={location} alt="Location" className="size-20" />
          </div>
        </Card>
        </div>
      </div>
    </div>
    </div>
  );
};
