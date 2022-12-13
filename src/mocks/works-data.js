import mobileImage from '../assets/images/mobile-hero.png'
import desktopImage from '../assets/images/desktop-hero.png'
import facebook from '../assets/images/icons/facebook-icon.png'
import twitter from '../assets/images/icons/twitter-icon.png'
import instagram from '../assets/images/icons/instagram-icon.png'
import bolcom from '../assets/images/clients/bolcom.png'
import kempen from '../assets/images/clients/kempen.png'
import philips from '../assets/images/clients/philips.png'
import gemeentemuseum from '../assets/images/clients/gemeentemuseum.png'
import florensis from '../assets/images/clients/florensis.png'
import lightning from '../assets/images/clients/lightning.png'
import tui from '../assets/images/clients/tui.png'
import chocomel from '../assets/images/clients/chocomel.png'
import jbl from '../assets/images/clients/jbl.png'
import zalando from '../assets/images/clients/zalando.png'
import koninklijke from '../assets/images/clients/koninklijke-bibliotheek.png'
import liberty from '../assets/images/clients/liberty-global.png'
import arla from '../assets/images/clients/arla.png'

export const headerData = {
  id: 1,
  title: 'Work',
  logo: 'Dept',
  button: 'Read more',
  desktop: desktopImage,
  mobile: mobileImage,
  alt: `A selection of projects that pioneer tech and marketing to help brands stay ahead.`,
  desktopMenuItems: [
    {
      id: 1,
      name: 'WORK',
      url: '/'
    },
    {
      id: 2,
      name: 'CULTURE',
      url: '/'
    },
    {
      id: 3,
      name: 'SERVICES',
      url: '/'
    },
    {
      id: 4,
      name: 'INSIGHTS',
      url: '/'
    },
    {
      id: 5,
      name: 'CAREERS',
      url: '/'
    },
    {
      id: 6,
      name: 'CONTACT',
      url: '/'
    },
  ],
  menuItems: [
    {
      id: 1,
      name: 'HOME',
      url: '/'
    },
    {
      id: 2,
      name: 'WERK',
      url: '/'
    },
    {
      id: 3,
      name: 'OVER',
      url: '/'
    },
    {
      id: 4,
      name: 'DIENSTEN',
      url: '/'
    },
    {
      id: 5,
      name: 'PARTNERS',
      url: '/'
    },
    {
      id: 6,
      name: 'STORIES',
      url: '/'
    },
    {
      id: 7,
      name: 'VACATURES',
      url: '/'
    },
    {
      id: 8,
      name: 'EVENTS',
      url: '/'
    },
    {
      id: 9,
      name: 'CONTACTS',
      url: '/'
    }
  ],
  landenItems: [
    {
      id: 1,
      name: 'global',
      url: '/'
    },
    {
      id: 2,
      name: 'nederland',
      url: '/'
    },
    {
      id: 3,
      name: 'united states',
      url: '/'
    },
    {
      id: 4,
      name: 'ireland',
      url: '/'
    },
    {
      id: 5,
      name: 'united kingdom',
      url: '/'
    },
    {
      id: 6,
      name: 'deutschland',
      url: '/'
    },
    {
      id: 7,
      name: 'schweiz',
      url: '/'
    }
  ]
}

export const filterWorksData = [
  {
    id: 1,
    name: 'all work',
    value: 'all-work'
  },
  {
    id: 2,
    name: 'digital teams',
    value: 'digital-teams'
  },
  {
    id: 3,
    name: 'strategy',
    value: 'strategy'
  },
  {
    id: 4,
    name: 'technology',
    value: 'technology'
  },
  {
    id: 5,
    name: 'design',
    value: 'design'
  },
  {
    id: 6,
    name: 'advertising',
    value: 'advertising'
  },
  {
    id: 7,
    name: 'digital marketing',
    value: 'digital-marketing'
  },
  {
    id: 8,
    name: 'data intelligence',
    value: 'data-intelligence'
  },
  {
    id: 9,
    name: 'branding',
    value: 'branding'
  },
  {
    id: 10,
    name: 'content',
    value: 'content'
  },
  {
    id: 11,
    name: 'commerce',
    value: 'commerce'
  },
  {
    id: 12,
    name: 'media',
    value: 'media'
  },
  {
    id: 13,
    name: 'marketing',
    value: 'marketing'
  }
]

export const filterIndustriesData = [
  {
    id: 1,
    name: 'all industries',
    value: 'all-industries'
  },
  {
    id: 2,
    name: 'recruitment',
    value: 'recruitment'
  },
  {
    id: 3,
    name: 'finance & insurance',
    value: 'finance-insurance'
  },
  {
    id: 4,
    name: 'utilities',
    value: 'utilities'
  },
  {
    id: 5,
    name: 'b2b',
    value: 'b2b'
  },
  {
    id: 6,
    name: 'travel',
    value: 'travel'
  },
  {
    id: 7,
    name: 'retail & fashion',
    value: 'retail-fashion'
  },
  {
    id: 8,
    name: 'data intelligence',
    value: 'data-intelligence'
  },
  {
    id: 9,
    name: 'health',
    value: 'health'
  },
  {
    id: 10,
    name: 'education',
    value: 'education'
  },
  {
    id: 11,
    name: 'media',
    value: 'media'
  },
  {
    id: 12,
    name: 'fast moving consumer goods',
    value: 'fast-moving-consumer-goods'
  },
  {
    id: 13,
    name: 'non profit',
    value: 'non-profit'
  }
]

