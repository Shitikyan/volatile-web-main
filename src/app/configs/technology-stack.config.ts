import { TechnologyStack } from "./types";

export const TechnologyStackConfig: TechnologyStack = {
  'FRONTEND': {
    description: 'FRONTEND_DESCRIPTION',
    technologies: [
      {
        name: 'Vue.js',
        icon: 'vuejs.svg'
      },
      {
        name: 'Angular',
        icon: 'angular.svg'
      },
      {
        name: 'React',
        icon: 'react.svg'
      },
      {
        name: 'Redux',
        icon: 'redux.svg'
      },
      {
        name: 'jQuery',
        icon: 'jquery.svg'
      },
      {
        name: 'Knockout',
        icon: 'knockout.svg'
      },
      {
        name: 'Typescript',
        icon: 'typescript.svg'
      },
    ]
  },
  'BACKEND': {
    description: 'BACKEND_DESCRIPTION',
    technologies: [
      {
        name: 'Express.js',
        icon: 'expressjs.svg'
      },
      {
        name: 'Node.js',
        icon: 'nodejs.svg'
      },
      {
        name: '.Net Core',
        icon: 'netcore.svg'
      },
      {
        name: 'Django',
        icon: 'django.svg'
      },
      {
        name: 'Flask',
        icon: 'flask.svg'
      },
    ]
  },
  'DEVOPS': {
    description: 'DEVOPS_DESCRIPTION',
    technologies: [
      {
        name: 'AWS',
        icon: 'aws.svg'
      },
      {
        name: 'Docker',
        icon: 'docker.svg'
      },
      {
        name: 'Azure',
        icon: 'azure.svg'
      },
      {
        name: 'Gitlab',
        icon: 'gitlab.svg'
      },
      {
        name: 'Jest',
        icon: 'jest.svg'
      },
    ]
  },
  'UI/UX': {
    description: 'UI/UX_DESCRIPTION',
    technologies: [
      {
        name: 'Figma',
        icon: 'figma.svg'
      },
      {
        name: 'Sketch',
        icon: 'sketch.svg'
      },
      {
        name: 'Photoshop',
        icon: 'photoshop.svg'
      },
      {
        name: 'Illustrator',
        icon: 'illustrator.svg'
      },
      {
        name: 'XD',
        icon: 'xd.svg'
      },
      {
        name: 'Zeplin',
        icon: 'zeplin.svg'
      },
    ]
  },
};
