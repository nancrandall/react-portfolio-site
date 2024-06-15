import SocialIcons from './ui/SocialMediaIcons';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BiSolidSkull } from 'react-icons/bi';
import { FaShoppingBasket } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id='about' className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-20 -left-0 md:-left-32 md:-top-20 h-screen'
          fill='red'
        />
        <Spotlight
          className='-top-30 -left-10 md:-left-42 md:-top-20 h-screen'
          fill='orange'
        />
        <Spotlight
          className='-top-30 -left-20 md:-left-52 md:-top-20 h-screen'
          fill='yellow'
        />
        <Spotlight
          className='-top-40 -left-30 md:-left-62 md:-top-20 h-screen'
          fill='green'
        />
        <Spotlight
          className='-top-50 -left-30 md:-left-72 md:-top-20 h-screen'
          fill='blue'
        />
        <Spotlight
          className='-top-60 -left-40 md:-left-72 md:-top-20 h-screen'
          fill='purple'
        />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Art and Comics
          </h1>

          <TextGenerateEffect
            words='Keeping it Spooky and Gay '
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100'>
            Heya! I&apos;m Nan Cran, Illustrator making spooky comics{' '}
          </p>
          <SocialIcons />
          <a href='https://www.etsy.com/shop/TheArtOfNanCran'>
            <button className='p-[3px] my-20 relative'>
              <div className=' absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
              <div className='px-8 py-2 flex justify-center items-center bg-black rounded-[6px]  relative group  transition duration-200 text-white hover:bg-transparent'>
                Shop Now
                <span className='px-2'>
                  <FaShoppingBasket />
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
