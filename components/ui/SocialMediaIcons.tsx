import { socialMedia } from '@/data';
import { IconContext } from 'react-icons';

const SocialIcons = () => {
  return (
    <div className='flex items-center md:gap-3 gap-6'>
      {socialMedia.map((ICON, i) => (
        <div
          key={i}
          className='w-10 h-10  cursor-pointer flex justify-center items-center bg-black-200 rounded-lg border border-black-300'
        >
          <IconContext.Provider value={{ color: 'white' }}>
            <a href={ICON.link} target='_blank'>
              {ICON.img}
            </a>
          </IconContext.Provider>
          ;
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
