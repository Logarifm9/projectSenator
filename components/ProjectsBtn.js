// next image
import Image from 'next/image';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <a
        href='https://www.nanosystems.it/public/download/Supremo.exe'  // Ссылка для скачивания
        target='_blank'  // Открывает ссылку в новой вкладке
        rel='noopener noreferrer'  // Защита при открытии ссылки в новой вкладке
        className='relative w-[185px] h-[185px] flex justify-center items-center  bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text12.png'}
          width={250}
          height={250}
          alt='button image'
          className='animate-spin-slow w-full h-full max-w-[250px] max-h-[250px]'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </a>
    </div>
  );
};

export default ProjectsBtn;
