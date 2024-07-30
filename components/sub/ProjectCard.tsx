import React from 'react';

interface Props {
    src: string;
    title: string;
    link: string;
    description: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, link, description }) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
                <img
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className='w-full object-contain'
                />
                <div className='p-4'>
                    <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                    <p className='mt-2 text-gray-300'>{description}</p>
                    <div className='mt-4 text-center'>
                    <a href={link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                        Demo link to visit the page
                    </a>
                </div>
                </div>
        </div>
    );
};

export default ProjectCard;
