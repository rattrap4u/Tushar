// pages/projects.tsx
import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const projects = [
  {
    src: '/Portfolio.jpeg',
    title: 'React.js Portfolio',
    link: 'https://precious-llama-151610.netlify.app/',
    description: 'Previous Portfolio (1st version) website built using Reactjs, CSS and deployed on netlify with integrated email service facilitated by EmailJS.'
  },
  {
    src: '/SpaceWebsite.png',
    title: 'Modern Next.js Portfolio',
    link: 'https://precious-llama-151610.netlify.app/',
    description: 'Modern Portfolio website built using NextJs, Framer Motion, Tailwind CSS.'
  },
  {
    src: '/CardImage.png',
    title: 'Student Management System',
    link: 'https://precious-llama-151610.netlify.app/',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor, commodi blanditiis, laborum veniam soluta numquam temporibus eius assumenda perferendis ratione inventore accusamus delectus voluptates necessitatibus eaque.'
  },
  
];

const Projects: React.FC = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center mt-5 mb-16'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        {
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
