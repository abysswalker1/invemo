'use client';
import {FC, useRef, memo} from 'react';
import Image, { StaticImageData } from 'next/image';
import './moving-image.css';
import cn from 'classnames';
import { IWithClass } from '../../types';
import { motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { useInView } from 'framer-motion';

interface Props extends IWithClass {
  image: StaticImageData
}

const MovingImage: FC<Props> = memo((props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const imageTransfrom = isInView ? ['0', '-50%'] : ['-10%', '-10%'];
  
  return (
    <div className={ cn('moving-image', props.className) } ref={ref}>
      <motion.div
        style={{ translateY: useTransform(smoothScrollProgress, [0, 1], imageTransfrom) }}
      >
        <Image src={props.image} alt='' />
      </motion.div>
    </div>
  );
});

export default MovingImage;