module.exports = {
  email: 'shreyasskasetty@tamu.edu',
  siteTitle: 'Shreyas Shivakumar Kasetty | Software Developer',
  siteDescription:
    'Shreyas Shivakumar Kasetty holds a Bachelors degree in Computer Science from RV College of Engineering and is pursuing Masters in Computer Science(May\'25) at Texas A&M University, College Station.',
  siteKeywords:
    'Shreyas Shivakumar Kasetty, Shreyas, Kasetty, shreyasskasetty,  Software Developer, Software Engineer, Competitive Programmer, Java Developer, Akamai Technologies, Texas A&M University, College Station, TAMU',
  siteUrl: 'https://shreyasskasetty.github.io/Portfolio-Website',
  siteLanguage: 'en_US',
  name: 'Shreyas Shivakumar Kasetty',
  location: 'College Station, TX',
  googleAnalyticsID: 'G-0QZH87YVBE',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyasskasetty',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kasetty.shreyas',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shreyasskasetty',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
