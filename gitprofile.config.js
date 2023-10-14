// gitprofile.config.js

const config = {
  github: {
    username: 'martinsndifon', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'martinsndifon',
    twitter: 'martins_ndifon',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: 'martinsndifon', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'martinsndifon',
    dev: 'martinsndifon',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://martinsndifon.tech',
    phone: '+2348164404546',
    email: 'martinsndifon@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1hwuusFIB3zFFRxOzbB-2JVOL_WyyzIudXN4NIYZOUYQ/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'flask',
    'Django',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'C',
    'Bash',
    'MySQL',
    'MongoDB',
    'Redis',
    'Git',
    'Docker',
    'Vagrant',
    'CSS',
    'AWS',
    'Tailwind',
    'Web RTC',
    'socketIO',
  ],
  experiences: [
    {
      company: 'ALX Africa',
      position: 'Software Engineer',
      from: 'May 2022',
      to: 'present',
      companyLink: 'https://www.alxafrica.com',
    },
    {
      company: 'ALX Africa',
      position: 'Learning Ambassador',
      from: 'May 2023',
      to: 'July 2023',
      companyLink: 'https://www.alxafrica.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Alx SE',
      degree: 'Software Engineering',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Cross River University of Technology',
      degree: 'Mechanical Engineering',
      from: '2014',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'syncvision',
      description:
        'An RTC Web application that enables video/audio and text data transfer.',
      imageUrl: 'https://syncvision.live/ogi.png',
      link: 'https://syncvision.live',
    },
    {
      title: 'skyspringhomes',
      description:
        'A Real estate Web app with REST api for CRUD operations in the app.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'martinsndifon', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark', 'night'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Thank you for Visiting ❤️`,
};

export default config;
