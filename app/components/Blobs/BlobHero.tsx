import { motion } from 'framer-motion';
import React from 'react';

const BlobHero = () => {
  return (
    <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        animate={{
          d: [
            'M32.9,-37.7C42.5,-31.1,50.2,-20.6,55.4,-7.3C60.7,6,63.5,22.1,58.4,36.3C53.3,50.4,40.2,62.6,24.4,69.5C8.5,76.3,-10.2,77.8,-27.1,72.5C-44,67.1,-59.1,55,-67.7,39.4C-76.3,23.8,-78.5,4.8,-74,-11.8C-69.6,-28.4,-58.6,-42.6,-45.2,-48.5C-31.8,-54.4,-15.9,-52.1,-2.1,-49.6C11.6,-47,23.2,-44.3,32.9,-37.7Z',
            'M55,-64.1C68.8,-54,75.6,-34.3,76.2,-15.7C76.8,2.9,71.1,20.3,60,30.1C48.9,39.9,32.5,42,19.9,40.5C7.3,38.9,-1.5,33.6,-13.3,31.5C-25.1,29.4,-39.9,30.5,-45.7,24.4C-51.5,18.4,-48.3,5.2,-48.5,-11.1C-48.6,-27.4,-52.1,-46.8,-44.6,-58C-37.1,-69.1,-18.5,-72,1.1,-73.2C20.6,-74.5,41.3,-74.1,55,-64.1Z',
            'M37.7,-44.6C53.2,-32,72.9,-24.2,80.8,-9.7C88.8,4.8,85,25.8,75.1,43.7C65.2,61.5,49.1,76.2,31,80.9C12.9,85.6,-7.3,80.5,-25.2,72.5C-43.1,64.5,-58.8,53.8,-61.3,40C-63.8,26.2,-53.2,9.3,-50.2,-9.1C-47.3,-27.5,-51.9,-47.5,-44.9,-61.6C-37.8,-75.6,-18.9,-83.8,-3.9,-79.1C11.2,-74.5,22.3,-57.2,37.7,-44.6Z',
            'M47.6,-63.1C56.5,-49.3,54.8,-29.3,51.6,-14.1C48.4,1.2,43.6,11.8,40.3,28.6C37,45.4,35.1,68.5,26.4,70.9C17.7,73.3,2.1,55.1,-8.4,42.8C-19,30.4,-24.6,23.9,-30.5,16.3C-36.3,8.7,-42.5,0.1,-44.6,-11.3C-46.7,-22.6,-44.6,-36.6,-36.5,-50.6C-28.3,-64.5,-14.2,-78.4,2.6,-81.5C19.4,-84.6,38.8,-76.9,47.6,-63.1Z',
            'M29.3,-34.5C38.4,-27.2,46.8,-18.4,45.9,-10.1C45,-1.7,34.9,6.3,27.6,13.2C20.3,20,15.9,25.8,8.7,31.7C1.5,37.7,-8.4,44,-22.4,45.7C-36.4,47.5,-54.6,44.7,-62.5,34.4C-70.5,24.1,-68.4,6.2,-66.1,-12.6C-63.9,-31.4,-61.7,-51.1,-50.6,-58C-39.6,-65,-19.8,-59.2,-4.9,-53.4C10,-47.6,20.1,-41.7,29.3,-34.5Z',
            'M32.9,-37.7C42.5,-31.1,50.2,-20.6,55.4,-7.3C60.7,6,63.5,22.1,58.4,36.3C53.3,50.4,40.2,62.6,24.4,69.5C8.5,76.3,-10.2,77.8,-27.1,72.5C-44,67.1,-59.1,55,-67.7,39.4C-76.3,23.8,-78.5,4.8,-74,-11.8C-69.6,-28.4,-58.6,-42.6,-45.2,-48.5C-31.8,-54.4,-15.9,-52.1,-2.1,-49.6C11.6,-47,23.2,-44.3,32.9,-37.7Z',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        fill="currentColor"
        transform="translate(100 100)"
      />
    </motion.svg>
  );
};

export default BlobHero;