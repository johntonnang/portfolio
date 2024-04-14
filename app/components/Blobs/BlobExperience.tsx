import { motion } from 'framer-motion';
import React from 'react';

const BlobExperience = () => {
  return (
    <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        animate={{
          d: [
            'M25.9,-34.3C33.6,-24.4,39.8,-16.3,39.5,-8.4C39.1,-0.6,32.1,7,26.5,14C20.9,21,16.6,27.5,9.4,33.4C2.2,39.2,-8,44.5,-17.2,43C-26.5,41.5,-34.8,33.2,-41.6,23.2C-48.3,13.2,-53.5,1.4,-49.1,-6.1C-44.7,-13.6,-30.9,-16.9,-21.1,-26.4C-11.3,-35.9,-5.7,-51.6,1.7,-53.7C9.1,-55.7,18.2,-44.2,25.9,-34.3Z',
            'M30.1,-34C38.3,-28.9,43.9,-18.8,44.2,-9C44.6,0.8,39.6,10.4,33.2,17.1C26.9,23.8,19.1,27.6,11.3,30C3.5,32.3,-4.5,33.3,-14.1,32.5C-23.7,31.8,-35,29.2,-40.3,22.2C-45.5,15.2,-44.8,3.7,-45,-10.2C-45.3,-24.2,-46.6,-40.6,-39.2,-45.9C-31.9,-51.1,-16,-45.2,-2.5,-42.2C10.9,-39.2,21.8,-39.1,30.1,-34Z',
            'M41.2,-46.3C50.4,-41.3,52.9,-25.6,57.1,-9C61.4,7.6,67.4,25,63,40C58.6,55,43.9,67.6,26.2,75.7C8.4,83.8,-12.3,87.4,-21.6,76.5C-30.8,65.7,-28.5,40.4,-33.7,23.4C-38.9,6.3,-51.5,-2.5,-53.7,-12.9C-55.9,-23.2,-47.7,-35.2,-37,-39.9C-26.3,-44.6,-13.2,-42.1,1.4,-43.8C16,-45.5,32,-51.3,41.2,-46.3Z',
            'M48.1,-47.6C63.9,-44,79.5,-30.4,83.3,-14C87,2.4,78.9,21.7,64.5,28.4C50,35.1,29.3,29.3,12.2,37.2C-4.9,45,-18.4,66.4,-34.1,70.7C-49.8,75,-67.7,62.2,-68.7,46.4C-69.8,30.7,-54.1,11.9,-47.1,-4.9C-40.1,-21.8,-41.8,-36.9,-35.4,-42.1C-29,-47.4,-14.5,-42.9,0.8,-43.8C16.1,-44.8,32.2,-51.2,48.1,-47.6Z',
            'M56.8,-60.2C72.2,-54.7,82.3,-35.5,85.5,-15.3C88.8,4.8,85.2,26,72.3,35.6C59.4,45.2,37.2,43.2,21.3,41.8C5.3,40.4,-4.4,39.5,-17.7,38.9C-31,38.3,-48,37.9,-52.4,30.3C-56.7,22.7,-48.4,7.8,-44.5,-6.7C-40.5,-21.1,-40.9,-35.1,-34.2,-42.1C-27.5,-49,-13.7,-48.9,3.5,-53C20.7,-57.2,41.4,-65.6,56.8,-60.2Z',
            'M25.9,-34.3C33.6,-24.4,39.8,-16.3,39.5,-8.4C39.1,-0.6,32.1,7,26.5,14C20.9,21,16.6,27.5,9.4,33.4C2.2,39.2,-8,44.5,-17.2,43C-26.5,41.5,-34.8,33.2,-41.6,23.2C-48.3,13.2,-53.5,1.4,-49.1,-6.1C-44.7,-13.6,-30.9,-16.9,-21.1,-26.4C-11.3,-35.9,-5.7,-51.6,1.7,-53.7C9.1,-55.7,18.2,-44.2,25.9,-34.3Z',
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

export default BlobExperience;
