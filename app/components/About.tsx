'use client';

import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import type { AboutType } from '@/types';
import { motion } from 'framer-motion';
import { fadeAnimation, fadeInText } from '../lib/animations';
import BlobHero from './Blobs/BlobHero';
import BlobExperience from './Blobs/BlobExperience';

type AboutProps = {
  data: AboutType;
};

const About: React.FC<AboutProps> = ({ data }) => {
  if (!data) {
    return <p>No information available.</p>;
  }

  const headline = 'About me'.split(' ');
  const name = data.fullName.split(' ');

  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeAnimation}
        transition={{ duration: 0.5, delay: 1 }}
        className="pointer-events-none relative mt-6 flex h-screen snap-start flex-col overflow-hidden px-6 after:mb-6 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16"
      >
        <div className="mt-6 flex h-full w-full flex-col gap-6 md:mt-12">
          <div className="flex w-full items-center justify-between">
            <motion.h1 className="text-6xl font-bold leading-tight tracking-tight text-orange-dark md:text-8xl xl:text-9xl">
              {headline.map((word, i) => (
                <motion.span
                  key={'title' + i}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeInText}
                  transition={{
                    duration: 0.4,
                    delay: 1.5 + i * 0.1,
                  }}
                >
                  {word}
                  {i !== headline.length - 1 && ' '}
                </motion.span>
              ))}
              <motion.span
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInText}
                transition={{ delay: 2.5 }}
                className="dot"
              ></motion.span>
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeAnimation}
              transition={{ duration: 0.5, delay: 3 }}
              viewport={{ once: true }}
              className="flex w-full justify-end xl:justify-center"
            >
              <Image
                className="min-h-96 pointer-events-none w-[200px] -scale-x-100 rounded-full object-contain md:w-96"
                src={data.profileImage.image}
                width={400}
                height={400}
                quality={100}
                alt={data.profileImage.alt}
              />
              <div className="absolute -right-14 top-0 -z-10 w-3/4 text-orange md:-top-12 md:right-16 md:w-1/2">
                <BlobHero />
              </div>
            </motion.div>
          </div>
          <motion.h2 className="min-w-full text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
            {name.map((word, i) => (
              <motion.span
                key={'title' + i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInText}
                transition={{
                  duration: 0.4,
                  delay: 1.8 + i * 0.1,
                }}
              >
                {word}
                {i !== name.length - 1 && ' '}
              </motion.span>
            ))}
            <motion.span
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInText}
              transition={{ delay: 2.5 }}
              className="dot"
            ></motion.span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="dot min-w-full text-xl font-bold leading-tight tracking-tight text-orange-dark md:text-3xl xl:text-4xl"
          >
            {data.shortBio}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <BlockContent blocks={data.fullBio} />
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeAnimation}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="pointer-events-none relative mt-6 flex h-screen snap-start flex-col overflow-hidden px-6 after:mb-6 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16"
      >
        <div className="mt-6 flex h-full w-full flex-col gap-6 md:mt-12">
          <h4 className="dot min-w-full text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
            Hobbies
          </h4>
          <>
            {data.hobbies.map((hobby, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-full md:w-1/2">
                  <h5 className="dot mb-6 min-w-full text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-3xl xl:text-4xl">
                    {hobby.hobbyTitle}
                  </h5>
                  <p>{hobby.hobbyDescription}</p>
                </div>
              </div>
            ))}
          </>
          <div className="absolute right-0 top-0 -z-10 w-1/2 text-orange">
            <BlobExperience />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
