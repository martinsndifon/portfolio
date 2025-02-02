// gitprofile.config.js

const config = {
  github: {
    username: 'martinsndifon', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['blackbird', 'martinsndifon', 'iTest'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
    website: 'https://ndifonmartins.tech',
    phone: '+2348164404546',
    email: 'martinsndifon@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1hwuusFIB3zFFRxOzbB-2JVOL_WyyzIudXN4NIYZOUYQ/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'TypeScript',
    'Django',
    'Flask',
    'FastApi',
    'React.js',
    'Node.js',
    'Express.js',
    'C',
    'DSA',
    'Bash',
    'MySQL',
    'Postgresql',
    'MongoDB',
    'Redis',
    'DevOps',
    'SysAdmin',
    'Git',
    'Docker',
    'Vagrant',
    'AWS',
    'CSS',
    'Tailwind',
    'Web RTC',
    'socketIO',
  ],
  experiences: [
    {
      company: 'ALX Africa',
      position: 'Software Engineer',
      from: 'May 2022',
      to: 'September 2023',
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
  certifications: [
    {
      name: 'AWS',
      body: 'AWS APAC - Solutions Architecture Job Simulation',
      year: 'November 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_G74NXrevMsuKeXnwB_1699135726084_completion_certificate.pdf',
    },
    {
      name: 'React',
      body: 'Comprehensive React+Redux Course',
      year: 'November 2023',
      link: 'https://www.udemy.com/certificate/UC-bc5deb34-f3c8-444d-9ae4-4de5e2b2e4a3/',
    },
    {
      name: 'ALX Africa',
      body: 'ALX Africa - Software Engineer',
      year: 'November 2023',
      link: 'https://intranet.alxswe.com/certificates/RleSB3NF8E',
    },
    {
      name: 'Lyft',
      body: 'Lyft Back-End Engineering Job Simulation',
      year: 'October 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_G74NXrevMsuKeXnwB_1697569519181_completion_certificate.pdf',
    },
    {
      name: 'BlackBird',
      body: 'BlackBird Australia - Software Engineering job simulation',
      year: 'October 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Blackbird/8XSySTLv68WYeFhke_Blackbird%20Australia_G74NXrevMsuKeXnwB_1697834171320_completion_certificate.pdf',
    },
  ],
  education: [
    {
      institution: 'ALX Africa, Kenya',
      degree: 'Software Engineering',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Cross River University of Technology, Nigeria',
      degree: 'Computer Science',
      from: '2016',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'syncvision',
      description:
        'An RTC Web application that enables video/audio and text communication between peers, screen sharing included.',
      imageUrl: 'https://syncvision.live/ogi.png',
      link: 'https://syncvision.live',
    },
    {
      title: 'the-wild-oasis',
      description:
        'This is an internal application meant for staff use only and therefore protected by a compulsory login screen. You can request for a guest login via email.',
      imageUrl: 'https://the-wild-oasis.ndifonmartins.tech/logo-light.png',
      link: 'https://the-wild-oasis.ndifonmartins.tech/',
    },
    {
      title: 'recipe-app-api',
      description:
        'This is recipe api built with django and django-rest-framework. Authenticated users can create, read, update and delete recipes using this api.',
      imageUrl:
        'https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png',
      link: 'http://recipe-api.ndifonmartins.tech/api/docs#/',
    },
    {
      title: 'todo-app',
      description:
        'This is a todo app api built with fastapi, it has a minimalistic frontend made with jinja for public use.',
      imageUrl:
        'https://todo-app-fastapi.ndifonmartins.tech/static/todo/images/png-transparent-fastapi-hd-logo-thumbnail.png',
      link: 'https://todo-app-fastapi.ndifonmartins.tech/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'martinsndifon', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-5731ZPJ2CN', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
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
  footer: `Thank you for Visiting, do have a lovely day ❤️`,
};

export default config;
