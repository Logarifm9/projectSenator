// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// react countup
import CountUp from 'react-countup';
import ProjectsBtn from '../../components/ProjectsBtn';

const About = () => {
  return (
    <div className='h-full bg-primary py-32 text-white text-center xl:text-left'>
      {/* top left image */}
      <div className='absolute -top-20 xl:-top-40 -left-32 -rotate-[70deg] mix-blend-color-dodge'>
        <Image
          src={'/top-left-img.png'}
          width={500}
          height={400}
          className='translate-z-0'
          alt=''
        />
      </div>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        animate={'show'}
        exit={'hidden'}
        className='hidden xl:flex absolute bottom-0 -left-[350px]'
      >
        <Image
          src={'/avatar.png'}
          width={700}
          height={700}
          className='translate-z-0'
          alt=''
        />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* left */}
        <div className='flex-1 xl:pt-12 flex flex-col justify-center'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='h1'
          >
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='max-w-[700px] mx-auto xl:mx-0 mb-4 xl:mb-12 px-2 xl:px-0'
          >
            10 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use. With
            quiet confidence, curiosity, and a focus on continual improvement, I
            tackle development challenges one at a time.
          </motion.p>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        {/* right */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate={'show'}
          exit={'hidden'}
          className='flex-1 xl:flex-none xl:w-[45%] flex flex-col justify-center items-center xl:p-[50px] relative'
        >
          <div className='flex flex-wrap w-full px-6 xl:px-0'>
            <div className='w-[50%] h-[100px] xl:h-[240px] flex flex-col justify-center items-center border-b border-r border-white/10'>
              <div className='text-3xl xl:text-6xl font-bold mb-2'>
                <CountUp start={0} end={11} duration={8} />+
              </div>
              <p className='uppercase text-xs xl:text-[13px] tracking-widest max-w-[100px] xl:max-w-none'>
                Years of experience
              </p>
            </div>
            <div className='w-[50%] h-[100px] xl:h-[240px] flex flex-col justify-center items-center border-b border-white/10'>
              <div className='text-3xl xl:text-6xl font-bold mb-2'>
                <CountUp start={0} end={250} duration={8} />+
              </div>
              <p className='uppercase text-xs xl:text-[13px] tracking-widest max-w-[100px] xl:max-w-none'>
                Happy clients
              </p>
            </div>
            <div className='w-[50%] h-[100px] xl:h-[240px] flex flex-col justify-center items-center border-r border-white/10'>
              <div className='text-3xl xl:text-6xl font-bold mb-2'>
                <CountUp start={0} end={650} duration={10} />+
              </div>
              <p className='uppercase text-xs xl:text-[13px] tracking-widest max-w-[100px] xl:max-w-none'>
                Projects done
              </p>
            </div>
            <div className='w-[50%] h-[100px] xl:h-[240px] flex flex-col justify-center items-center'>
              <div className='text-3xl xl:text-6xl font-bold mb-2'>
                <CountUp start={0} end={8} duration={10} />
              </div>
              <p className='uppercase text-xs xl:text-[13px] tracking-widest max-w-[100px] xl:max-w-none'>
                Awards
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div>
<div className='mb-2 text-accent'>
  <CountUp start={0} end={10} duration={8} />+
</div>
<div className='text-sm uppercase w-[160px] font-normal'>
  Years of experience
</div>
</div>
<div>
<div className='mb-2 text-accent'>
  <CountUp start={0} end={120} duration={4} />+
</div>
<div className='text-sm uppercase w-[160px] font-normal leading-normal'>
  Projects completed in 20 countries
</div>
</div> */
}
