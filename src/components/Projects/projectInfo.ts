import fecDemo from '../../assets/projectDemo/FEC_Demo.mp4';
import noteJSDemo from '../../assets/projectDemo/Note-JS_Demo.mp4';
import groupFoodieDemo from '../../assets/projectDemo/Group-Foodie_Demo.mp4';
import aetosWebsiteDemo from '../../assets/projectDemo/Aetos-Website_Demo.mp4';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: 'Note-JS',
    description:
      'A gravity based, geometric musical playground where collisions of various shapes create different notes and sounds based on the shape of the bodies. Heavily inspired by music making techniques of modular synthesis.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MatterJS',
      'HowlerJS',
      'Docker',
      'AWS',
    ],
    src: noteJSDemo,
    link: 'https://github.com/erikeh/note-js-musical-playground',
    demo: 'http://notejs.erikoh.me',
  },

  {
    name: 'Aetos Website',
    description: `Landing page of Aetos Imaging. Built purely with HTML/ERB and CSS, following designs to pixel perfect precision. Used ruby on rails as a framework to fetch data from Prismic as headless CMS, and cloudinary to fetch and manage optimized images. In order to make the website as light weight as possible, no css frameworks were used, and the site uses very little lazily-loaded javascript.`,
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'Cloudinary', 'Prismic'],
    src: aetosWebsiteDemo,
    link: 'https://aetosimaging.com',
  },
  {
    name: 'Group Foodie',
    description: `Mobile app experience built around the idea of starting and sharing a group food order among friends or coworkers, with the ability to start an order, chat about the order, and add onto an existing order with a persistent timer that ultimately "submits" the order. I architected and created the entire API and back-end for the project.`,
    technologies: [
      'React/Redux',
      'Node.js',
      'TypeScript',
      'Express',
      'PostgreSQL',
      'Knex',
    ],
    src: groupFoodieDemo,
    link: 'https://github.com/erikeh/group-foodie',
  },
  {
    name: 'This Portfolio Site!',
    description: `This is a simple static site built with React and plain old CSS! While simple, there are some cool orchestrated animations happening throughout the site! Did you know the bold red letters that spell out my name in the intro message have hover effects?`,
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'Cloudinary', 'Prismic'],
    src: null,
    link: '',
  },
];

export default projects;
