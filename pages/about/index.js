import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'Nasze specjalizacje',
    info: [
      {
        title: 'Cyberprzestępczość - reprezentacja w sprawach dotyczących włamań do systemów komputerowych, kradzieży danych, cyberoszustw, ataków hakerskich. Ochrona danych osobowych – doradztwo w zakresie przestrzegania przepisów RODO oraz reprezentacja w przypadku naruszenia ochrony danych. Przestępstwa internetowe – pomoc w sprawach związanych z oszustwami online, phishingiem, kradzieżami tożsamości, rozpowszechnianiem nielegalnych treści w internecie. Zabezpieczenie dowodów cyfrowych – pomoc w zabezpieczeniu dowodów związanych z cyberprzestępstwami, w tym analiza logów, e-maili i innych materiałów elektronicznych. Ochrona własności intelektualnej w internecie – porady dotyczące ochrony praw autorskich, znaków towarowych i patentów w przestrzeni online.',
      },  
      
      
    ],
  },
  {
    title: 'Nagrody',
    info: [
      {
        title: 'Zaufało nam ponad 1000 osób w tym setki firm',
        
      },
      
    ],
  },
  {
    title: 'Doświadczenie',
    info: [
      {
        title: 'Kancelaria Ochrony Prawnej w Sieci to zespół specjalistów z wieloletnim doświadczeniem w obszarze prawa, który skoncentrowany jest na zagadnieniach związanych z cyberprzestępczością oraz ochroną danych osobowych. Od momentu założenia kancelarii, skutecznie pomagamy naszym klientom w walce z zagrożeniami w sieci, oferując profesjonalne doradztwo oraz reprezentację prawną w sprawach dotyczących oszustw internetowych, kradzieży tożsamości, cyberataków oraz naruszenia prywatności.Wieloletnia praktyka w zwalczaniu cyberprzestępczości Dzięki wieloletniemu doświadczeniu w obszarze prawa internetowego oraz ścisłej współpracy z ekspertami IT, udało nam się skutecznie rozwiązać setki spraw związanych z cyberprzestępczością. Zajmujemy się zarówno indywidualnymi przypadkami, jak i kompleksową obsługą prawną firm, które padły ofiarą oszustw internetowych, ataków hakerskich, a także naruszeń bezpieczeństwa danych.Zaufanie, które budujemy każdego dnia',
        
      },
      
    ],
  },
  
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
     
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            O <span className='text-accent'>nas</span> i naszych usługach
            
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Z wieloletnim doświadczeniem i dogłębną znajomością skomplikowanych przepisów prawnych, nasza Kancelaria specjalizuje się w sprawach związanych z oszustwami internetowymi, w tym oszustwami giełdowymi, zwłaszcza na rynku Forex. 
            Dotychczas prowadziliśmy setki spraw dotyczących nieuczciwych praktyk na rynkach inwestycyjnych, a każdy klient traktowany jest przez nas indywidualnie, z uwzględnieniem jego specyficznych potrzeb i sytuacji. 
            Działania podejmowane samodzielnie często prowadzą do pogłębienia problemu, a nieuczciwy broker lub oszust wykorzysta każdą najmniejszą pomyłkę. 
            Pomoc prawna w przypadkach oszustw inwestycyjnych wymaga precyzyjnego podejścia, dlatego nie czekaj – skontaktuj się z nami, by uzyskać fachowe wsparcie.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Zadowoleni klienci
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Zamknięte sprawy
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Nagroda
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'></div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