export const footerData = {
  id: 1,
  title: 'Dept',
  chamberOfCommerce: '63464101',
  vat: 'NL 8552.47.502.B01',
  socialMediaLinks: [
    {
      id:1,
      image:facebook,
      name: "facebook",
      href:'/'
    },
    {
      id:2,
      image:twitter,
      name: "Twitter",
      href:'/'
    },  {
      id:3,
      image:instagram,
      name: "Instagram",
      href:'/'
    }],
  menu: [
    {
      id: 1,
      name: 'Work',
      url: '/'
    },
    {
      id: 2,
      name: 'Services',
      url: '/'
    },
    {
      id: 3,
      name: 'Stories',
      url: '/'
    },
    {
      id: 4,
      name: 'About',
      url: '/'
    },
    {
      id: 5,
      name: 'Careers',
      url: '/'
    },
    {
      id: 6,
      name: 'Contact',
      url: '/'
    }
  ]
}

export const testemonialData = {
  id: 1,
  author: 'MATTIJS TEN BRINK – CEO, TRANSAVIA',
  content:
    '“Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month”'
}
export const worksData = [
  {
    id: 1,
    image: bolcom,
    name: 'Bol.com',
    title: 'A summer island in the Netherlands',
    category: 'commerce',
    industry: 'fast moving consumer goods',
    alt: 'a group of eight people playing in a pond wearing swimwear'
  },
  {
    id: 2,
    image: kempen,
    name: 'Kempen',
    title: 'Not some average banking website',
    category: 'digital marketing',
    industry: 'finance & insurance',
    alt:
      'a person with a computer on his lap pointing at a paper in front of the two people'
  },
  {
    id: 3,
    image: philips,
    name: 'Philips',
    title: 'Beautiful design meets innovative technology',
    category: 'branding',
    industry: 'utilities',
    alt: 'a group of lamps and lamps of various shapes'
  },
  {
    id: 4,
    image: gemeentemuseum,
    name: 'Gemeentemuseum',
    title: 'A 100 years of Mondriaan & De Stijl',
    category: 'strategy',
    industry: 'non-profit',
    alt: 'a woman with her back in front of an abstract and colorful painting'
  },
  {
    id: 5,
    image: 'without',
    name: 'Microsoft',
    title:
      'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
    category: 'technology',
    industry: 'b2b'
  },
  {
    id: 6,
    image: 'without',
    name: "O'Neill",
    title:
      "Integrating existing content into O'Neill's new e-commerce platform",
    category: 'design',
    industry: 'travel'
  },
  {
    id: 7,
    image: florensis,
    name: 'Florensis',
    title: 'Rethinking the entire online ecosystem',
    category: 'digital teams',
    industry: 'recruitment',
    alt: 'man on his back with a backpack in front of a white board'
  },
  {
    id: 8,
    image: lightning,
    name: 'Be Lighting',
    title: 'Delivering clarity on a global scale',
    category: 'advertising',
    industry: 'health',
    alt: 'a lamppost in front of several buildings'
  },
  {
    id: 9,
    image: tui,
    name: 'Tui',
    title: 'Swipe to find your next holiday destination',
    category: 'digital marketing',
    industry: 'education',
    alt: 'drawing of a man with cap on a blue background'
  },
  {
    id: 10,
    image: 'without',
    name: 'AMAZON',
    title:
      'Starting with delivering through drones',
    category: 'branding',
    industry: 'health'
  },
  {
    id: 11,
    image: 'without',
    name: 'O’NEILL',
    title:
      'Integrating existing content into O’Neills’s new e-commerce platform',
    category: 'content',
    industry: 'media'
  },
  {
    id: 12,
    image: chocomel,
    name: 'Chocomel',
    title: 'A compaign for the limited edition letter packs',
    category: 'commerce',
    industry: 'health',
    alt: 'five packs of chocomel with a heart stamped on each'
  },
  {
    id: 13,
    image: jbl,
    name: 'JBL',
    title: 'Live like a champion with Jerome Booteng',
    category: 'marketing',
    industry: 'media',
    alt: 'a man wearing headphones and looking thoughtful'
  },
  {
    id: 14,
    image: zalando,
    name: 'Zalando',
    title: 'Innovative SEO and content strategy for Zalando',
    category: 'commerce',
    industry: 'recruitment',
    alt: 'man writing on a white board with another man beside'
  },
  {
    id: 15,
    image: koninklijke,
    name: 'Koninklijke Bibliotheek',
    title: 'The search for the most influential book ever',
    category: 'advertising',
    industry: 'utilities',
    alt: 'several books stacked on an orange background'
  },
  {
    id: 16,
    image: liberty,
    name: 'Liberty Gobal',
    title: 'Delivering complex commerce solutions',
    category: 'design',
    industry: 'non-profit',
    alt: 'data center used to house computer systems and associated components'
  },
  {
    id: 17,
    image: arla,
    name: 'Arla',
    title: 'Swipe to find your next holiday destination',
    category: 'digital teams',
    industry: 'recruitment',
    alt: 'six packs of Arla yogurt of various shapes with fruits around'
  }
]
