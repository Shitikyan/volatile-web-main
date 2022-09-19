import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { VolatilePrimeNgUiKitModule } from '@volatile-solutions/primeng-kit';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ImgComponent, 
  ],
  imports: [
    CommonModule,
    VolatilePrimeNgUiKitModule,
  ],
  exports: [
    ButtonComponent, 
    ImgComponent,
    VolatilePrimeNgUiKitModule,
  ]
})
export class ThemedModule { }
