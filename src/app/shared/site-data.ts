export interface GalleryItem {
  name: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CosplanItem {
  name: string;
  category: string;
  series: string;
  image: string;
  status: string;
  description: string;
}

export interface InfoCard {
  title: string;
  image: string;
  description: string;
  route?: string;
  detailContent?: string[];
  faqItems?: FaqItem[];
  cosplanItems?: CosplanItem[];
  contactButton?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { name: 'Nikki', image: 'assets/images/Nikki.png' },
  { name: 'Zanka', image: 'assets/images/Zanka.png' },
  { name: 'Kokomi', image: 'assets/images/Kokomi.png' },
  { name: 'Lumine', image: 'assets/images/Lumine.png' },
  { name: 'Umbreon', image: 'assets/images/Umbreon.png' },
  { name: 'Furina', image: 'assets/images/Furina.png' },
  { name: 'Bloom', image: 'assets/images/Bloom.jpg' },
  { name: 'Alice', image: 'assets/images/Alice.jpg' },
  { name: 'Itsuki Sumeragi', image: 'assets/images/Itsuki Sumeragi.jpg' },
  { name: 'Dio', image: 'assets/images/Dio.jpg' },
  { name: 'Bruno Bucciarati', image: 'assets/images/Bruno.png' },
];

export const INFO_CARDS: InfoCard[] = [
  {
    title: 'Collaborate',
    image: 'assets/images/info1-2.png',
    description: 'What I can do as a cosplayer for you.',
    contactButton: true,
    detailContent: [
      'I love working with brands, events, photographers, and fellow creators on cosplay focused collaborations.',
      'Services may include cosplay appearances, convention attendance, themed photoshoots, social media content creation, promotional campaigns, and activities related to gaming and geek culture.',
      'Interested in working together? Or simply have a question? Reach out through the contact page and tell me more about your project.',
    ],
  },
  {
    title: 'Media Kit',
    image: 'assets/images/info2.png',
    description: 'All info about my social platforms, have more questions? Contact me!',
    route: '/media-kit',
  },
  {
    title: 'Cosplans',
    image: 'assets/images/info3.png',
    description: 'All the cosplays I have planned to do, and the ones I am currently working on.',
    cosplanItems: [
      // {
      //   name: 'Alice',
      //   category: 'Video Game',
      //   series: 'Alice: Madness Returns',
      //   image: 'assets/cosplans/alice_madness_returns.jpg',
      //   status: 'On hold',
      //   description:
      //     'I have wanted to cosplay Alice for a very long time, especially several of her beautiful outfits from the game. This is a project I hope to craft myself one day. The cosplay is currently on pause because fabric I originally bought for her was used for another project, but she remains very high on my list.',
      // },
      {
        name: 'Draculaura',
        category: 'Franchise',
        series: 'Monster High',
        image: 'assets/cosplans/Draculaura.webp',
        status: 'Coming soon',
        description:
          'I already have this cosplay ready and plan to wear it soon! I mainly cosplay characters from games and anime, but every now and then it is wonderful to revisit a character from my childhood.',
      },
      {
        name: 'Lucy',
        category: 'Anime',
        series: 'Cyberpunk: Edgerunners',
        image: 'assets/cosplans/lucy.webp',
        status: 'Wishlist',
        description:
          "Lucy is on my cosplay wishlist. I don't have a date planned for her yet, but she is absolutely a character I hope to bring to life one day.",
      },
      // {
      //   name: 'Narciso Anasui',
      //   category: 'Anime & Manga',
      //   series: "JoJo's Bizarre Adventure: Stone Ocean",
      //   image: 'assets/cosplans/Narciso_Anasui.webp',
      //   status: 'In preparation',
      //   description:
      //     'This is a cosplay I am planning to make myself. I already have all the materials ready and hope to start working on it very soon!',
      // },
      {
        name: 'Pierrot',
        category: 'Video Game',
        series: 'The Freak Circus',
        image: 'assets/cosplans/Pierrot.webp',
        status: 'Coming soon',
        description:
          'This cosplay is already purchased and I plan to wear it soon. It will be a duo cosplay with a friend who will be dressing as Harlequin!',
      },
    ],
  },
  {
    title: 'Q&A',
    image: 'assets/images/info6.jpg',
    description: 'Questions & answers.',
    faqItems: [
      {
        question: 'Do you make your own cosplays?',
        answer:
          "Most of my cosplays are purchased, but I'm also working on creating more of my own costumes. I enjoy learning new crafting techniques and improving my cosplay making skills. At the moment, I keep my sewing projects relatively small while I continue learning. I hope to create more advanced cosplays in the future.",
      },
      {
        question: 'Are you available for collaborations?',
        answer:
          "Yes! I'm open to collaborations with brands, photographers, conventions, fellow creators, and community projects that align with cosplay, gaming, and geek culture.",
      },
      {
        question: 'What types of characters do you cosplay?',
        answer: 'I mainly cosplay characters from video games and anime.',
      },
      {
        question: 'Do you attend conventions?',
        answer:
          'Yes. I regularly attend conventions and events where I cosplay, create content, and connect with the community. Most of these events are in Belgium, but I would love to attend conventions in more countries in the future.',
      },
      {
        question: 'Can I photograph you at an event?',
        answer:
          "Of course! However, please remember that cosplay is not consent, so always ask before taking photos. Feel free to approach me if you'd like a picture. If you post your photos online, I'd love it if you tagged me so I can see your work!",
      },
    ],
  },
];

export const SOCIAL_LINKS = {
  email: 'pinchy.cos@gmail.com',
  instagram: 'https://instagram.com/pinchy_y',
  tiktok: 'https://tiktok.com/@pinchy_y',
  youtube: 'https://youtube.com/@Pinchy_y',
};

export const ABOUT_TEXT = [
  "Hi! My name is Amy, also known as Pinchy.",
  "I'm a cosplayer from Belgium who loves bringing my favorite characters to life.",
  "Cosplay is very important to me. It's a creative outlet where I can truly be myself, express my passion for games and anime, and meet amazing people who have become important friends. Being able to make others smile through my cosplay is one of the most rewarding parts of the hobby.",
  "I mainly cosplay characters from video games and anime, as those are the worlds I'm most passionate about. I'm always looking to learn new skills, improve my craft, and create even more memorable cosplays in the future.",
];
