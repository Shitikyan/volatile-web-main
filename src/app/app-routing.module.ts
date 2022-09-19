import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from '@configs/routes.config';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { OurServicesComponent } from '@pages/our-services/our-services.component';
import { Error404Component } from '@pages/error404/error404.component';
import { HomeComponent } from '@pages/home/home.component';
import { DedicatedTeamsComponent } from '@pages/dedicated-teams/dedicated-teams.component';
import { ContactUsComponent } from '@pages/contact-us/contact-us.component';

const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
  { path: routesNames.home, component: HomeComponent, pathMatch: 'full' },
  { path: routesNames.error404, component: Error404Component },
  { path: routesNames.about, component: AboutUsComponent },
  { path: routesNames.ourServices, component: OurServicesComponent },
  { path: routesNames.dedicatedTeams, component: DedicatedTeamsComponent },
  { path: routesNames.contact, component: ContactUsComponent },

  // otherwise redirect to 404
  { path: '**', redirectTo: RoutesConfig.routes.error404 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
