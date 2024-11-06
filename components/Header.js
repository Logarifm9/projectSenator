import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';  // Импортируем useRouter
import Socials from '../components/Socials';

const Header = () => {
  const router = useRouter();  // Получаем объект router
  const isHomePage = router.pathname === '/';  // Проверяем, находимся ли мы на главной странице

  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[140px] mt-[30px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-[5px] py-8'>
          {/* Социальные иконки для мобильной версии */}
          <div className='lg:hidden order-first mt-[5px]'>
            <Socials />
          </div>
          
          {/* Логотип отображается только на главной странице */}
          {isHomePage && (
            <div className='flex justify-center items-center'>
              <Link href={'/'}>
                <Image
                  src={'/logos.png'}
                  width={300}
                  height={100}
                  alt='Logo'
                  priority={true}
                />
              </Link>
            </div>
          )}

          {/* Социальные иконки для десктопной версии */}
          <div className='hidden lg:flex flex-col items-center gap-y-[5px]'>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
