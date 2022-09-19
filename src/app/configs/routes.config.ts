import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  example: 'example',
};

const routesNames = {
  home: '',
  about: 'about',
  ourServices: 'our-services',
  dedicatedTeams: 'dedicated-teams',
  studies: 'studies',
  contact: 'contact-us',
  error404: '404',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    about: `/${routesNames.about}`,
    ourServices: `/${routesNames.ourServices}`,
    dedicatedTeams: `/${routesNames.dedicatedTeams}`,
    studies: `/${routesNames.studies}`,
    contact: `/${routesNames.contact}`,
    error404: `/${routesNames.error404}`,
  },
};
