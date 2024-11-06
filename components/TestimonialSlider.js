// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-4.png',
    name: 'Dorota',
    position: 'Customer',
    message:
      'Jestem bardzo zadowolona z usług Pana Michała.Jest osobą kompetentną,pomocną i zaangażowaną w sprawę ,którą prowadzi.Na bieżąco byłam informowana co dzieje się w sprawie.',
  },
  {
    image: '/t-avt-8.png',
    name: 'Wojtek',
    position: 'Customer',
    message:
      'Konkretny,pomocny i zaangażowany w sprawę którą prowadzi.Zawsze w kontakcie z klientem.Wysoka kultura osobista, miła obsługa i skuteczność w działaniu.Polecam ',
  },
  {
    image: '/t-avt-5.png',
    name: 'Alicja',
    position: 'Customer',
    message:
      'Bardzo dobry i pomocny prawnik.Potrafi pomóc w sprawach skomplikowanych,zawsze w kontakcie z klientem.Polecam tym wszystkim,którzy cenią sobie fachowość i miłą obsługę. ',
  },
  {
    image: '/t-avt-6.png',
    name: 'Iwona Stępnikowska',
    position: 'Customer',
    message:
      'Ogrom wiedzy, skrupulatność, po 15 minutach rozmowy, zdobył moje zaufanie. Polecam. Gdybym mogła to bym zatrudniła do sprawy ale niestety nie mam funduszy na następnego prawnika. Bardzo polecam. ',
  },
  {
    image: '/t-avt-9.png',
    name: 'Adam',
    position: 'Customer',
    message:
      'Pan Marek jest osobą kompetentną i zaangażowaną w sprawę którą prowadzi.Potrafi pomóc w sprawach trudnych i skomplikowanych,bardzo pomocny. ',
  },
  {
    image: '/t-avt-10.png',
    name: 'Kamil',
    position: 'Customer',
    message:
      'Pomocny , konkretny i zaangażowany w sprawę, którą prowadzi.Wszystko na bieżąco wyjaśnione w sposób zrozumiały dla kilenta.Wysoka kultura osobista i miła obsługa.  ',
  },
  {
    image: '/t-avt-7.png',
    name: 'Grażyna',
    position: 'Customer',
    message:
      'Pan mecenas jest bardzo zaangażowany i zainteresowany problemem klienta oraz szukaniem najlepszego rozwiązania.Konkretny,cierpliwy, skuteczny i zawsze w kontakcie.Polecam jego usługi wszystkim,którzy cenią sobie fachowość i miłą atmosferę. . ',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
