import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { TranslateModuleRoot } from '@shared/modules/TranslateModule.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@modules/core/core.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HomeModule } from '@components/home/home.module';
import { AboutUsModule } from '@components/about-us/about-us.module';
import { OurServicesModule } from '@components/our-services/our-services.module';
import { HeaderModule } from '@components/header/header.module';
import { HomeComponent } from '@pages/home/home.component';
import { Error404Component } from '@pages/error404/error404.component';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { OurServicesComponent } from '@pages/our-services/our-services.component';
import { DedicatedTeamsComponent } from '@pages/dedicated-teams/dedicated-teams.component';
import { ContactUsComponent } from '@pages/contact-us/contact-us.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AboutUsModule,
    HeaderModule,
    OurServicesModule,
    TranslateModuleRoot,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    LayoutComponent,
    FooterComponent,
    AboutUsComponent,
    OurServicesComponent,
    DedicatedTeamsComponent,
    ContactUsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
