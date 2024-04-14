'use client';

import type { ProfileType } from '@/types';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../lib/animations';
import BlobExperience from './Blobs/BlobExperience';

type ExperienceProps = {
  experiences: ProfileType['experience'];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <p>No experience information available.</p>;
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeAnimation}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1 }}
      className="relative mt-6 flex h-screen snap-start flex-col overflow-x-hidden px-6 after:mb-6 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16 xl:justify-evenly"
    >
      <div className="mt-6 flex h-full w-full flex-col gap-6 md:mt-12">
        <h2 className="dot mb-6 min-w-full text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
          Experience
        </h2>
        <>
          {experiences.map((experience, i) => (
            <div key={i} className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="w-full md:w-1/2">
                <p className="text-sm uppercase text-orange md:text-base xl:text-xl">
                  {experience.startDate.selectDate} -{' '}
                  {experience.endDate.selectDate}
                </p>
                <h3 className="dot mb-2 text-xl font-bold leading-tight tracking-tight text-orange-dark md:text-3xl xl:text-4xl">
                  {experience.role} • {experience.title}
                </h3>
                <p className="mb-2 text-sm text-dark md:text-base xl:text-xl">
                  {experience.description}
                </p>
                <ul className="mb-6 flex flex-wrap gap-2 md:mb-12">
                  {experience.techStack.map((techStack, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-orange px-2 py-1 text-xs text-light md:text-sm"
                    >
                      {techStack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 -z-10 w-1/2 text-orange"
          >
            <BlobExperience />
          </motion.div>
        </>
      </div>
    </motion.section>
  );
};

export default Experience;
