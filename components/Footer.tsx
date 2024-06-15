import SocialIcons from './ui/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50 '
        />
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='heading lg:max-w-[45vw] text-white py-10'>
          Reach out and say
          <span className='text-purple'> hi!</span>
        </h2>

        <a href='mailto:artofNancran@gmail.com'>
          <button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'>
            <span className='absolute inset-0 overflow-hidden rounded-full'>
              <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
            </span>
            <div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
              <span>send me a note</span>
              <svg
                fill='none'
                height='16'
                viewBox='0 0 24 24'
                width='16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.75 8.75L14.25 12L10.75 15.25'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
          </button>
        </a>
        <div className='flex justify-center relative my-20 z-10'>
          <SocialIcons />
        </div>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm  text-white-200 font-light'>
          Copyright © 2024 NanCran
        </p>
      </div>
    </footer>
  );
};

export default Footer;
