// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/ser1.png',
        },
        {
          title: 'title',
          path: '/ser2.jpg',
        },
        {
          title: 'title',
          path: '/ser3.jpg',
        },
        {
          title: 'title',
          path: '/ser4.jpg',
        },
        {
          title: 'title',
          path: '/ser6.webp',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/ser2.jpg',
        },
        {
          title: 'title',
          path: '/ser1.png',
        },
        {
          title: 'title',
          path: '/ser3.jpg',
        },
        {
          title: 'title',
          path: '/ser4.jpg',
        },
        {
          title: 'title',
          path: '/ser6.webp',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group w-[240px] h-[160px]' // fixed width and height
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group w-full h-full'>
                      {/* image */}
                      <Image
                        src={image.path}
                        alt=''
                        layout='fill' // covers the div dimensions
                        objectFit='cover' // makes sure the image scales to fit the div
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>ZOBACZ</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            CERTYFIKAT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
