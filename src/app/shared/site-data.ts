export interface GalleryItem {
  name: string;
  image: string;
}

export interface InfoCard {
  title: string;
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { name: 'Zanka', image: '/assets/images/Zanka.png' },
  { name: 'Kokomi', image: '/assets/images/Kokomi.png' },
  { name: 'Lumine', image: '/assets/images/Lumine.png' },
  { name: 'Umbreon', image: '/assets/images/Umbreon.png' },
  { name: 'Furina', image: '/assets/images/Furina.png' },
  { name: 'Bloom', image: '/assets/images/Bloom.jpg' },
  { name: 'Alice', image: '/assets/images/Alice.jpg' },
  { name: 'Itsuki Sumeragi', image: '/assets/images/Itsuki Sumeragi.jpg' },
  { name: 'Dio', image: '/assets/images/Dio.jpg' },
  { name: 'Bruno', image: '/assets/images/Bruno.png' },
];

export const INFO_CARDS: InfoCard[] = [
  {
    title: 'Journal',
    image: '/assets/images/info1.png',
    description: 'Thoughts, stories & whispers from my soul.',
  },
  {
    title: 'Collections',
    image: '/assets/images/info2.png',
    description: 'Treasured finds & beloved curiosities.',
  },
  {
    title: 'Wishes',
    image: '/assets/images/info3.png',
    description: 'Dreams, hopes & quiet intentions.',
  },
  {
    title: 'Q&A',
    image: '/assets/images/info6.jpg',
    description: 'Questions & answers, straight from the heart.',
  },
];

export const SOCIAL_LINKS = {
  email: 'pinchy.cos@gmail.com',
  instagram: 'https://instagram.com/pinchy_y',
  tiktok: 'https://tiktok.com/@pinchy_y',
  youtube: 'https://youtube.com/@Pinchy_y',
};

export const ABOUT_PLACEHOLDER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
