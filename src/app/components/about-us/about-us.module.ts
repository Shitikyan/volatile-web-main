import { NgModule } from '@angular/core';
import { TranslateModule } from '@shared/modules/TranslateModule.module';
import { SharedModule } from '@shared/shared.module';
import { AboutUsQuestionAnswerComponent } from './about-us-question-answer/about-us-question-answer.component';
import { AboutUsThingsComponent } from './about-us-things/about-us-things.component';

@NgModule({
  imports: [SharedModule, TranslateModule],
  declarations: [AboutUsQuestionAnswerComponent, AboutUsThingsComponent],
  exports: [AboutUsQuestionAnswerComponent, AboutUsThingsComponent],
})
export class AboutUsModule {}
