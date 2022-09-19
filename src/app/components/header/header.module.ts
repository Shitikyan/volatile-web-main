import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@shared/modules/TranslateModule.module';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header.component';
import { ThemeLogoComponent } from './theme-logo/theme-logo.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [HeaderComponent, ThemeLogoComponent],
  exports: [HeaderComponent, ThemeLogoComponent],
})
export class HeaderModule { }
