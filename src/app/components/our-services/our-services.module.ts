import { NgModule } from '@angular/core';
import { TranslateModule } from '@shared/modules/TranslateModule.module';
import { SharedModule } from '@shared/shared.module';
import { ServiceIntroComponent } from './service-intro/service-intro.component';
import { TechnologyStackComponent } from './technology-stack/technology-stack.component';
import { TechnologyItemComponent } from './technology-stack/technology-item/technology-item.component';

@NgModule({
  imports: [SharedModule, TranslateModule],
  declarations: [ServiceIntroComponent, TechnologyStackComponent, TechnologyItemComponent],
  exports: [ServiceIntroComponent, TechnologyStackComponent, TechnologyItemComponent],
})
export class OurServicesModule {}
