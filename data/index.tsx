import { RiBlueskyFill } from 'react-icons/ri';
import { FaShop } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

export const navItems = [
  { name: 'About', link: '#about' },

  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: 'Pride Skulls',
    des: 'Pride Skulls',
    img: '/p1.svg',
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Queer Horror Art',
    des: 'Taking classic horror monsters and concepts but making them gay',
    img: '/p2.svg',
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'Rainbow Short Stories',
    des: 'Collection of Short Stories anthologies taking colors from the pride flag as inspiration.',
    img: '/p3.svg',
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Cryptid Field Guide of the US',
    des: 'Field guide with illustrations and descriptions of cryptids.',
    img: '/p4.svg',
    link: '/ui.apple.com',
  },
];

export const socialMedia = [
  {
    img: <AiFillInstagram />,
    link: 'https://www.instagram.com/',
  },
  {
    img: <RiBlueskyFill />,
    link: 'https://www.instagram.com/',
  },
  {
    img: <FaShop />,
    link: 'https://www.etsy.com/shop/TheArtOfNanCran',
  },
];
