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
    description: `Landing page of Aetos Imaging. Built purely with HTML/ERB and CSS, following designs to pixel perfect precision. Used ruby on rails as a framework to fetch data from Prismic as headless CMS, and cloudinary to fetch and manage optimized images. There was a focus on building the site to be as lightweight as possible for optimal SEO, so no css libraries or javascript was used whatsoever.`,
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'Cloudinary', 'Prismic'],
    src: aetosWebsiteDemo,
    link: 'https://github.com/erikeh/group-foodie',
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
    name: 'Project Atelier',
    description: `A full-stack product page with manual css implemntation of most UI elements. Eventually we extracted 10 million+ lines of data from csv files and loaded them into a PostgreSQL database after sanitzing and tranforming data, created an API and deplyed each module of the app as a containerized microservice in a AWS ECS cluster, load balancing with ALB across 2 tasks in 2 instances.`,
    technologies: [
      'React/Redux',
      'Node.js',
      'Fastify',
      'TypeScript',
      'PostgreSQL',
      'Swiper',
      'Docker',
      'AWS',
      'ECS',
    ],
    src: fecDemo,
    link: 'https://github.com/erikeh/atelier-full-stack-product-page',
    // link: FECDemo,
  },
];

export default projects;
