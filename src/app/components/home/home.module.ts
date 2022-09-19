import { NgModule } from '@angular/core';
import { TranslateModule } from '@shared/modules/TranslateModule.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ContactUsComponent } from '@components/contact-us/contact-us.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AchievementBadgeComponent } from './main-banner/achievement-badge/achievement-badge.component';
import { WeOperateWorldwideComponent } from './we-operate-worldwide/we-operate-worldwide.component';

@NgModule({
  imports: [SharedModule, TranslateModule, AppRoutingModule, TooltipModule],
  declarations: [
    ContactUsComponent,
    MainBannerComponent,
    OurServicesComponent,
    AchievementBadgeComponent,
    WeOperateWorldwideComponent,
  ],
  exports: [
    ContactUsComponent,
    MainBannerComponent,
    OurServicesComponent,
    WeOperateWorldwideComponent,
  ],
})
export class HomeModule {}
