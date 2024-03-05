'use client';
import React, {FC} from 'react';
import Image, { StaticImageData } from 'next/image';
import './moving-image.css';
import cn from 'classnames';
import { IWithClass } from '../../types';
import { motion, useScroll } from 'framer-motion';

interface Props extends IWithClass {
  image: StaticImageData
}

const MovingImage: FC<Props> = (props) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className={ cn('moving-image', props.className) }>
      <motion.div>
        <Image src={props.image} alt='' />
      </motion.div>
    </div>
  );
};

export default MovingImage;