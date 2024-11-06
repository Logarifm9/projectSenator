import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'> {/* Удален отступ xl:ml-[10px] */}
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-lg xl:text-xl'
          >
            Kancelaria Ochrony  <br /> {' '}
            <span style={{ color: '#E5B900' }}>Prawnej w Sieci</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Skorzystaj z usług Kancelarii Prawnej Ochrony Prawnej w Sieci – Twoich ekspertów w walce z oszustwami internetowymi. 
            Oferujemy pełne wsparcie prawne w zakresie zwalczania cyberprzestępczości, zapewniając pomoc ze strony doświadczonych prawników, detektywów oraz specjalistów w dziedzinie bezpieczeństwa cyfrowego. 
            Nasza kancelaria dostarcza kompleksowe rozwiązania prawne, które skutecznie chronią przed oszustwami online i innymi zagrożeniami w sieci. Jeśli potrzebujesz pomocy, skontaktuj się z nami za pomocą formularza kontaktowego lub zadzwoń pod numer.
          </motion.p>

          {/* address */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' mt-12 text-sm xl:text-base'
            style={{ marginTop: '1px', color: '#E5B900' }}
          >
            <p>Ul. Twarda 18, 8 piętro, 00-824, Warszawa</p>
            <p>City Tower Nusle, 140 00 Praha 4, Czechia</p>
            <p>+48 732 082 166</p>
          </motion.div>

          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          {/* You can insert the avatar or other content here */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
