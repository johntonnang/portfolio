'use client';

import type { ProjectsType } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { fadeAnimation } from '../lib/animations';

type ProjectsProps = {
  data: ProjectsType;
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!data) {
    return <p>No information available.</p>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeAnimation}
      transition={{ duration: 0.5, delay: 2 }}
      className="h-full w-full items-center"
    >
      <div
        className="relative h-52 w-full overflow-hidden rounded-lg p-4 md:h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link target="_blank" href={`${data.url}`} passHref>
          {data.projectImage && (
            <Image
              className={`transition-brightness absolute transform rounded-lg object-cover duration-700 ${isHovered ? 'brightness-[10%]' : 'brightness-[30%]'}`}
              src={data.projectImage[0].image}
              alt={data.projectImage[0].alt}
              fill={true}
            />
          )}
          <div
            className={`pointer-events-none flex h-full w-full transform flex-col justify-end gap-4 transition-transform duration-700 ease-in-out ${isHovered ? 'lg:translate-y-0' : 'lg:translate-y-[270px]'}`}
          >
            <h2 className="dot z-10 text-2xl font-bold leading-tight tracking-tight text-light md:text-4xl">
              {data.projectTitle}
            </h2>
            <ul className="z-10 flex flex-wrap gap-2">
              {data.techStack?.map((techStack, i) => (
                <li
                  key={i}
                  className="rounded-full bg-orange px-2 py-1 text-xs text-light md:text-sm"
                >
                  {techStack}
                </li>
              ))}
            </ul>
            <div className="hidden h-full w-full md:block">
              <p className="text-light">{data.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
