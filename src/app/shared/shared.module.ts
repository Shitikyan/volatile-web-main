import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolatilePrimeNgUiKitModule } from '@volatile-solutions/primeng-kit';

import { ThemedModule } from '@shared/components/themed/themed.module';
import { TypographyModule } from '@shared/components/typography/typography.module';
import { CapitalizeFirstPipe } from '@shared/pipes/capitalize-first.pipe';
import components from '@shared/components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ...components, 
    CapitalizeFirstPipe,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule, 
    FormsModule,
    TypographyModule,
    ThemedModule,
    TranslateModule,
  ],
  exports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule, 
    FormsModule, 
    TypographyModule,
    ThemedModule,
    CapitalizeFirstPipe,
    VolatilePrimeNgUiKitModule,
    TranslateModule,
    ...components,
  ]
})
export class SharedModule { }
