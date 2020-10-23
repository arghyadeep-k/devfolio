module.exports = {
  siteMetadata: {
    siteUrl: `https://arghyadeep.in`,
    name: 'Arghyadeep Kundu',    
    title: `Arghyadeep - Portfolio`,    
    description: `DevOps Engineer | Opensource Enthusiast & Contributor | Bibliophile`,    
    author: `@arghyadeep_k`,
    github: `https://github.com/arghyadeep-k`,    
    linkedin: `https://www.linkedin.com/in/arghyadeep-kundu`,
    mastodon: `https://fosstodon.org/@arghyadeep`,
    codeberg: `https://codeberg.org/arghyadeep`,
    mail: `mailto:arghyadeep.k@gmail.com`,

    // Content of the About Me section
    about: `.NET Developer turned DevOps Engineer. Developing CI/CD solutions for an automobile 🚗 company during the day. Fiddling with opensource software at night and during the weekends. Reading books 📖 when taking a break from the screen.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Google Sheets Logger',
        description:
          'A simple Node.js module for logging data in Google Sheets',
        link: 'https://github.com/arghyadeep-k/google-sheets-logger',
      },
      {
        name: 'Async-Get-File',
        description:
          'A wrapper around download-file package to make it return a promise',
        link: 'https://github.com/arghyadeep-k/async-get-file',
      },
      {
        name: 'Vanes',
        description:
          'A NPM package which helps you to format your strings easily with placeholders. Comes in handy when you are importing the strings from another module',
        link: 'https://github.com/arghyadeep-k/vanes',
      },
      {
        name: 'OpenCV - Face Crop',
        description:
          'NPM package that auto-detects faces in a picture and crops them out',
        link: 'https://github.com/arghyadeep-k/opencv-facecrop',
      },
      {
        name: 'Caddified-Jenkins-Docker',
        description:
          'Docker image of Jenkins with Caddy pre-installed so as to serve it over HTTPS right from the start.',
        link: 'https://codeberg.org/arghyadeep/caddified-jenkins-docker',
      },
      {
        name: 'Caddified-Code-Server-Docker',
        description:
          'Docker image of Code-Server (Remote VSCode) with Caddy pre-installed so as to serve it over HTTPS right from the start.',
        link: 'https://codeberg.org/arghyadeep/caddified-code-server-docker',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [      
      {
        name: 'Hexaware Technologies Ltd.',
        description: 'Sr. DevOps Engineer, July 2019 - Present',
        link: 'https://hexaware.com',
      },
      {
        name: 'Cognizant Technology Solutions',
        description: '.NET Developer, August 2016 - July 2019',
        link: 'https://cognizant.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, Python, Groovy, .NET, C#, Java',
      },
      {
        name: 'Databases',
        description: 'MongoDB, Microsoft SQL Server',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, Ansible, Terraform, Azure, Amazon Web Services (AWS), CI / CD, Agile / Scrum, Alexa Skill Kit',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
    //   },
    // },
    {
      resolve:`gatsby-plugin-goatcounter`,
      options: {
        code: 'https://arghyadeep.goatcounter.com',        
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arghyadeep - Portfolio`,
        short_name: `arghyadeep`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
